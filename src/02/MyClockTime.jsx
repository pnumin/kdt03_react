import { useState, useEffect } from "react"
export default function MyClockTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    let timerId = setInterval(() => {
      setCurrentTime(new Date()) ;
    }, 1000);

    return () => clearInterval(timerId) 
  }, []);
  return (
    <div className="w-1/3 bg-pink-600
                        p-2 m-2 text-center
                        rounded-xl font-bold
                         text-amber-50 text-2xl">
      현재시각 : { currentTime.toLocaleTimeString()}
    </div>
  )
}
