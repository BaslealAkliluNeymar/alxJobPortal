import React from 'react';

const ChatItem = () => {
  return (
    <div className="flex w-full items-center gap-4 p-3 m-2 cursor-pointer rounded-lg shadow-md transition-all 
                   hover:bg-gray-100 active:bg-green-200 border border-gray-300">
      {/* Profile Image */}
      <img
        src=""
        className="w-16 h-16 rounded-full bg-green-400 object-cover shadow-md"
        alt="Profile"
      />

      {/* Chat Preview */}
      <div className="flex flex-col gap-1 justify-center">
        <h1 className="text-lg font-semibold text-gray-800">Basleal Aklilu</h1>
        <p className="text-sm text-gray-500 truncate w-48">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default ChatItem;
