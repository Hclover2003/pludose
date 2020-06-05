import React, { useRef, useState, useEffect } from "react";

function Canvas2() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  let ref = useRef();
  useEffect(() => {
    let canvas = ref.current;
    let context = canvas.getContext("2d");
    var isMouseDown = false;
    var mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    window.addEventListener("mousemove", function (event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });
    window.addEventListener("mousedown", function () {
      isMouseDown = true;
    });

    window.addEventListener("mouseup", function () {
      isMouseDown = false;
    });
    function Explosion() {
      this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.lineWidth = 1;
        c.fillStyle = this.color;
        c.fill();
      };
    }
  });

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <div>
      <canvas ref={ref} width={width} height={500} />
    </div>
  );
}

export default Canvas2;
