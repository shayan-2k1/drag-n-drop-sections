"use client";
import { useRef, useState } from "react";

function Testimonial() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const testimonialRef = useRef<HTMLDivElement>(null);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", ""); // Required for Firefox
    e.dataTransfer.setDragImage(new Image(), 0, 0); // Optional for visual clarity
  };

  const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
    setPosition({
      x: position.x + e.movementX,
      y: position.y + e.movementY,
    });
  };

  return (
    <div
      ref={testimonialRef}
      draggable
      onDragStart={onDragStart}
      onDrag={onDrag}
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        border: "1px solid #ccc",
        padding: "1rem",
      }}
    >
      {/* Your testimonial content goes here */}
    </div>
  );
}

export default Testimonial;
