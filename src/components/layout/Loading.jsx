import React, { useState } from "react";

const Loading = () => {
  const [time, setTime] = useState();
  return (
    <canvas
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={(e) => {
        alert(e.clientX);
      }}
    />
  );
};

export default Loading;
