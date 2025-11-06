import { useState, useEffect, useRef } from "react"
import TailCard from "../components/TailCard"
import { Link } from "react-router-dom";

export default function Festival() {
  const [tdata, setTdata] = useState([]) ;
  const [area, setArea] = useState([]) ;
  const [areaFestival, setAreaFestival] = useState([]) ;
  const selRef = useRef(); 

  const handleChange = () => {
    if (selRef.current.value == ""){
      setAreaFestival([]) ;
      return ;
    } 

    let tm = tdata.filter(item => item.GUGUN_NM == selRef.current.value) ;
    setAreaFestival(tm) ;

  }

  const getFetchData = async () => {
    const apikey = import.meta.env.VITE_API_KEY ;
    const baseUrl = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?' ;
    let url = `${baseUrl}serviceKey=${apikey}`;
    url = `${url}&pageNo=1&numOfRows=45&resultType=json`;

    // console.log(url)

    const resp = await fetch(url) ;
    const data = await resp.json() ;
    setTdata(data.getFestivalKr.item)
  }

  useEffect(() => {
    getFetchData();
  }, []);

  useEffect(() => {
    if (tdata.length == 0) return ;

    let tm = tdata.map(item => item.GUGUN_NM) ;
    tm = [...new Set(tm)].sort() ;
    tm = tm.map(item => <option key={item}
                                value={item}>
                                  {item}
                        </option>)
    setArea(tm)
  } , [tdata]) ;

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
          <div className="w-9/10 p-5 h-1/4
                          bg-amber-50
                          flex flex-col justify-center items-center">
            <h1 className="w-9/10 p-4 text-2xl font-bold text-center">
              부산 축제 정보
            </h1>
            <div className="w-9/10 flex justify-center items-center">
              <select name="sel1"
                      ref= {selRef}
                      className="w-1/3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg
                                 focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                      onChange={handleChange}>
                <option value="">--- 지역을 선택하세요 ---</option>
                {area}
              </select>
            </div>
          </div>
          <div className="mt-4 w-9/10 h-3/4 overflow-y-auto
                          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {
                areaFestival.map((item,idx) => <Link to="/festival/contents" 
                                                      state = {{contents:item}} 
                                                      key={item.UC_SEQ + idx}>
                                          <TailCard key={item.UC_SEQ }
                                                      imgurl={item.MAIN_IMG_THUMB}
                                                      title={item.MAIN_TITLE.includes('(') ? item.MAIN_TITLE.split('(')[0]: item.MAIN_TITLE}
                                                      subtitle={item.TRFC_INFO}
                                                      tag={item.ADDR1}
                                            />
                                          </Link>
                                          )
              }
          </div>
        </div>
  )
}