
// src/App.jsx

import './App.css'
import { FilePicker, Header, TextContent } from "./components";
import { ContentProvider } from "./context";
import {SettingsPanel} from "./components/SettingsPanel.jsx";
import {ScorePanel} from "./components/ScorePanel.jsx";

function App() {

  return (
    <ContentProvider>
      <div className="">
        <Header />
        <FilePicker />
        <SettingsPanel />
        <ScorePanel />
        <TextContent />
      </div>
    </ContentProvider>
  )
}

export default App


