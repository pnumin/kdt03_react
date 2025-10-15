import { useState } from "react";
import TailButton from "../components/TailButton"

const BOXStyle = {
  blue : {
    on :  "bg-blue-200" ,
    off : "bg-blue-100"
  },
  orange : {
    on :  "bg-orange-200" ,
    off : "bg-orange-100"
  },
  lime : {
    on :  "bg-lime-200" ,
    off : "bg-lime-100"
  },
}

export default function MyToggleBox({color}) {
  const [isActive, setIsActive] = useState(false) ;

  const boxstyle = BOXStyle[color] ;

  const handleClick = () => {
    setIsActive(prev => !prev) ;
  }
  return (
    <div className={`w-full h-40
                    flex flex-col justify-center items-center
                    ${isActive ? boxstyle.on : boxstyle.off}`}>
      <h1 className="text-xl font-bold mb-3">
        {color} 토글 박스 
      </h1> 
      <p className={`text-sm 
                    ${isActive ? 'text-red-500' : 'text-gray-500'} 
                    font-bold mb-3`}>
        현재 상태 : {isActive ? 'on' : 'off'}
      </p>               
      <TailButton color={color} caption={color} onHandle={handleClick}/>
    </div>
  )
}
