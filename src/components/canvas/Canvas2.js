import React from "react";
import { textareaAutoResize } from "materialize-css";

function draw(canvas, scaleX, scaleY) {
  const ctx = canvas.getContext("2d");
  ctx.scale(scaleX, scaleY);
  ctx.drawRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  ctx.beginPath();
  ctx.moveTo(0, 100);
  ctx.lineTo(scaleWidth, 100);
  ctx.moveTo(0, 400);
  ctx.lineTo(scaleWidth, 400);
  ctx.stroke();
  ctx.fill();
  ctx.endPath();
}

function CanvasDraw() {
  const [scale, setScale] = React.useState({ x: 1, y: 1 });
  const canvas = React.useRef(null);

  const calculateScaleX = () =>
    !canvas.current() ? 0 : canvas.current.clientWidth / scaleWidth;
  const calculateScaleY = () =>
    !canvas.current() ? 0 : canvas.current.clientHeight / scaleHeight;
}
