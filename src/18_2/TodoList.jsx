import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import { useState, useEffect } from "react"

const supabaseUrl = import.meta.env.VITE_SUPABSE_URL ;
const supabaseKey = import.meta.env.VITE_SUPABSE_KEY ;

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(0);
  const [incompleted, setInCompleted] = useState(0);

  // console.log(todos)
  const getTodos = async () => {
    console.log(supabaseKey)

    const resp = await fetch(`${supabaseUrl}/rest/v1/todos?select=*&order=id.desc`, {
      method: 'GET',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
      }
    });
     
    if (resp.ok) {
      const data = await resp.json() ;
      setTodos(data);   
    }
    else {
      console.log(resp.statusText);
      setTodos([])
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    setCompleted(todos.filter(todo => todo.completed).length);
    setInCompleted(todos.filter(todo => !todo.completed).length)
  }, [todos]);

  return (
    <div className="w-full flex flex-col justify-start items-center">
      <h1 className="w-full max-w-3xl text-2xl font-bold text-center mt-10">
        할일 목록(Supabase Fetch함수)
      </h1>
      <div className="w-full max-w-3xl
                     p-5 my-2 font-bold
                     bg-amber-50 border border-amber-300">
        전체 : {todos.length} 개 |
        완료 : {completed} 개 |
        미완료: {incompleted} 개
      </div>
      <TodoInput getTodos={getTodos} />
      {
       todos.map(todo => <TodoItem key={todo.id} todo={todo}
                                                  getTodos={getTodos} />)
      }
    </div>
  )
}
