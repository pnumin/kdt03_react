import MyClockImg from "./MyClockImg"
import MyClockTime from "./MyClockTime"
export default function MyClock() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <MyClockImg />
      <MyClockTime /> 
    </div>
  )
}
