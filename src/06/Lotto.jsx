import { useState } from "react"
import TailBall from "../components/TailBall"
import TailButton from "../components/TailButton"

export default function Lotto() {
  const [tags, setTags] = useState([]) ;

  const handleClick = () => {
    //set으로 선언
    let nums = new Set([]) ;

    while ( nums.size < 7) {
      let n= Math.floor(Math.random()*45 + 1) ;
      //set에서 추가
      nums.add(n) ;
    }

    //set => array로 변환
    nums = Array.from(nums);
    let bonus = nums.pop() ;

    nums.sort((a, b) => a-b) ;
    
    //태그 만들기 
    let tm = nums.map( item => <TailBall n={item} key={item} />) ;
    tm = [...tm , <div className="w-20 h-20 
                                  text-4xl font-bold
                                  flex justify-center items-center"
                      key="plus">+</div>] ;
    tm = [...tm , <TailBall n={bonus}  key={bonus} />];

    setTags(tm);

  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex justify-center items-center h-24">
        {tags}
      </div>
      <div className="mt-10">
        <TailButton color = "blue" 
                    caption = "로또번호생성" 
                    onHandle = {handleClick} />
      </div>
    </div>
  )
}
