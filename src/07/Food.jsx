import FoodCard from "./FoodCard"
import TailButton from "../components/TailButton";
import fooddata from "./fooddata.json"
import { useState } from "react"

//카테고리
const categories = [
  ...new Set(fooddata.map(item => item["운영주체 분류"].replaceAll(' ', '')))
] ;
// console.log("categories" , categories)

export default function Food() {
  const [foodFilterData, setFoodFilterData] = useState(fooddata);

  const handleShowAll = () => {
    console.log("all")
    setFoodFilterData(fooddata) ;
  }

  const handleShowCategory = (ct) => { 
    let tm = fooddata.filter(item => item["운영주체 분류"].replaceAll(' ', '') === ct) ;
    setFoodFilterData(tm)
  }
  return (
    <div className="w-full h-full mt-10
                    flex flex-col justify-start items-center">
      <div className="w-9/10 border border-blue-300 p-5 my-5 
                      flex justify-center items-center">
        <TailButton color="lime" caption="전체" onHandle={handleShowAll} />
        {
          categories.map(item =>  <TailButton key={item}
                                              color="blue" 
                                              caption={item} 
                                              onHandle={() => handleShowCategory(item)} />)
        }
      </div>
      <div className="w-9/10 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
        {foodFilterData.map((item, idx) => <FoodCard key={item["연락처(대표번호)"] + idx}
                                               data={item} />)}
      </div>
    </div>
  )
}
