const initialState = {
    news: [],
    selected_news: []
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NEWS':
            return {
                ...state,
                news: action.payload
            }
        case 'SET_SELECTED_NEWS':
            return {
                ...state,
                selected_news: action.payload
            }
        default:
            return state
    }
} 

export default newsReducer