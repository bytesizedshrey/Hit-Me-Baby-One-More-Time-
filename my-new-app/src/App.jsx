import React, { useState } from 'react'

const App = () => {
  const [color, setcolor] = useState('black')
  return (
   <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-gray-400 px-2 py-2 rounded-2xl">
        <button 
        onClick={()=>setcolor('red')}
        className='outline-none px-4 py-1 rounded' style={{backgroundColor : "gray"}}>Red</button>
        <button
        onClick={()=>setcolor('blue')}
         className='outline-none px-4 py-1 rounded' style={{backgroundColor : "gray"}}>Blue</button>
        <button
        onClick={()=>setcolor('green')}
         className='outline-none px-4 py-1 rounded' style={{backgroundColor : "gray"}}>Green</button>
      </div>
    </div>
   </div>
  )
}

export default App  