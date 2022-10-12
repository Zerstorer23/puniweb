import React from 'react';
import './App.css';

const  redirectURL = "https://www.google.com";
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
