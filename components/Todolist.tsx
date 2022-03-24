import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { currentTodo, todoList, updatestate, userNotes } from '../atoms/todolist'

const Initailtodo = {
    id: '',
    title: '',
    notes: ''
}

interface inputFields {
    id: string | number,
    title: string,
    notes: string
}
const Todolist = () => {
    const [todos, settodos] = useRecoilState<userNotes[]>(todoList)
    // const currentodo = useRecoilValue(currentTodo)
    const [isEditing, setIsEditing] = useRecoilState(updatestate)

    const [editTodo, setEditTodo] = useRecoilState(currentTodo)
    let edittodo = null;
    console.log(typeof setEditTodo)
    // delete todo
    const deleteTodo = (id: number | string) => {
        settodos(todos.filter(todo => todo.id !== id))
    }
    // updat value of todo
    //   add todo to current todo

    const updateTodo = (todo: inputFields) => {
        setIsEditing(true)
        setEditTodo(todo)
    }

    console.log(editTodo, "this is current todo")

    return (
        <div>
            <h1>
                Todolist
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 justify-around '>
                {
                    todos.length > 0 ? todos.map((todo) => {
                        return (
                            <div key={todo.id} className='border-2 shadow-sm shadow-white border-black p-2 rounded-lg'>
                                <div>
                                    <div className='grid  grid-cols-2 place-items-center font-bold items-center' >
                                        <h1 className='place-self-center'>
                                            {todo.title}
                                        </h1>
                                        <div className='flex place-self-end '>
                                            <span
                                                onClick={() => updateTodo(todo)}
                                                className='justify-self-end grid self-end '>
                                                📝
                                            </span>
                                            <span onClick={() => deleteTodo(todo.id)} className='justify-self-end grid self-end '>
                                                🗑
                                            </span>
                                        </div>
                                    </div>
                                    <p className='text-gray-300'>
                                        {todo.notes}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                        :
                        (
                            <div className='flex justify-center  items-center'>
                                <h1>
                                    No todo
                                </h1>
                            </div>

                        )
                }
            </div>
        </div >
    )
}

export default Todolist