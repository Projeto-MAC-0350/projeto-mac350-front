import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { sendArtistInput } from "../../client/api";
import { RootState } from "../../redux/store";
import Loading from "./Loading"; 
import { Artist } from "../artists/ArtistsPath";
import NoResults from "../NoResults";
import { setArtist1, setArtist2 } from "../../redux/artistSlice";

async function handleClick(
  artist1: string,
  artist2: string,
  setLoading: (loading: boolean) => void,
  setArtists: (artists: Artist[]) => void,
  setNoResults: (noResults: boolean) => void,
  dispatch: any
) {
  setLoading(true);
  try {
    setArtists([])
    const response = await sendArtistInput(artist1, artist2);

    if (!response.data.hasResponse ) {
      setArtists([])
      setLoading(false);
      setNoResults(true);
      dispatch(setArtist1(""))
      dispatch(setArtist2(""))

      return;
    }

    const artists: Artist[] = response.data.artists.map((artist: any) => ({
      id: artist.artist?.id,
      name: artist.artist?.name,
      images: artist.artist?.images,
      popularity: artist.artist?.popularity
    }));
    
    setArtists(artists);


  } catch (error) {
    console.error("Error: ", error);
  }
  setLoading(false);
}

type PlayButtonProps = {
  
  setArtists: (artists: Artist[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void; 
};


const PlayButton = ({ setArtists, loading, setLoading}: PlayButtonProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const artist1 = useSelector((state: RootState) => state.artists.artist1);
  const artist2 = useSelector((state: RootState) => state.artists.artist2);

  const [noResults, setNoResults] = useState(false);



  if (noResults) {
    return (
      <NoResults setNoResults={setNoResults}/>
    );
  }

  return (
    <div className="flex flex-col mt-16 items-center justify-center">
      {loading ? (
        <Loading/>
      ) : (
        <button
          onClick={() => handleClick(artist1, artist2, setLoading, setArtists, setNoResults, dispatch)}
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
      )}
    </div>
  );
};

export default PlayButton;
