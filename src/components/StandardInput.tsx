import React, { useState } from "react";

type StandardInputProps = {
  label: string;
  setArtist: (artist: string) => void;
  artist: string;
};

const StandardInput: React.FC<StandardInputProps> = ({
  label,
  artist,
  setArtist,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newArtist = e.target.value;
    setArtist(newArtist);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      {label && (
        <label style={{ marginBottom: "10px", display: "block" }}>
          {label}
        </label>
      )}
      <input
        type="text"
        value={artist}
        onChange={handleChange}
        style={{
          padding: "10px",
          border: "2px solid #ccc",
          borderRadius: "4px",
          width: "calc(100% - 24px)",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};

export default StandardInput;
