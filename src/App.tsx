import React from 'react';
import './App.css';

const  redirectURL = "https://play.google.com/store/apps/details?id=com.Production991.DodgeTiming&hl=en";
function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img alt={"Alt"}
             src={`/images/godsong.gif`}
        />
        <p>
          yahoo!
        </p>
        <a
          className="App-link"
          href={redirectURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go
        </a>
      </header>
    </div>
  );
}

export default App;
