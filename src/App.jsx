import React from 'react'

  const title = ['B', 'i', 'e', 'n']
  const colors = ['text-red-500', 'text-yellow-300', 'text-green-500', 'text-blue-500']
  const out = title.map((letters, index) => {
    return <span key={letters} className={colors[index]}>{letters}</span>
  })

const App = () => {
  return (
    <div className='container mx-auto h-screen flex items-center justify-center'>
      <h1 className='text-white font-plus-jakarta-sans text-6xl'>{out}</h1>
      <input className={`rounded-full border-solid border p-2 flex-initial w-96 border-zinc-400 bg-transparent {}`} placeholder='' type="search" id="i-inf" />
    </div>
  )
}

export default App