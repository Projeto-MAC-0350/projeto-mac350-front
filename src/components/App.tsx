import React, { useState } from "react";
import "./App.css";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import FooterInformation from "./FooterInformation/FooterInformation";
import ArtistInput from "./artists/ArtistInput";
import PlayButton from "./commons/PlayButton";
import ArtistPath, { Artist } from "./artists/ArtistsPath";

function App() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(false);

  const artists2 = [
    { id: '1', name: 'Ariana Grande', images: [], popularity: 100},
    { id: '2', name: 'Nicki Minaj', images: [], popularity: 100}, 
    { id: '3', name: 'Madonna', images: [], popularity: 100 },
    { id: '4', name: 'Anitta', images: [], popularity: 100 },
    { id: '5', name: 'Mc Ryan SP', images: [], popularity: 100 },
    
  ];

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
