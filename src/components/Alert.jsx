import React from "react";

const Alert = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-[45vh] max-sm:px-2 px-4">
      <h1 className="text-4xl text-center font-bold md:max-w-lg">{children}</h1>
    </div>
  );
};

export default Alert;
