import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import FooterInformation from "./FooterInformation/FooterInformation";
import i18n from "../i18n";
import ArtistInput from "./ArtistInput";

function App() {
  const [artist1, setArtist1] = useState("");
  const [artist2, setArtist2] = useState("");

  return (
    <div className="App">
      <ProjectDescription />
      <ArtistInput
        artist1={artist1}
        artist2={artist2}
        setArtist1={setArtist1}
        setArtist2={setArtist2}
      />
      <FooterInformation />
    </div>
  );
}

export default App;
