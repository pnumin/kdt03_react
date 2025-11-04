import { Link, useNavigate } from "react-router-dom"

export default function RouteNav() {
  const navigate = useNavigate() ;

  const handleClick = () => {
    navigate("/p2?item1=수박&item2=오이") ;
  }

  return (
    <div className="w-full h-40 flex justify-center items-center">
      <Link to="/" className="py-2 px-5 mx-4 border border-amber-900 
                      rounded-sm hover:bg-amber-100 hover:cursor-pointer hover:font-bold">
        홈
      </Link>
      <Link to="/p1/사과/바나나" className="py-2 px-5 mx-4 border border-amber-900 
                      rounded-sm hover:bg-amber-100 hover:cursor-pointer hover:font-bold">
        페이지1
      </Link>
      {/* <Link to="/p2" className="py-2 px-5 mx-4 border border-amber-900 
                      rounded-sm hover:bg-amber-100 hover:cursor-pointer hover:font-bold">
        페이지2
      </Link> */}
      <div  onClick={handleClick}
            className="py-2 px-5 mx-4 border border-amber-900 
                      rounded-sm hover:bg-amber-100 hover:cursor-pointer hover:font-bold">
        페이지2
      </div>
    </div>
  )
}
