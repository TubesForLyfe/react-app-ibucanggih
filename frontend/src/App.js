import React from "react";

import RouteManager from './route.js';
import './App.css';

function App() {
  document.title = "Ibu Canggih"
  return (
    <div className="app">
      <RouteManager />
    </div>
  );
}

export default App;