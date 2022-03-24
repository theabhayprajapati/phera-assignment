// make a recoil atom

import { atom } from "recoil";

export interface userNotes {
    title: string;
    id:string | number;
    notes: string;
}

const Initailtodo:userNotes = {
    id: '',
    title: '',
    notes: ''
}

// set interface to atom

export const  todoList = atom<userNotes[]>({
    key: 'todoState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});


export const currentTodo = atom({
    key: 'updatetodo', // unique ID (with respect to other
    default: {}
})


export const updatestate = atom({ 
    key: 'updatestate', // unique ID (with respect to other
    default: false
})