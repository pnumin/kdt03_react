import { useState, useEffect } from "react";

//어제 날짜 가져오기
const getYesterday = () => {
  let yesterday = new Date() ;
  yesterday.setDate(yesterday.getDate() - 1) ;

  //ISO 형식(예: 2025-09-22T09:00:00.000Z)
  return yesterday.toISOString().slice(0, 10) ;
}

export default function BoxOffice() {
  const [trs, setTrs] = useState([]);
  const [info, setInfo] = useState() ;

  const handleSelectDt = (e) => {
    let dt = e.target.value.replaceAll('-', '') ;
    getFetchData(dt) ;
  }

  const handleShowInfo = (mv) => {
    let tm = `[${mv.rankOldAndNew} : ${mv.openDt}] ${mv.movieNm} ` ;
    tm = `${tm} 상영한 스크린수 : ${parseInt(mv.scrnCnt).toLocaleString()}` ;
    tm = `${tm} 상영횟수 : ${parseInt(mv.showCnt).toLocaleString()}` ;

    setInfo(tm) ;
  }

  // const getFetchData = (dt) => {
  //   const apiKey = import.meta.env.VITE_MV_API;

  //   const baseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?' ;
  //   let url = `${baseUrl}key=${apiKey}&targetDt=${dt}` ;
  //   console.log(url)

  //   fetch(url)
  //   .then(resp => resp.json())
  //   .then(data => {
  //     setTrs(data.boxOfficeResult.dailyBoxOfficeList)
  //   })
  //   .catch(err => console.log(err));
  // }

  const getFetchData = async (dt) => {
    const apiKey = import.meta.env.VITE_MV_API;

    const baseUrl = '/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?' ;
    let url = `${baseUrl}key=${apiKey}&targetDt=${dt}` ;
    console.log(url)

    const resp = await fetch(url) ;
    const data = await resp.json() ;
    setTrs(data.boxOfficeResult.dailyBoxOfficeList) ;
  
  }

  //컴포넌트 생성시 한번
  useEffect(()=>{
    let dt = getYesterday().replaceAll('-', '') ;
    getFetchData(dt) ;
  }, []) ;

  return (
    <div className="w-full h-full flex flex-col justify-start items-center mt-10">
      <h1 className="w-9/10 text-2xl font-bold text-center p-5">
        일일박스 오피스
      </h1>
      <div className="w-9/10 flex justify-end">
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-4
                           focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               type="date" 
               max={getYesterday()}
               value ={getYesterday()} 
               onChange={handleSelectDt}/>
      </div>
      <table className="w-9/10 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-4 py-3">
                  순위
                </th>
                <th scope="col" className="px-4 py-3">
                  영화명
                </th>
                <th scope="col" className="px-4 py-3">
                  매출액
                </th>
                <th scope="col" className="px-4 py-3">
                  관객수
                </th>
                <th scope="col" className="px-4 py-3">
                  누적매출액
                </th>
                <th scope="col" className="px-4 py-3">
                  누적관객수
                </th>
                <th scope="col" className="px-4 py-3">
                  증감률
                </th>
            </tr>
        </thead>
        <tbody>
          { trs.map(item => 
            <tr key = {item.movieCd}
                onClick = { () => handleShowInfo(item) }
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200
                           hover:bg-gray-50 hover:cursor-pointer dark:hover:bg-gray-600">
                <td scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.rank}
                </td>
                <td className="px-4 py-2">
                    {item.movieNm}
                </td>
                <td className="px-4 py-2 text-right">
                    {parseInt(item.salesAmt).toLocaleString()}
                </td>
                <td className="px-4 py-2 text-right">
                    {parseInt(item.audiCnt).toLocaleString()}
                </td>
                <td className="px-4 py-2 text-right">
                    {parseInt(item.salesAcc).toLocaleString()}
                </td>
                <td className="px-4 py-2 text-right">
                    {parseInt(item.audiAcc).toLocaleString()}
                </td>
                <td className="px-4 py-2 text-center">
                    {item.rankInten > 0 ? <span className="text-red-600">▲{item.rankInten}</span>
                      : item.rankInten < 0 ? <span className="text-blue-600">▼{item.rankInten}</span> 
                      : <span>-</span>}
                </td>
            </tr>
            )
          }
          </tbody>
      </table>
      <div className="w-9/10 h-14 p-5 flex justify-center items-center
                      bg-lime-50
                      text-lg text-lime-800 font-bold mt-5
                      border border-gray-400 ">
          {info}
      </div>
    </div>
  )
}
