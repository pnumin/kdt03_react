import TailButton from "../components/TailButton"
import { useNavigate } from "react-router-dom"

export default function RouteHome() {
  const navigate = useNavigate() ;
  
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex">
        <TailButton color="blue"
                      caption="페이지1"
                      onHandle={() => navigate('/p1')} />
      </div>
    </div>
  )
}
