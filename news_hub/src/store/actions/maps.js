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