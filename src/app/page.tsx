"use client"
import { Card } from '@/components/card/card'
import { Database } from '@/database/database'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { db } from '@/service/firebaseConnection'
import { Modal } from '@/components/modal/modal'

interface modalProps {
  title: string,
  description: string,
  created: string
}

export default function Home() {


  const { item, deleteItem } = Database()
  const { push } = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [modal, setModal] = useState<any>()


  function handlePushAddTasks(){
    push('/add-tasks')
  }

  const handleShowModal = (titulo?: string, descricao?: string, created?: string, ) => {

    const closeModal = () => {
      setShowModal(false)
    }

    if(showModal == false){
      setModal(<Modal title={titulo} description={descricao} created={created} closeModal={closeModal}/>)
      setShowModal(true)
    }
  }

  const handleDelete = (id: string) => {
    deleteItem(id)
  }

  return (
    <div className={`flex flex-col h-full items-center gap-3`} id='img-fundo'>
      <div className='flex flex-col gap-2 mt-14 items-center w-96 h-[600px] bg-zinc-950 bg-opacity-45 shadow-2xl rounded-md p-2 overflow-hidden overflow-y-scroll' id='scroll-list'>
        {
          item.map((items, index)=>(
            <div key={index} className='w-full flex flex-col gap-5'>
              <Card id={items.id} title={items.title} description={items.description} created={items.created} handleShowModal={handleShowModal} handleDelete={handleDelete}/>
            </div>
          ))
        }
      </div>
      <div className='group container w-96 h-10 flex justify-center items-center rounded-md shadow font-semibold bg-transparent text-zinc-50 overflow-hidden hover:text-zinc-950'>
        <div className='group-hover:w-96 absolute container w-0 h-10 bg-zinc-100 rounded-md transition-all duration-500'></div>
        <button className='relative rounded container w-full h-full bg-zinc-950 shadow-lg group-hover:bg-transparent transition-all duration-300' onClick={handlePushAddTasks}>Adicionar Tarefa</button>
      </div>
      {showModal == true? (modal): ''}
    </div>
  )
}
