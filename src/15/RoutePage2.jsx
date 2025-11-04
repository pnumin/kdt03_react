import { useSearchParams } from "react-router-dom"
export default function RoutePage2() {
  const [sParams] = useSearchParams() ;
  
  return (
    <div>
      RoutePage2 {sParams.get("item1")}{sParams.get("item2")}{sParams.get("item3")}
    </div>
  )
}
