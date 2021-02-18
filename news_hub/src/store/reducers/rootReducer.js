import { combineReducers } from 'redux'
import newsReducer from './newsReducer'
import mapReducer from './mapsReducer'

const rootReducers = combineReducers({
    maps: mapReducer,
    news: newsReducer
})

export default rootReducers