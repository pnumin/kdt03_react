 
export default function MyDiv3({d1, d2, d3}) {
  return (
    <div className="w-9/10 h-9/10
                    bg-amber-300 text-2xl font-bold text-amber-900
                    p-10 m-10
                   flex flex-col justify-start items-start">
      <h1>{d1} &gt; {d2} &gt; {d3}</h1>
    </div>
  )
}
