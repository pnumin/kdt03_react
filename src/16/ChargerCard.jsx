
export default function ChargerCard({color, title, num}) {
  const bgColor = {
    "blue" : "bg-blue-50" ,
    "orange" : "bg-orange-50"
  }
  return (
    <div className={`w-full h-20 ${bgColor[color]} 
                     border border-gray-200 rounded-md
                     p-5
                     flex flex-col justify-center items-center`}>
      <p className="text-sm text-gray-400">
        {title}
      </p>
      <p className="text-2xl font-bold">
        {num}개
      </p>
    </div>
  )
}
