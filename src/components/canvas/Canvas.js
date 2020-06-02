import React, { Component } from "react";

class Canvas extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const c = canvas.getContext("2d");

    const mouse = {
      x: undefined,
      y: undefined,
    };
    const maxRadius = 50;
    const colorArray = ["#34c9ebv", "#ffbae8", "#fae29b", "#b6f7b0", "#e1b0f7"];
    const innerWidth = 2000;
    const innerHeight = 500;

    window.addEventListener("mousemove", function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    window.addEventListener("click", function (event) {
      mouse.x = event.x;
    });

    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

      this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.lineWidth = 1;
        c.fillStyle = this.color;
        c.fill();
      };

      this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
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
      const x = Math.random() * (innerWidth - radius * 2) + radius;
      var y = Math.random() * (innerHeight - radius * 2) + radius;
      var dx = Math.random() - 0.5;
      var dy = Math.random() - 0.5;
      circleArray.push(new Circle(x, y, dx, dy, radius));
    }

    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, innerWidth, innerHeight);
      for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    }

    animate();
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={2000} height={425} />
      </div>
    );
  }
}
export default Canvas;
