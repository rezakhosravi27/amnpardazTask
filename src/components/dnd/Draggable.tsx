import React from "react";
import { useDrag, useDrop } from "react-dnd";

interface DraggableProps {
  name: string;
}

const Draggable: React.FC<DraggableProps> = ({ name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: { name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {name}
    </div>
  );
};

export default Draggable;
