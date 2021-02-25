import React, { useRef, useEffect } from "react";
import { useStyles } from "./Canvas.style";

interface CanvasProps {
  className?: string;
}

const CanvasApp = (props: CanvasProps) => {
  const classes = useStyles();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /*   const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  }; */

  /*   useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
          
      }
      
    }
  }, []); */

  return <canvas ref={canvasRef} className={classes.root} />;
};

export default CanvasApp;
