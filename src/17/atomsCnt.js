import { atom } from "jotai";

export const cntAtom = atom(0) ;
export const dbCntAtom = atom((get) => get(cntAtom) * 2) ;