import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import NavigationBar from './components/Navbar'
import CarouselMove from './components/Carousel'
import MapGoogle from './components/Map'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Carousel } from 'bootstrap';
import allActions from './store/actions/index'
import { fetchHospitals, fetchDefaultPosition, fetchCurrentPosition } from './store/actions/maps';

const mapApi = process.env.REACT_APP_API_KEY
const libs = [process.env.REACT_APP_LIBRARIES]

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDefaultPosition())
    dispatch(fetchCurrentPosition())
    dispatch(fetchHospitals('https://lintangwisesa.github.io/Indonesia-Covid19-Maps/data/rumah_sakit/Jakarta.json'))
  },[])
  const hospitals = useSelector(state => state.maps.hospitals)
  let defaultPosition = useSelector(state => state.maps.defaultPosition)
  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <Route exact path="/">
          <MapGoogle data={ hospitals } mapApiKey= { mapApi } libraries={ libs } defaultCenter = {defaultPosition}/>
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
