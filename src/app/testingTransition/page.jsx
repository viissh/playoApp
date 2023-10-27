"use client"
import React from 'react'

import { useState } from 'react';

const TransitioningDiv = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      {isVisible && (
        <div className="bg-black h-screen text-white transition-transform duration-3000 ease-in-out transform translate-x-full">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas sapiente, dolore quae accusantium officiis odit libero pariatur est. Veniam maiores minima dolorum quo voluptas, eos quibusdam nobis numquam natus impedit.
        </div>
      )}
    </div>
  );
};

export default TransitioningDiv;





