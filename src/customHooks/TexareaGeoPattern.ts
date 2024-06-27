import React from "react";

const useGeorgianPatternTextarea = () => {
  const handleTextarea = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const georgianPattern = /^[\u10A0-\u10FF\u2D00-\u2D2F]+$/;
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End",
    ];

    if (allowedKeys.includes(event.key) || georgianPattern.test(event.key)) {
      return;
    } else {
      event.preventDefault();
    }
  };

  return handleTextarea;
};

export default useGeorgianPatternTextarea;
