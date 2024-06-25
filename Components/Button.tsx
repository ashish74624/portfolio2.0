import React from 'react'

interface propType {
    text:string
}

export default function Button({text}:propType) {
  return (
    <button className="bg-white rounded-full text-black py-2 w-28" >
      {text}
    </button>
  )
}
