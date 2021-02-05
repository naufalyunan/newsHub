import { React, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload app.
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
    </Router>
  );
}

export default App;
