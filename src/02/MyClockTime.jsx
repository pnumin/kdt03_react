export default function MyClockTime() {
  return (
    <div className="w-1/3 bg-pink-600
                        p-2 m-2 text-center
                        rounded-xl font-bold
                         text-amber-50 text-2xl">
      현재시각 : { new Date().toLocaleTimeString()}
    </div>
  )
}
