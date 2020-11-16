import React from "react";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import "./app.scss";
import Routes from "./Routes";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Routes />
      </div>
    </DndProvider>
  );
}

export default App;
