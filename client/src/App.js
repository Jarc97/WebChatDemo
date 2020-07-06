
import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './Chat.css';

// My components
import MessageListContainer from './components/Chat';

const App = () => (
  <div className="App">
    <header className="App-header">
      <MessageListContainer />
    </header>
  </div>
);

export default App;


/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

import Test from "./components/test.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/