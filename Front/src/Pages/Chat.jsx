import React from 'react'
import ChatItem from '../components/ChatItem'
import { Paperclip, Smile } from 'lucide-react'

const Chat = () => {
  return (
    <section className='w-full h-full overflow-x-hidden bg-white p-2 flex justify-between gap-2'>
        <div className='flex flex-col justify-center items-center  w-1/4'>
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
        </div>
        <div className='bg-slate-200 h-full w-4'></div>
        <div className='w-3/4 flex flex-col gap-2'>
            <div className='flex-2/6'>
                <h1 className='text-xl font-bold'>Basleal Aklilu</h1>
                <p>Last Seen Recently</p>
            </div>
            <div className='flex-3/6 bg-green-400 w-full h-full'>

            </div>

            <div className='flex-1/6 w-full flex items-center justify-between p-2'>
                <div className='flex items-center gap-2'>
                    <Paperclip />
                    <input type="text" placeholder='Write a new message' className='outline-none' />
                </div>
                <Smile />
            </div>
        </div>
    </section>
  )
}

export default Chat