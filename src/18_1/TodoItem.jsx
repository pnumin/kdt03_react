import TailButton from "../components/TailButton"
import { useState } from "react";

export default function TodoItem({todo}) {
  // const setTodos = useSetAtom(todosAtom) ;
  const [isEdit , setIsEdit] = useState(false) ;
  const [editText, setEditText] = useState(todo.text) ;
  
  const handleToggle = () => {
    // setTodos(
    //   prev => prev.map( t => t.id == todo.id ? { ...t , completed : !todo.completed} : t) 
    // ) ;
  }

  const handleSave = () => {
    // setTodos(
    //   prev => prev.map( t => t.id == todo.id ? { ...t ,  text : editText} : t) 
    // ) ;
    setIsEdit(false) ;
  }

  const handleCancel = () => {
    setIsEdit(false) ;
    setEditText(todo.text) ;
  }

  const handleDelete = () => {
    // setTodos( 
    //   prev => prev.filter( t => t.id != todo.id)
    // )
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
