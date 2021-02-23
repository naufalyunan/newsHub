import axios from 'axios'

export const setHospitals = (hospitals) => {
    return {
        type: 'SET_HOSPITALS',
        payload: hospitals
    }
}

export const fetchHospitals = (url) => {
    return(dispatch) => {
        axios({
            method: 'GET',
            url: url
        })
            .then(({ data }) => {
                dispatch(setHospitals(data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const setDefPos = (defPos) => {
    return {
        type: 'SET_DEFAULT_POSITION',
        payload: defPos
    }
}

export const setCurPos = (curPos) => {
    return {
        type: 'SET_CURRENT_POSITION',
        payload: curPos
    }
}

export const fetchDefaultPosition = () => {
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition(position => {
            let defaultPosition = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
            dispatch(setDefPos(defaultPosition))
          }, err => {
            console.log(err);
            let defaultPosition = { lat: -6.3, lng: 106.7 }            
            dispatch(setDefPos(defaultPosition))
          })
    }
}

export const fetchCurrentPosition = () => {
    return (dispatch) => {
        navigator.geolocation.watchPosition(position => {
            let currentPosition = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
            dispatch(setCurPos(currentPosition))
          }, err => {
            console.log(err);
            let currentPosition = { lat: -6.3, lng: 106.7 }            
            dispatch(setCurPos(currentPosition))
          })
    }
}