
export default function CurrentTime() {
  let ct = new Date() ;
  return (
    <div className="w-1/2 bg-black text-amber-200
                    text-center m-5 p-5
                    font-bold text-2xl">
      {ct.toLocaleTimeString()}
    </div>
  )
}
