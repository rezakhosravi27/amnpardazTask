import React, { useState, useRef } from "react";

type MoveElementProps = {
  children: React.ReactNode;
};

export const MoveElement = ({ children }: MoveElementProps) => {

  const [position, setPosition] = useState({ x: 0, y: 0 });


  return (
    <div
      style={{ position: "relative", left: position.x, top: position.y }}
      onMouseDown={(e) => {
        // Get the initial mouse position
        const startX = e.pageX - position.x;
        const startY = e.pageY - position.y;

        const handleMouseMove = (e: any) => {
          setPosition({
            x: e.pageX - startX,
            y: e.pageY - startY,
          });
        };

        const handleMouseUp = (e) => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
          e.target.style.zIndex = 0;
        };

        // Add an event listener to move the element on mousemove
        document.addEventListener("mousemove", handleMouseMove);

        // Remove the event listener on mouseup
        document.addEventListener("mouseup", handleMouseUp);

        // Set the zIndex of the element to make it appear above other elements
        e.target.style.zIndex = 1;
      }}
    >
      {children}
    </div>
  );
};
