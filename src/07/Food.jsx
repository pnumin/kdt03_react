import FoodCard from "./FoodCard"
import fooddata from "./fooddata.json"
import { useState } from "react"

export default function Food() {
  const [tags, setTags] = useState([]) ;
  const fdata = {
    "구분": "기초푸드마켓",
    "시군구": "남구",
    "사업장명": "남구기초푸드마켓",
    "신고기준": "당연",
    "사업장 소재지": "부산시 남구 못골로53번길 12-20(대연동)",
    "연락처(대표번호)": "051-638-1377",
    "팩스번호": "051-638-1378",
    "운영주체 분류": "3.사단법인",
    "운영주체명": "사단법인 둥지복지마을"
  }

  return (
    <div>
      <FoodCard data={fdata}/>
    </div>
  )
}
