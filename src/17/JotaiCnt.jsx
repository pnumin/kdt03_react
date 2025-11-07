import TailButton from "../components/TailButton"

export default function JotaiCnt() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h1 className="mt-10 text-3xl font-bold text-center">
        전역 상태관리
      </h1>

      <div className="w-full bg-amber-50 border-amber-300
                      flex flex-col justify-start items-center
                      p-4 my-8 text-2xl font-bold">
        <div>
          count : 
        </div>    
        <div>
          double count : 
        </div>                
      </div>

      <div className="w-full flex justify-center">
        <TailButton caption="증가" color="blue" onHandle={()=>{}} />
        <TailButton caption="감소" color="orange" onHandle={()=>{}} />
      </div>
    </div>
  )
}
