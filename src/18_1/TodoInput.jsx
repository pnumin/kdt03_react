import TailButton from "../components/TailButton"
import { useRef } from "react";

export default function TodoInput() {
  // const setTodos = useSetAtom(todosAtom) ;
  const inRef = useRef() ;

  const handleAdd = () => {
    if ( inRef.current.value == "") {
      alert("값을 입력해 주세요.");
      inRef.current.focus() ;
      return 
    }

    const newItem = {
      id: Date.now(),
      text:inRef.current.value,
      completed : false 
    }
    // setTodos( prev => [newItem, ...prev]) ;
    inRef.current.value = "" ;
    inRef.current.focus() ;
  }

  return (
    <div className="w-full max-w-3xl flex justify-center items-center 
                    my-4">
      <input type="text" 
             ref = {inRef}
             className="flex-1 p-2 border border-gray-200
                        rounded-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-600" />

      <TailButton color="blue" 
                  caption="추가"
                  onHandle={handleAdd} />
    </div>
  )
}
