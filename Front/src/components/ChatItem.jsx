import React from 'react'

const ChatItem = () => {
  return (
    <div className='flex w-full border-green-300 gap-4 shadow-md p-1 m-1 items-start justify-center transition-all cursor-pointer hover:bg-slate-200 active:bg-green-400'>
        <img src="" className='w-24 h-24 rounded-full bg-green-400' alt="" />
        <div className='flex flex-col gap-2 justify-center items-start'>
            <h1>Basleal Aklilu</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
  )
}

export default ChatItem