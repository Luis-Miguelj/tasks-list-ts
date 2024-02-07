"use client"

import {Trash2} from 'lucide-react'

interface dadosProps {
  id: string,
  title: string,
  description: string,
  created: string,
  handleShowModal: (titulo: string, descricao: string, created: string, ) => void,
  handleDelete: (id:string) => void
}

export const Card = ({ id, title, description, created, handleShowModal, handleDelete}:dadosProps) => {

  // console.log(id)

  return(
    <div className="container w-full h-28 flex flex-col gap-1 bg-zinc-900 rounded text-zinc-50 p-2 overflow-hidden scroll-smooth shadow-lg" >
      <div className="container text-lg">
        <h1>{title}</h1>
      </div>
      <div className="container w-full h-8 text-xs overflow-hidden break-words line-clamp-2 text-ellipsis">
        <p>{description}</p>
      </div>
      <div className="flex justify-end gap-2 text-xs">
        <button className='p-1 hover:bg-zinc-100 rounded hover:text-zinc-950 font-medium transition-all duration-300' onClick={() => handleShowModal(title,description,created,)}>Ver mais</button>
        <button className='p-1 bg-transparent rounded-lg hover:bg-red-600 transition-all duration-300' onClick={()=>handleDelete(id)}><Trash2 size={18}/></button>
      </div>
    </div>
  )
}