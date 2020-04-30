import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React on Github Pages!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>OR</p>
        
        <a
          className="App-link"
          href="https://create-react-app.dev/docs/deployment/#github-pages"
          target="_blank"
          rel="noopener noreferrer"
        >
          check out how to launch your app on Github pages
        </a>
        
      </header>
    </div>
  );
}

export default App;
