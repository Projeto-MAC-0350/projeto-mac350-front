import React from "react";
import { useTranslation } from "react-i18next";
import StandardInput from "./StandardInput";

type ArtistInputProps = {
  artist1: string;
  artist2: string;
  setArtist1: (artist1: string) => void;
  setArtist2: (artist2: string) => void;
};

const ArtistInput: React.FC<ArtistInputProps> = ({
  artist1,
  artist2,
  setArtist1,
  setArtist2,
}) => {
  const { t } = useTranslation();

  return (
    <div className="mt-20 flex flex-col space-y-8 justify-center items-center w-full">
      <p className="font-sans text-xl font-medium text-white">
        {t("artist-input.description1")}
      </p>
      <StandardInput
        label={t("artist-input.label1")}
        setArtist={setArtist1}
        artist={artist1}
      />
      <StandardInput
        label={t("artist-input.label2")}
        setArtist={setArtist2}
        artist={artist2}
      />
    </div>
  );
};

export default ArtistInput;
