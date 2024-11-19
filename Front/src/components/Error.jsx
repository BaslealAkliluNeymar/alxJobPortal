import React from 'react'
const Error = ({ item }) => {
  console.log(item)
  const styles = {
    success: {
      color: "green",
      backgroundColor: "#d4edda",
      padding: "10px",
      border: "1px solid #c3e6cb",
      borderRadius: "5px",
      marginBottom: "10px",
    },
    failed: {
      color: "red",
      backgroundColor: "#f8d7da",
      padding: "10px",
      border: "1px solid #f5c6cb",
      borderRadius: "5px",
      marginBottom: "10px",
    },
    default: {
      color: "black",
      backgroundColor: "#f8f9fa",
      padding: "10px",
      border: "1px solid #ced4da",
      borderRadius: "5px",
      marginBottom: "10px",
    },
  };

  if (!item) {
    return <div style={styles.default}>No message provided.</div>;
  }

  const { message, type } = item;
  const style = styles[type] || styles.default;

  return (
    <div style={item.type === 'success' ? styles.success : styles.failed} className='fixed top-5 right-0 w-80 p-4 bg-red-500 text-white rounded-md shadow-md 
            animate-slide-in-out animate-pop-in-out'>
      {item.message}
    </div>
  );
};

export default Error;
