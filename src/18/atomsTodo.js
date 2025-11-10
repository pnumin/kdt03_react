import { atom } from "jotai";

export const todosAtom = atom([
  {id : '1', text: '리액트 공부', completed : false},
  {id : '2', text: '넥스트JS 공부', completed : false},
]) ;

export const completedAtom = atom((get) => {
  const todos = get(todosAtom) ;

  return todos.filter(todo => todo.completed).length
})

export const incompletedAtom = atom((get) => {
  const todos = get(todosAtom) ;

  return todos.filter(todo => !todo.completed).length
})