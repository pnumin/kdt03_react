import TailButton from "../components/TailButton"
import { useState } from "react";
import { supabase } from "../supabase/client";

export default function TodoItem({ todo, getTodos }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleToggle = async () => {
    const { error } = await supabase
      .from('todos')
      .update({ completed: !todo.completed })
      .eq('id', todo.id);
    if (error) {
      console.error('Error toggling todo:', error);
    } else {
      getTodos();
    }
  }

  const handleSave = async () => {
    const { error } = await supabase
      .from('todos')
      .update({ text: editText })
      .eq('id', todo.id);
    if (error) {
      console.error('Error toggling todo:', error);
    } else {
      getTodos();
      setIsEdit(false);
    }
  }

  const handleCancel = () => {
    setIsEdit(false);
    setEditText(todo.text);
  }

  const handleDelete = async () => {
    const { error } = await supabase
      .from('todos')
      .delete()
      .eq('id', todo.id);
    if (error) {
      console.error('Error deleting todo:', error);
    } else {
      getTodos();
    }
  }

  return (
    <div className="w-full max-w-3xl flex justify-center items-center 
                    my-4">
      <input type="checkbox"
        className="w-5 h-5 cursor-pointer"
        checked={todo.completed}
        onChange={handleToggle} />

      {isEdit ? <input type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        className="flex-1 p-2 mx-2 border border-gray-200
                        rounded-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
        : <span className={`flex-1 p-2 ${todo.completed ? "line-through" : ""}`}>
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
