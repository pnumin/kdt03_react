import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import { useState, useEffect } from "react"

export default function TodoList() {
  const [todos, setTodos] = useState([]) ; 
  const [completed, setCompleted] = useState(0) ;
  const [incompleted, setInCompleted] = useState(0) ;

  // console.log(todos)

  useEffect(() =>{
    // const newItem = [{
    //   id: 1,
    //   text: "리액트 공부",
    //   completed : false
    // }];

    //자바스크립 객체 -> 문자열 : JSON.stringify()
    // localStorage.setItem("todo", JSON.stringify(newItem)) ;

    //문자열 -> 자바스크립트 객체 : JSON.parse()
    const todos = JSON.parse(localStorage.getItem("todo")) ;
    console.log(todos[0].text)

  } , []);
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <h1 className="w-full max-w-3xl text-2xl font-bold text-center mt-10">
        할일 목록
      </h1>
      <div className="w-full max-w-3xl
                     p-5 my-2 font-bold
                     bg-amber-50 border border-amber-300">
        전체 : {todos.length} 개 | 
        완료 : {completed} 개 | 
        미완료: {incompleted} 개
      </div>
      <TodoInput />
      {/* { 
        todos.map (todo => <TodoItem key={todo.id} todo={todo} />)
      } */}
    </div>
  )
}
