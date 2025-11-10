import { atom } from "jotai";

export const todosAtom = atom([
  {id : '1', text: '리액트 공부', completed : false},
  {id : '2', text: '넥스트JS 공부', completed : false},
]) ;