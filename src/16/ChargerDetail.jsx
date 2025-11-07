import stat from "./data/stat.json"
import TailButton from "../components/TailButton"

import { useLocation, useNavigate } from "react-router-dom"

export default function ChargerDetail() {
  const locaton = useLocation();
  const item = locaton.state.item;
  console.log(item)

  const navigate = useNavigate();
  // 목록으로 돌아갈 때 검색 조건을 쿼리 파라미터로 전달하여 이전 결과 복원
  const handleHome = () => {
    navigate(`/chargerinfo`);
  }

  const kakaoMapUrl = `https://map.kakao.com/link/map/${item?.statNm.replace(',', '').replace(' ', '')},${item?.lat},${item?.lng}`;
  return (
    <div className="w-7/10 sm:w-full flex flex-col justify-start items-center">
      <div className="flex justify-center items-center  my-4">
        <h1 className="text-2xl font-bold my-4">{item.statNm}</h1>
        <div className="text-sm text-gray-500 mx-4">
          (충전소id : {item.statId})
        </div>
      </div>
      <div className="w-8/10 border-b p-4 flex flex-col justify-start items-end">
        {item.stat == 2 ? <div className="mx-2 p-2 bg-green-100 rounded-full font-bold">{stat[item.stat]}</div>
          : <div className="mx-2 p-2 bg-red-100 rounded-full font-bold">{stat[item.stat]}</div>}

      </div>
      <div className="w-8/10 border-b p-4 flex flex-col justify-start items-start">
        <div className="mx-2">{item.addr}<a href={kakaoMapUrl} target="_blank"
          className="bg-amber-300 p-2 rounded-sm mx-4"
        >카카오지도보기</a></div>
        <div className="mx-2">{item.addrDetail == "null" ? "" : item.addrDetail} </div>
        <div className="mx-2">{item.location == "null" ? "" : item.location}

        </div>
        <div className="mx-2 my-4 text-sm text-orange-700">{item.useTime == "null" ? "" : item.useTime}

        </div>

      </div>
      <div className="w-8/10 border-b p-4 flex justify-start items-center">
        <div className="mx-2">{item.bnm}</div>
        <div className="mx-2">{item.busiNm} </div>
        <div className="mx-2">{item.busiCall} </div>

      </div>
      <div className="w-full flex justify-center items-center mt-5">
        <TailButton caption="목록으로" color="blue" onHandle={handleHome} />
      </div>
    </div>
  )
}
