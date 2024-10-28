import React from 'react';
import ChatItem from '../components/ChatItem';
import { Paperclip, Smile, Send } from 'lucide-react';

const Chat = () => {
  return (
    <section className="w-full h-full bg-gray-100 p-4 flex gap-4">
      {/* Sidebar with Chat Items */}
      <div className="w-1/4 bg-white shadow-lg rounded-lg p-4 overflow-y-auto space-y-4">
        {[...Array(6)].map((_, index) => (
          <ChatItem key={index} />
        ))}
      </div>

      {/* Divider */}
      <div className="w-[1px] bg-gray-300"></div>

      {/* Main Chat Section */}
      <div className="w-3/4 flex flex-col bg-white shadow-lg rounded-lg">
        {/* Header Section */}
        <div className="p-4 border-b flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">Basleal Aklilu</h1>
            <p className="text-sm text-gray-500">Last seen recently</p>
          </div>
        </div>

        {/* Chat Messages Section */}
        <div className="flex-grow bg-gray-50 p-4 space-y-4 overflow-y-auto">
          {/* Example messages */}
          <div className="flex justify-start">
            <div className="bg-green-100 p-3 rounded-lg shadow-md max-w-sm">
              <p>Hello! How are you today?</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-blue-100 p-3 rounded-lg shadow-md max-w-sm">
              <p>I’m doing great, thanks! How about you?</p>
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className="p-4 border-t flex items-center gap-4 bg-gray-50">
          <Paperclip className="text-gray-500" />
          <input
            type="text"
            placeholder="Write a new message..."
            className="flex-grow p-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <Smile className="text-gray-500" />
          <button className="p-2 bg-blue-500 rounded-full text-white shadow-lg hover:bg-blue-600">
            <Send size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Chat;
