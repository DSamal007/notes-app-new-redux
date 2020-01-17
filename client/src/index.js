import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { startSetCategories } from './actions/categories';
import { startSetNotes } from './actions/notes';
import 'bootstrap/dist/css/bootstrap.css'

const store = configureStore()

if(localStorage.getItem('x-auth')){
    store.dispatch(startSetCategories())
    store.dispatch(startSetNotes())
    
}

// store.subscribe(() => {
//     console.log(store.getState())
// })

const ele = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));