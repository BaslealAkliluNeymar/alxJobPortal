import React from "react";
import { Pencil } from "lucide-react"; 

const EditButton = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 text-blue-500 hover:text-blue-700 ${className}`}
      aria-label="Edit"
    >
      <Pencil size={16} />
      <span>Edit</span>
    </button>
  );
};

export default EditButton;
