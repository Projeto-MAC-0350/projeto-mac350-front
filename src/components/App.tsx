import React, { useState } from "react";
import "./App.css";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import FooterInformation from "./FooterInformation/FooterInformation";
import ArtistInput from "./artists/ArtistInput";
import PlayButton from "./commons/PlayButton";
import ArtistPath, { Artist } from "./artists/ArtistsPath";
import i18n from "../i18n";

function App() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(false);

  i18n.changeLanguage("pt")
  return (
    <div className="flex flex-col space-y-4 justify-start items-center px-4 py-8 size-full min-h-screen bg-black">
      <ProjectDescription />

      {artists.length > 0 ? (
        <ArtistPath path={artists} setArtists={setArtists}/>
      ) : (
        <>
          <ArtistInput />
          <PlayButton 
            setArtists={setArtists}
            loading={loading}
            setLoading={setLoading}
          />
        </>
      )}
      <FooterInformation />
    </div>
  );
}

export default App;
