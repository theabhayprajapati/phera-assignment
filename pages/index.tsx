import type { NextPage } from 'next'
import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { updatestate } from '../atoms/todolist'
import Newtodo from '../components/Newtodo'
import Todolist from '../components/Todolist'
import UpdtateTodo from '../components/UpdateTodo'

const Home: NextPage = () => {


  // const [isEditing, setIsEditing] = useRecoilState(updatestate)
  let isEditingState = useRecoilValue(updatestate)
  return (
    <div className="font-Montserrat max-w-6xl  mx-auto p-4">
      <Head>
        <title>
          Phera | Assignment - Home
        </title>
      </Head>

      <h1 className='text-2xl font-bold'>
        Phera | Assignment - Home
      </h1>
      <main className=' max-w-5xl mx-auto '>

        <div className='max-w-2xl mx-auto'>
          {
            !isEditingState ? <Newtodo /> : <UpdtateTodo />
          }
        </div>
        <div>
          <Todolist />
        </div>
      </main>
    </div>
  )
}

export default Home
