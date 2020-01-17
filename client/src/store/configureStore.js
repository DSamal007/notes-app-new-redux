import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


import userReducer from '../reducers/userReducer'
import notesReducer from '../reducers/notesReducer'
import categoriesReducer from '../reducers/categoriesReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,        
        notes: notesReducer,
        categories: categoriesReducer,
    }), applyMiddleware(thunk))
    return store
}

export default configureStore