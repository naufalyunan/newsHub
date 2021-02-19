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

export const setCurPos = (curPos) => {
    return {
        type: 'SET_CURRENT_POSITION',
        payload: curPos
    }
}

export const fetchPosition = () => {
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition(position => {
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