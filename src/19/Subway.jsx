import sarea from "./sarea.json"
import scode from "./scode.json"
import SubwayBox from "./SubwayBox"
import TailSelect from "../components/TailSelect"
import { useState, useEffect, useRef } from "react"

export default function Subway() {
  const [tdata, setTdata] = useState([]) ;
  const selAreaRef = useRef() ;

  const handelSelect = () => {
    console.log(selAreaRef.current.value)
  }
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
      <SubwayBox />
    </div>
  )
}
