import React from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'
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
const UpdtateTodo = () => {

    const [todo, setTodo] = useRecoilState<any>(currentTodo)
    const [todos, setTodos] = useRecoilState<userNotes[]>(todoList)
    const [isEditing, setIsEditing] = useRecoilState(updatestate)

    // const currentodo = useRecoilValue(currentTodo)

    const updateTodo = (id: number | string, title: string, notes: string) => {
        setIsEditing(false)
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, title, notes } : todo)))
    }
    return (
        <div className="my-10">
            <h1 className="text-2xl font-extrabold my-2">
                Update note
            </h1>
            <div className='max-w-2xl mx-auto border  border-black p-2 rounded-lg space-y-3'>
                <div className='flex items-center justify-between  gap-5'>
                    <label htmlFor="notes" className='font-bold w-[15%]'>
                        Title
                    </label>
                    <div className='w-full flex flex-col'>
                        <input type="text" placeholder="Title"
                            id="title"
                            name='title'
                            value={todo.title}
                            maxLength={30}
                            onChange={(e) => setTodo({ ...todo, [e.target.name]: e.target.value })}
                            className='rounded-lg placeholder:font-semibold px-2 py-1 text-black outline-none' />
                        <span className={`${todo.title.length > 29 && 'text-red-600'} text-xs`}>
                            {todo.title.length}/30

                        </span>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-5'>
                    <label htmlFor="notes" className='font-bold w-[15%]'>
                        Notes
                    </label>
                    <div className='w-full flex flex-col h-full'>
                        <ReactTextareaAutosize
                            className='border-2 py-1 px-2 rounded-lg text-black outline-none  placeholder:font-semibold'
                            placeholder='Take a note...'
                            value={todo.notes}
                            // rows={6}
                            maxLength={200}
                            name='notes'
                            onChange={(e) => setTodo({ ...todo, [e.target.name]: e.target.value })}
                            id="notes"
                            // maxRows={3}
                        ></ReactTextareaAutosize>
                        <span className={`${todo.notes.length > 199 && 'text-red-600 '} text-xs`}>
                            {todo.notes.length}/200
                        </span>
                    </div>
                </div>
                <button
                    onClick={() => updateTodo(todo.id, todo.title, todo.notes)}
                    className='px-3 py-1 rounded-lg bg-violet-600'>
                    ➕ Update now
                </button>
            </div>
        </div>
    )
}

export default UpdtateTodo