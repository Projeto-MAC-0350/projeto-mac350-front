import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { sendArtistInput } from "../../client/api";
import { RootState } from "../../redux/store";


async function handleClick(artist1: string, artist2: string) {
  try {
    const response = await sendArtistInput(artist1, artist2);
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error: ", error);
  }
}

const PlayButton = () => {
  const { t } = useTranslation();
  const artist1 = useSelector((state:  RootState) => state.artists.artist1);
  const artist2 = useSelector((state:  RootState) => state.artists.artist2);

  return (
    <div className="flex flex-col mt-16 items-center justify-center">
      <button
        onClick={() => handleClick(artist1, artist2)}
        className="bg-green flex flex-row space-x-2 items-center justify-center rounded-full py-2 pl-2 pr-4 hover:bg-opacity-70 transition-colors duration-100"
      >
        <div className="bg-black h-full rounded-full p-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <polygon points="8,5 20,12 8,19" fill="white" />
          </svg>
        </div>
        <p className="font-sans text-xl font-bold text-black">
          {t("play-button")}
        </p>
      </button>
    </div>
  );
};

export default PlayButton;
