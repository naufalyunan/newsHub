const initialState = {
    hospitals: [],
    currentPosition: {}
}

const mapReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HOSPITALS':
            return {
                ...state,
                hospitals: action.payload
            }
        case 'SET_CURRENT_POSITION':
            return {
                ...state,
                currentPosition: action.payload
            }
        default:
            return state
    }
}

export default mapReducers