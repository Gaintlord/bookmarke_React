import React from "react";

import "./LiquidGlassButton.css";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children = "Liquid Glass Button",
  onClick,
  className = "",
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - radius;
    const y = event.clientY - rect.top - radius;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add("ripple");

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`suse-bold  liquid-glass text-white flex text-center
        shadow-2xl max-h-min  py-3 px-10 rounded-md ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;

// #EF7722 yellow
// #FAA533 yellow
// #EBEBEB gray
// #0BA6DF blue
