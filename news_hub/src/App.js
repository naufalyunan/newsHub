import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/Navbar'
import CarouselMove from './components/Carousel'
import MapGoogle from './components/Map'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'bootstrap';
import allActions from './store/actions/index'
import { fetchHospitals } from './store/actions/maps';
import dotenv from 'dotenv'


const mapApi = process.env.REACT_APP_API_KEY
function App() {
  useEffect(() => {
    dispatch(fetchHospitals('https://lintangwisesa.github.io/Indonesia-Covid19-Maps/data/rumah_sakit/Jakarta.json'))
  },[])
  const dispatch = useDispatch()
  const maps = useSelector(state => state.maps.hospitals)
  navigator.geolocation.getCurrentPosition(position => {
    let currentPosition = {
      lat: position.coords.latitude, 
      lng: position.coords.longitude
    }
    console.log(currentPosition);
  }, err => {
    console.log(err);
  })
  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <Route exact path="/">
          <MapGoogle data={ maps } mapApiKey= { mapApi }/>
        </Route>
        <Route path="/business">
        </Route>
        <Route exact path="/entertainment">
        </Route>
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
