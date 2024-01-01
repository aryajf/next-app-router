"use client"

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("")
  const revalidate = async () => {
    const res = await fetch("http://localhost:3000/api/revalidate?tag=products&secret=aryajavas", {
      method:'POST'
    })
    if(!res.ok){
      setStatus("Failed to revalidate")
    }else{
      const response = await res.json()
      if(response.revalidate){
        setStatus("Revalidated!")
      }
    }
  }
  return (
    <div className="w-1/2 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
      <h1>{status}</h1>
      <button onClick={() => revalidate()} className="bg-black text-white p-3 m-5">Revalidate</button>
    </div>
  );
}