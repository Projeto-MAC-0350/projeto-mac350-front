import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import StandardInput from "../commons/StandardInput";
import { setArtist1, setArtist2 } from "../../redux/artistSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ArtistInput = () : JSX.Element => {
  const artists = useSelector((state: RootState) => state.artists.artist1);
  const { t } = useTranslation();
  
  return (
    <div className="mt-20 flex flex-col space-y-8 justify-center items-center w-full">
      <p className="font-sans text-xl font-medium text-white">
        {t("artist-input.description")}
      </p>
      <StandardInput
        label={t("artist-input.label1")}
        setArtist={setArtist1}
      />
      <StandardInput
        label={t("artist-input.label2")}
        setArtist={setArtist2}
      />
    </div>
  );
};

export default ArtistInput;
