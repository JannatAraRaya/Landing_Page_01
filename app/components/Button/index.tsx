// Button.tsx
import React from 'react';

interface ButtonProps {
  className?: string;
  text: string;
  clickEvent?: () => void; 
}

const Button: React.FC<ButtonProps> = ({ className, text, clickEvent }) => {
  const handleClick = () => {
    if (clickEvent) {
      clickEvent();
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
