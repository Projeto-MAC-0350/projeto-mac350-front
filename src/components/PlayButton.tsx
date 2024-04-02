import React from "react";

type PlayButtonProps = {
  text: string;
  onClick: () => void;
};

const PlayButton: React.FC<PlayButtonProps> = ({ text, onClick }) => {
  return (
    <div className="max-w-5xl w-full space-y-2 flex flex-col items-start justify-start">
      {text && (
        <label className="font-sans text-md font-medium text-white">
          {text}
        </label>
      )}
      <button onClick={onClick} className="flex items-center justify-center">
      
      </button>
    </div>
  );
};

export default PlayButton;
