import { useState, useEffect } from "react"
import TailButton from "../components/TailButton";

export default function MyEffect() {
  const [isActive, setIsActive] = useState(false) ;
  const [tag, setTag] = useState() ;

  const handleClick = () =>{
    setIsActive(!isActive) ;
    console.log("handleClick" , isActive) ;
  }

  const handleShow = () => {
    if (isActive) 
      setTag(<h1>상태 on</h1>);
    else
      setTag(<h1>상태 off</h1>);
  }

  useEffect(()=>{
    //컴포넌 생성시 한번 실행
    console.log("컴포넌트 생성")
  }, []);

  useEffect(()=>{
    //state변수가 변경될때
    console.log("useEffect" , isActive) ;
  }, [isActive]);

  useEffect(()=>{
    //상태가 변경될때 마다
    console.log("useEffect 상태가 변경될 때" , isActive) ;
  });

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>{tag}</div>
      {
        isActive ? <TailButton color ="blue" caption="useEffect" onHandle={handleClick} />
                 : <TailButton color ="orange" caption="useEffect" onHandle={handleClick} />
      }
      <TailButton color ="lime" caption="태그변경" onHandle={handleShow} />
      
    </div>
  )
}
