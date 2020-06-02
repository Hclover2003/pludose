import React, { useState } from "react";

const Loading = () => {
  const [time, setTime] = useState();
  return (
    <div>
      <p className="center">
        A journey of a thousand miles begins with a single step
      </p>
    </div>
  );
};

export default Loading;
