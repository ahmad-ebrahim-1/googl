import React from "react";
import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[45vh]">
      <Circles
        height="80"
        width="80"
        color="rgb(59 130 246)"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
};

export default Loading;
