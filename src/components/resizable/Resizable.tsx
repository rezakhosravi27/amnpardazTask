import React, { useState, useRef } from "react";

type resizableProps = {
  children: React.ReactNode;
};

function Resizable({ children }: resizableProps) {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [isDragging, setIsDragging] = useState(false);
  const mouseStartX = useRef<any>(null);
  const mouseStartY = useRef<any>(null);

  function handleMouseDown(e: any) {
    e.preventDefault();
    setIsDragging(true);
    mouseStartX.current = e.pageX;
    mouseStartY.current = e.pageY;
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleMouseMove(e: any) {
    if (!isDragging) return;
    const newWidth = Math.max(width + e.pageX - mouseStartX.current, 10);
    const newHeight = Math.max(height + e.pageY - mouseStartY.current, 10);
    setWidth(newWidth);
    setHeight(newHeight);
    mouseStartX.current = e.pageX;
    mouseStartY.current = e.pageY;
  }

  return (
    <div
      style={{
        width: `${width}%`,
        height: `${height}%`,
        maxWidth: `${width}%`,
        backgroundColor: "blue",
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
}

export default Resizable;
