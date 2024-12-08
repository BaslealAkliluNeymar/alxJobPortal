import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div className="border-red-200 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center w-full">
      <div className="bg-white p-6 rounded-lg w-96">
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
