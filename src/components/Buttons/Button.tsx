import React from "react";
interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button__Dark: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button
        className={`px-9 py-4 rounded-full text-lg text-black bg-[#FF9827] font-semibold hover:bg-opacity-90 transition duration-300`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button__Dark;
