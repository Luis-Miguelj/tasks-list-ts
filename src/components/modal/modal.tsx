interface modalProps {
  title?: string,
  description?: string,
  created?: string,
  closeModal: () => void
}

export const Modal = ({ title, description, created, closeModal}:modalProps) => {
  return(
    <div className="absolute w-full h-full flex justify-center items-center bg-zinc-800 bg-opacity-80">
      <div className="w-96 h-80 flex flex-col space-y-4 bg-zinc-50 shadow-lg rounded-md overflow-hidden break-words pt-10 p-5">
        <div>
          <h1 className="container text-3xl font-bold">{title}</h1>
        </div>
        <div className="container text-xs font-normal">
          <p>{description}</p>
        </div>
        <div className="container flex justify-end items-end h-full">
          <button onClick={()=>closeModal()}>Fechar</button>
        </div>
      </div>
    </div>
  )
}