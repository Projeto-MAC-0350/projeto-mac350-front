import React from "react";
import "./App.css";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import FooterInformation from "./FooterInformation/FooterInformation";
import ArtistInput from "./ArtistInput/ArtistInput";

function App() {

  return (
    <div className="App bg-black h-screen w-full p-4">
      <ProjectDescription />
      <ArtistInput/>
      <FooterInformation />
    </div>
  );
}

export default App;
