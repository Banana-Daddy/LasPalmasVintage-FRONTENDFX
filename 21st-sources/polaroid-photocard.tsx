// Source: 21st.dev — 3D Card / PhotoCard
// Query: "polaroid scrapbook collage hero" / "polaroid tilted card grid"
// Date: 2026-04-30
// Borrowed: polaroid card geometry — white frame with image inside,
// rotation(-8deg)/(15deg), hover scale + secondary rotation, handwritten
// caption (Zeyada). We use this for the Wallpapered Scrapbook product
// grid AND the hero collage stack.

import React, { useState, useEffect } from 'react';

const PhotoCard = ({ src, alt, rotation, text, index, style = {} }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 700 + (index * 300));
    return () => clearTimeout(timer);
  }, [index]);

  const cardStyle = {
    position: 'absolute',
    transform: `rotate(${rotation}deg) ${isHovered ? `rotate(${rotation + 2}deg) scale(1.05)` : `rotate(${rotation}deg) scale(1)`}`,
    zIndex: isHovered ? 20 : (index === 1 ? 2 : 1),
    transition: 'all 0.3s ease-out',
    opacity: isVisible ? 1 : 0,
    ...style
  };

  return (
    <div
      className="w-[162px] h-[240px] bg-white p-2 rounded-md shadow-2xl cursor-pointer"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-[85%] bg-muted rounded-sm overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="h-[15%] flex items-center justify-center">
        <p style={{ fontFamily: '"Zeyada", cursive' }} className="text-sm text-muted-foreground tracking-tighter text-center">
          {text}
        </p>
      </div>
    </div>
  );
};

export { PhotoCard };
