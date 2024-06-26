import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Action } from "redux";
type StandardInputProps = {
  label: string;
  setArtist: (artist: string) => Action;
};

const StandardInput: React.FC<StandardInputProps> = ({
  label,
  setArtist,
}) => {
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newArtist = e.target.value;
    dispatch(setArtist(newArtist));
  };

  return (
    <div className="max-w-5xl w-full space-y-2 flex flex-col">
      {label && (
        <label className="font-sans text-md font-medium text-white w-full items-start text-left justify-start">
          {label}
        </label>
      )}
      <input
        type="text"
        onChange={handleChange}
        className="p-2 border-2 border-gray-300 rounded-md w-full"
      />
    </div>
  );
};

export default StandardInput;
