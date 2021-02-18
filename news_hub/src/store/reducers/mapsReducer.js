const initialState = {
    hospitals: []
}

const mapReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HOSPITALS':
            return {
                ...state,
                hospitals: action.payload
            }
        default:
            return state
    }
}

export default mapReducers