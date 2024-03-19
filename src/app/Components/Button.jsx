import React from 'react';

const Button = ({ onClick, children,style }) => {
  return (
    <button
      onClick={onClick}
      className="border-solid border border-gray-400 rounded-3xl py-4 px-8 gap-2.5 bg-white-500 hover:bg-blue-500"
      style={style? style:{backgroundColor:"#0041E8",color:"#ffffff",borderRadius:"30px",hover:"#0041E8"}}
    >
      {children}
    </button>
  );
};
export default Button;
