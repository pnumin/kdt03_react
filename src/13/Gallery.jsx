import TailCard from "../components/TailCard"
import TailInput from "../components/TailInput"
import TailButton from "../components/TailButton";
import { useRef, useEffect, useState } from "react"

export default function Gallery() {
  const [tdata, setTdata] = useState([]);
  const kwRef = useRef();

  const handleCancel = () => {
    setTdata([]) ;
    kwRef.current.value = "" ;
    kwRef.current.focus();
  }

  const getFetchData = async () => {
    const apikey = import.meta.env.VITE_API_KEY;
    // const baseUrl = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?';
    const baseUrl = '/api/B551011/PhotoGalleryService1/gallerySearchList1?';
    const kw = encodeURI(kwRef.current.value);
    let url = `${baseUrl}serviceKey=${apikey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
    url = `${url}&keyword=${kw}&_type=json`;


    // url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=8qw7g%2FC%2BMGd2iRqEvb%2FEx0Sg3ZwAAsnS%2FQ7rRaU3l4UUYfNWgyAbYpNw541yy9pueEvoCcNwmCww8ss32BBWEA%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%EC%84%9C%EC%9A%B8%20%EC%95%BC%EA%B2%BD%20%EC%B6%95%EC%A0%9C&_type=json'
    console.log(url)
    const resp = await fetch(url);
    const data = await resp.json();
    setTdata(data.response.body.items.item)
  }

  const handleClick = () => {
    if (kwRef.current.value == '') {
      alert('키워드를 입력해 주세요.');
      kwRef.current.focus();
      return
    }

    getFetchData() ;
  }

  useEffect(() => {
    kwRef.current.focus();
  }, [])



  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="w-9/10 p-5 h-1/4
                      bg-amber-50
                      flex flex-col justify-center items-center">
        <h1 className="w-9/10 p-4 text-2xl font-bold text-center">
          한국관광공사 사진 정보 서비스
        </h1>
        <div className="grid grid-cols-2">
          <TailInput type="text" name="txt1" ref={kwRef} />
          <div>
            <TailButton color="blue"
              caption="조회"
              onHandle={handleClick} />
            <TailButton color="blue"
              caption="취소"
              onHandle={handleCancel} />
          </div>
        </div>
      </div>
      <div className="mt-4 w-9/10 h-3/4 overflow-y-auto
                      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {
          tdata.map(item => <TailCard key={item.galContentId}
                                      imgurl={item.galWebImageUrl}
                                      title={item.galTitle}
                                      subtitle={item.galPhotographyLocation}
                                      tag={item.galSearchKeyword}
                            /> ) 
        } 
      </div>
    </div>
  )
}
