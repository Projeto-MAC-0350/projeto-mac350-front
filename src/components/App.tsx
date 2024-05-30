import React from "react";
import "./App.css";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import FooterInformation from "./FooterInformation/FooterInformation";
import ArtistInput from "./artists/ArtistInput";
import PlayButton from "./commons/PlayButton";
import ArtistPath, { Artist } from "./artists/ArtistsPath";

function App() {

  const [artists, setArtists] = React.useState<Artist[]>([]);

  return (
    <div className="App bg-black h-full w-full p-4">
      <ProjectDescription />
      <ArtistInput />
      <PlayButton setArtists={setArtists}/>
      <ArtistPath path={artists} />

      <FooterInformation />
    </div>
  );
}

export default App;
