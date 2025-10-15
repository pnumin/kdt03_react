//1. useState import
import { useState } from "react";

export default function MyListCard({title, imgUrl, content}) {
  //2. useState 선언
  const [scnt , setScnt] = useState(0) ;
  const [dcnt , setDcnt] = useState(0) ;
 
  let cnt = 0 ;

  //좋아요
  const handleClick = () => {
    cnt = cnt + 1;
    setScnt(prev => prev + 1); 
    setScnt(prev => prev + 1);
    setScnt(prev => prev + 1);
    console.log(`${title} click : ${cnt}`)
  }

  //싫어요
  const handleClick2 = () =>{
    setDcnt(dcnt + 1) ;
  }

  return (
    <div className="w-full flex justify-start items-start 
                    p-5
                    border-1 border-gray-400">
      <div className="w-1/3 mr-5">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="w-2/3 h-44 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">
            {title}
          </h1>
          <p className="text-gray-500">
            {content}
          </p>
        </div>
        <div className="w-full flex font-bold justify-between">
          <div className="cursor-pointer hover:text-red-500"
               onClick={handleClick}>
            좋아요 ❤️ {scnt}
          </div>  
          <div className="cursor-pointer hover:text-red-500"
               onClick={handleClick2}>
            싫어요 👎 {dcnt}
          </div>
        </div>
      </div>
    </div>
  )
}
