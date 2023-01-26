import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CanvasPaper = styled.canvas`    position: relative;
top: 0;
left: 0;
width: 100%;
object-fit: contain;
height: 100%;
}`;

export default function Canvas({ img }) {
  const canvasRef = useRef(null);
  const [imgData, setImgData] = useState();
  const [context, setContext] = useState();

  useEffect(() => {
    const width = 500;
    const height = 500;
    const canvas = canvasRef.current;
    let context = canvas.getContext("2d");
    setContext(canvas.getContext("2d"));
    canvas.width = width;
    canvas.height = height;
    context.drawImage(img, 0, 0, width, height);
  }, [canvasRef]);

  return (
    <>
      <CanvasPaper ref={canvasRef} />
    </>
  );
}
