import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import MainApplication from './components/MainApplication'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainApplication />
      </BrowserRouter>
    </div>
  );
}

export default App;
