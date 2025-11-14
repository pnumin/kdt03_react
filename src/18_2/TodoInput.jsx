import TailButton from "../components/TailButton"
import { useRef } from "react";

const supabaseUrl = import.meta.env.VITE_SUPABSE_URL ;
const supabaseKey = import.meta.env.VITE_SUPABSE_KEY ;

export default function TodoInput({getTodos}) {
  const inRef = useRef() ;

  const handleAdd = async() => {
    if ( inRef.current.value == "") {
      alert("값을 입력해 주세요.");
      inRef.current.focus() ;
      return 
    }

    const resp = await fetch(`${supabaseUrl}/rest/v1/todos?`, {
      method: 'POST',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json' 
      },
      body : JSON.stringify({text:inRef.current.value,completed : false})
    });
     
    if (resp.ok) {
      getTodos() ;
      inRef.current.value = "" ;
      inRef.current.focus() ;  
    }
    else {
      console.log(resp.statusText);
    }
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
