import scode from "./scode.json";
export default function SubwayBox({ idx , item }) {
  console.log(item)
  console.log(Object.keys(scode))
  return (
    <div className="w-full flex flex-col justify-start my-2">
      <div className={`w-full px-5
                        ${idx == 0 ? "text-lime-800" : "text-amber-800"} 
                    font-bold`}>
        {item.office} {item.site} {item.city}
        (
        {item.controlnumber.slice(0, 4)}.
        {item.controlnumber.slice(4, 6)}.
        {item.controlnumber.slice(6, 8)} &nbsp;
        {item.controlnumber.slice(8, 10)}시)
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-2">
        {
          Object.keys(scode).map(c => <div key={c} className="w-full flex flex-col"> 
                                        <div className={`${idx == 0 ? "bg-lime-800" : "bg-amber-800"}
                                                        text-white p-2
                                                        font-bold text-sm
                                                        flex flex-col justify-center items-center`}>
                                          <div>{scode[c]["name"]}</div>
                                          <div>({c})</div>
                                        </div>
                                        <div className={` border p-2 text-center
                                                          ${idx == 0 ? "border-lime-800" : "border-amber-800"}`}>
                                         {item[c]} {item[c] == '-' ? '' : scode[c]["unit"]}
                                        </div>
                                      </div>)
        }
      </div>
    </div>
  )
}
