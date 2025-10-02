import MyDiv2 from "./MyDiv2"
export default function MyDiv1() {
  const d1 = 'div1' ;
  const d2 = 'div2' ;
  const d3 = 'div3' ;
  return (
    <div className="w-full md:w-7/10 h-2/3
                    bg-amber-700 text-2xl font-bold text-amber-50
                    p-10 
                   flex flex-col justify-start items-start">
      <h1>{d1}</h1>
      <MyDiv2 dv1={d1} dv2={d2} dv3={d3} />
    </div>
  )
}
