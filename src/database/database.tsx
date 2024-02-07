"use client"
import { useState, useEffect } from "react"
import {
  collection,
  orderBy,
  onSnapshot,
  query,
  doc,
  deleteDoc
} from 'firebase/firestore'
import { db } from "@/service/firebaseConnection"


interface databaseProps {
  id: string,
  title: string,
  description: string,
  created: string,
  completed: boolean,
}

export const Database = () => {
  const [item, setItem] = useState<databaseProps[]>([])

  useEffect(()=>{
    const listRef = collection(db, 'list')
    const listQuery = query(listRef, orderBy('created', "asc"))

    const unsub = onSnapshot(listQuery, (snapshot)=>{
      const list: databaseProps[] = []
      snapshot.forEach((doc)=>{
        list.push({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          created: doc.data().created,
          completed: doc.data().completed,
        })

        setItem(list)
      })

      return () => {
        console.log('saiu')
        unsub()
      }

    })
  },[])

  const deleteItem = async (id:string) => {
    const docRef = doc(db, 'list', id)
    await deleteDoc(docRef)
  }


  return { item, deleteItem }
}