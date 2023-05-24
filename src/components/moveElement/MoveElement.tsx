import React, { useState, useRef } from "react";

type MoveElementProps = {
  children: React.ReactNode;
};

export const MoveElement = ({ children }: MoveElementProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLInputElement>(null);

  const handleMouseDown = (event: any) => {
    event.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: any) => {
    const element = elementRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.width / 2;
      const y = event.clientY - rect.height / 2;
      setPosition({ x, y });
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={elementRef}
      onMouseDown={handleMouseDown}
      style={{
        position: "relative",
        top: position.y,
        left: position.x,
        height: "auto",
        backgroundColor: "red",
      }}
    >
      {children}
    </div>
  );
};
