import React, { Component, useEffect, useRef } from "react";

function Canvas() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  let ref = useRef();
  useEffect(() => {
    const canvas = ref.current;
    const c = canvas.getContext("2d");
    const mouse = {
      x: undefined,
      y: undefined,
    };
    const maxRadius = 50;

    const colorArray = ["#ffffff", "f5f5eb", "ffffde"];
    // "#34c9ebv", "#ffbae8", "#fae29b", "#b6f7b0", "#e1b0f7"
    window.addEventListener("mousemove", function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.minRadius = radius;
      this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

      this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.lineWidth = 1;
        c.fillStyle = this.color;
        c.fill();
      };

      this.update = function () {
        if (this.x + this.radius > width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        //add interactivity

        if (
          mouse.x - this.x < 50 &&
          mouse.x - this.x > -50 &&
          mouse.y - this.y < 50 &&
          mouse.y - this.y > -50
        ) {
          if (this.radius < maxRadius) {
            this.radius += 1;
          }
        } else if (this.radius > this.minRadius) {
          this.radius -= 1;
        }
        this.draw();
      };
    }

    const circleArray = [];
    for (var i = 0; i < 500; i++) {
      const radius = Math.random() * 3 + 1;
      const x = Math.random() * (width - radius * 2) + radius;
      var y = Math.random() * (height - radius * 2) + radius;
      var dx = Math.random() - 0.5;
      var dy = Math.random() - 0.5;
      circleArray.push(new Circle(x, y, dx, dy, radius));
    }

    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, width, height);
      for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    }

    animate();
  });

  return (
    <div>
      <canvas ref={ref} width={width} height={500} />
    </div>
  );
}
export default Canvas;
