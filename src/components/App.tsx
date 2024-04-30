import React from "react";
import "./App.css";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import FooterInformation from "./FooterInformation/FooterInformation";
import ArtistInput from "./artists/ArtistInput";
import PlayButton from "./commons/PlayButton";
import ArtistPath from "./artists/ArtistsPath";

function App() {

  const artists = [
    { id: 1, name: 'Ariana Grande' },
    { id: 2, name: 'Justin Bieber' },
    { id: 3, name: 'Nicki Minaj' }, 
    { id: 4, name: 'Madonna' },
    { id: 5, name: 'Anitta' },
    { id: 6, name: 'Mc Ryan' },
    { id: 7, name: 'Matuê' } 
  ];

  return (
    <div className="App bg-black h-full w-full p-4">
      <ProjectDescription />
      <ArtistInput />
      <PlayButton />
      <ArtistPath path={artists} />

      <FooterInformation />
    </div>
  );
}

export default App;
