import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectDescription from './ProjectDescription/ProjectDescription';
import FooterInformation from './FooterInformation/FooterInformation';
import i18n from '../i18n';

function App() {
  return (
    <div className="App">
      <ProjectDescription/>
      <FooterInformation/>
    </div>
  );
}

export default App;
