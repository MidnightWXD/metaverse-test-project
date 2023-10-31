'use client';
import { useState, useRef } from 'react';

export default function DraggableContainer({ children }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  // Handle mouse move event only when dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const x = e.clientX - startX;
    containerRef.current.scrollLeft = scrollLeft - x;
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className='flex flex-shrink-0 min-w-0 overflow-hidden w-full h-full gap-6'
    >
      {children}
    </div>
  );
}
