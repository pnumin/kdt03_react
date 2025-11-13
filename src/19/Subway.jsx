import sarea from "./sarea.json"
import SubwayBox from "./SubwayBox"
import TailSelect from "../components/TailSelect"
import { useState, useEffect, useRef, use } from "react"

export default function Subway() {
  const [tdata, setTdata] = useState([]) ;
  const selAreaRef = useRef() ;

  const getFetchData  = async () => {
    const dt = new Date().toISOString().slice(0, 10).replaceAll('-', '') ;
    // //https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?serviceKey=8qw7g%2FC%2BMGd2iRqEvb%2FEx0Sg3ZwAAsnS%2FQ7rRaU3l4UUYfNWgyAbYpNw541yy9pueEvoCcNwmCww8ss32BBWEA%3D%3D&pageNo=1&numOfRows=5&resultType=json&controlnumber=2025111306&areaIndex=201193
    const apikey = import.meta.env.VITE_API_KEY ;
    const baseUrl = "/api/6260000/IndoorAirQuality/getIndoorAirQualityByStation?" ;
    let url = `${baseUrl}serviceKey=${apikey}&pageNo=1&numOfRows=50`;
    url =  `${url}&resultType=json&controlnumber=${dt}&areaIndex=${selAreaRef.current.value}`;

    console.log(url)
    const resp = await fetch(url) ;
    const data = await resp.json() ;

    let tm = data.response.body.items.item ;
    tm = tm.sort((a, b) => a.controlnumber - b.controlnumber) ;
    setTdata(tm);
  }

  const handelSelect = () => {
    console.log(selAreaRef.current.value)
    if(!selAreaRef.current.value ) return ;
    getFetchData() ;

  }

  useEffect(() => {
    console.log(tdata)
  } , [tdata]);
  return (
    <div className="w-9/10 flex flex-col justify-start mt-10">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <h1 className="w-full p-5 text-2xl font-bold text-center">
          부산 실내공기질 정보
        </h1>
        <TailSelect id="selArea"
                    ref={selAreaRef} 
                    title="부산지하철역" 
                    opk={sarea.map(item => item["코드"])} 
                    opv={sarea.map(item => item["측정소"])} 
                    onHandle={handelSelect} />
      </div>
      { tdata && tdata.map((item, idx) => <SubwayBox key={item.controlnumber}
                                              idx={idx % 2}
                                              item={item} />)}
      
    </div>
  )
}
