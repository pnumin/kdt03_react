import TailButton from "../components/TailButton"
import { useState } from "react";

const supabaseUrl = import.meta.env.VITE_SUPABSE_URL ;
const supabaseKey = import.meta.env.VITE_SUPABSE_KEY ;

export default function TodoItem({todo, getTodos}) {
  const [isEdit , setIsEdit] = useState(false) ;
  const [editText, setEditText] = useState(todo.text) ;
  
  const handleToggle = async() => {
    const resp = await fetch(`${supabaseUrl}/rest/v1/todos?id=eq.${todo.id}`, {
      method: 'PATCH',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json' 
      },
      body : JSON.stringify({completed : !todo.completed})
    });
     
    if (resp.ok) {
      getTodos() ; 
    }
    else {
      console.log(resp.statusText);
    }
  }

  const handleSave = async() => {
    const resp = await fetch(`${supabaseUrl}/rest/v1/todos?id=eq.${todo.id}`, {
      method: 'PATCH',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json' 
      },
      body : JSON.stringify({text : editText})
    });
     
    if (resp.ok) {
      getTodos() ; 
      setIsEdit(false) ;
    }
    else {
      console.log(resp.statusText);
    }
  }

  const handleCancel = () => {
    setIsEdit(false) ;
    setEditText(todo.text) ;
  }

  const handleDelete = async() => {
    const resp = await fetch(`${supabaseUrl}/rest/v1/todos?id=eq.${todo.id}`, {
      method: 'DELETE',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}` 
      } 
    });
     
    if (resp.ok) {
      getTodos() ;  
    }
    else {
      console.log(resp.statusText);
    }
  }
  return (
    <div className="w-full max-w-3xl flex justify-center items-center 
                    my-4">
      <input type="checkbox"
             className="w-5 h-5 cursor-pointer"
             checked={todo.completed}
             onChange={handleToggle} />

      { isEdit ? <input type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="flex-1 p-2 mx-2 border border-gray-200
                        rounded-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
               : <span className={`flex-1 p-2 ${ todo.completed ? "line-through" : ""}`}>
                  {todo.text}
                </span>
      }
      {
        isEdit ? <>
                  <TailButton color="lime" 
                        caption="저장"
                        onHandle={handleSave} />
                  <TailButton color="orange" 
                        caption="취소"
                        onHandle={handleCancel} />
                 </>
               : <>
                  <TailButton color="lime" 
                        caption="수정"
                        onHandle={() => setIsEdit(true)} />
                  <TailButton color="orange" 
                        caption="삭제"
                        onHandle={handleDelete} />
                 </>
      }
      
    </div>
  )
}
