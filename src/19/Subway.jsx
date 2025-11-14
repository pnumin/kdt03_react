import sarea from "./sarea.json";
import SubwayBox from "./SubwayBox";
import TailSelect from "../components/TailSelect";
import { useState, useRef, use, Suspense } from "react";

// 데이터 캐시: 동일한 URL에 대한 반복적인 fetch를 방지합니다.
const dataCache = new Map();

// 데이터 페칭 함수: Promise를 반환합니다.
// 캐시를 확인하고, 캐시에 없는 경우에만 fetch를 수행합니다.
function fetchData(area) {
    const dt = new Date().toISOString().slice(0, 10).replaceAll('-', '');
    const apikey = import.meta.env.VITE_API_KEY;
    const baseUrl = "/api/6260000/IndoorAirQuality/getIndoorAirQualityByStation?";
    let url = `${baseUrl}serviceKey=${apikey}&pageNo=1&numOfRows=50`;
    url = `${url}&resultType=json&controlnumber=${dt}&areaIndex=${area}`;

    if (!dataCache.has(url)) {
        const promise = fetch(url)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error(`HTTP error! status: ${resp.status}`);
                }
                return resp.json();
            })
            .then(data => {
                // API가 데이터가 없을 때 빈 문자열을 반환하는 경우가 있어 처리
                if (data.response.body.items === "" || !data.response.body.items) {
                    return [];
                }
                let tm = data.response.body.items.item;
                tm = tm.sort((a, b) => a.controlnumber - b.controlnumber);
                return tm;
            });
        dataCache.set(url, promise);
    }
    return dataCache.get(url);
}

// 데이터를 표시하는 자식 컴포넌트
// use 훅을 사용하여 데이터 로딩을 처리합니다.
// use(promise)는 promise가 pending 상태일 때, 가장 가까운 Suspense fallback을 보여줍니다.
function SubwayData({ area }) {
    const tdata = use(fetchData(area));

    return (
        <div className="w-full">
            {tdata.length > 0 ? (
                tdata.map((item, idx) => (
                    <SubwayBox key={item.controlnumber} idx={idx % 2} item={item} />
                ))
            ) : (
                <div className="w-full text-center p-5">해당 지역의 데이터가 없습니다.</div>
            )}
        </div>
    );
}

// 메인 컴포넌트
export default function Subway() {
    const [selectedArea, setSelectedArea] = useState(null);
    const selAreaRef = useRef();

    // Select 박스에서 지역을 선택했을 때 호출되는 함수
    const handleSelect = () => {
        const areaValue = selAreaRef.current.value;
        if (areaValue) {
            setSelectedArea(areaValue);
        } else {
            setSelectedArea(null);
        }
    };

    return (
        <div className="w-9/10 flex flex-col justify-start items-center mt-10">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <h1 className="w-full p-5 text-2xl font-bold text-center">
                    부산 실내공기질 정보 (Suspense 적용)
                </h1>
                <TailSelect
                    id="selArea"
                    ref={selAreaRef}
                    title="부산지하철역"
                    opk={sarea.map(item => item["코드"])}
                    opv={sarea.map(item => item["측정소"])}
                    onHandle={handleSelect}
                />
            </div>

            {/* Suspense를 사용하여 데이터 로딩 중에 fallback UI를 표시합니다. */}
            <Suspense fallback={<div className="w-full text-center text-xl font-bold p-5">로딩중...</div>}>
                {selectedArea ? (
                    <SubwayData area={selectedArea} />
                ) : (
                    <div className="w-full text-center p-5">지역을 선택해주세요.</div>
                )}
            </Suspense>
        </div>
    );
}
