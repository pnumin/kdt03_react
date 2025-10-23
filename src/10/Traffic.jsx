import TrafficNav from "./TrafficNav"
import TrafficInfo from "./TrafficInfo";
import trafficData from "./교통사고통계.json"

import { useState, useEffect } from "react"

export default function Traffic() {
  //전체데이터
  const [tdata, setTdata] = useState([]) ;

  //대분류데이터
  const [c1, setC1] = useState([]) ;
  const [selectC1, setSelectC1] = useState() ;

  //사고유형 데이터
  const [c2, setC2] = useState([]) ;
  const [selectC2, setSelectC2] = useState() ;

  //사고데이터
  const [tInfo, setTinfo] = useState([]) ;

  const getFetchData = () => {
    setTdata(trafficData) ;
  }

  useEffect(() => {
    getFetchData() ;
  } , []);

  //대분류
  useEffect(()=>{
    console.log(tdata)
    if (tdata.length == 0) return  ;

    let tm = tdata.map( item => item["사고유형대분류"]) ;
    tm = [...new Set(tm)] ;
    setC1(tm) ;

    console.log(tm)
  }, [tdata]);

  //사고유형
  useEffect(() => {
    console.log("대분류 ", selectC1)
    if (c1.length == 0) return  ;

    let tm = tdata.filter( item => item["사고유형대분류"] == selectC1)
    tm = tm.map(item => item["사고유형"]) ;
    tm = [...new Set(tm)] ;
    setC2(tm) ;
    setTinfo([]) ;

    console.log(tm)
  } , [selectC1]) ;

  //사고자료
  useEffect(() => {
    if (!selectC1 || !selectC2 ) return ;
    let tm = tdata.filter( item => item["사고유형대분류"] == selectC1 && 
                                    item["사고유형"] ==  selectC2
    )

    setTinfo(tm);

  } , [selectC2])

  //사고 데이터가 결정되면
  useEffect(() => {
    console.log(tInfo)
  } , [tInfo]) ;

  return (
    <div className="w-full flex flex-col justify-start items-center mt-10">
      { c1 && 
        <TrafficNav title="대분류" category = {c1}  selectC= {selectC1} setSelectC={setSelectC1}/> 
      }
      { c2 && 
        <TrafficNav title="사고유형" category = {c2}  selectC= {selectC2} setSelectC={setSelectC2}/> 
      }
      {
        tInfo && tInfo.map(item => <TrafficInfo key={item["도로종류"]} 
                                                        infoData = {item} />)
        
      }
    </div>
  )
}
