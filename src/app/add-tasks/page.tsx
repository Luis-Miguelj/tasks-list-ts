"use client"
import {ArrowLeftCircle} from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { db } from '@/service/firebaseConnection'
import { addDoc, collection } from 'firebase/firestore'

export default function AddTasks(){

  const { back } = useRouter()

  const [title, setTitle] = useState<string | number>('')
  const [description, setDescription] = useState<string | number>('')
  
  const handleBackTasks = () =>{
    back()
  }

  const handleAdd = async (e:FormEvent) =>{
    e.preventDefault()

    if(title === '' || description === ''){
      alert('Preencha todos os campos')
      return
    }

    addDoc(collection(db, 'list'), {
      title: title,
      description: description,
      created: new Date(),
      completed: false
    }).then(()=>{
      setTitle('')
      setDescription('')
      console.log('Adicionado com sucesso!')
    }).catch((err)=>{
      console.log(new Error(err))
    })

  }


  return(
    <div className='flex flex-col h-full items-center gap-3 pt-14' id='img-fundo'>
      <div className='w-96 h-[600px] flex flex-col items-center gap-10 pl-5 pr-5 pt-5 bg-zinc-950 rounded-md bg-opacity-45 shadow-xl'>
        <div className='w-full flex justify-between font-semibold text-zinc-50'>
          <ArrowLeftCircle className='hover:text-zinc-500 transition-all duration-300 cursor-pointer'onClick={handleBackTasks}/>
          <h1 className='select-none'>Adiconar Tarefas</h1>
        </div>
        <div className='container h-[450px] flex flex-col items-center'>
          <form onSubmit={handleAdd} className='container w-80 flex flex-col gap-4'>
            
              <div className='flex flex-col gap-1'>
                <h1 className='text-zinc-50 font-semibold'>Título da tarefa:</h1>
                <input type="text" className='rounded-sm p-2 outline-none shadow text-sm' value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='Titulo da tarefa'/>
              </div>
              <textarea className='rounded-sm p-1 outline-none text-sm' value={description} onChange={(e)=> setDescription(e.target.value)} rows={10}/>
            
            <div className='container h-24 flex justify-center items-center'>
              <input type="submit" value={'Adicionar'} className='bg-zinc-900 w-32 h-8 rounded-sm text-zinc-50 '/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}