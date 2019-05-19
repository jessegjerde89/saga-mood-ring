import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'



// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_IMAGES', fetchImages)
    yield takeEvery('FETCH_TAGS', fetchTags)
    yield takeEvery('ADD_TAGS', addTags)
    
    
}

// saga to get images
function* fetchImages() {

    try {
        let imageResponse = yield axios.get('/api/image'); 
        yield put({ type: 'SET_IMAGES', payload: imageResponse.data })
        console.log(imageResponse.data)
    } catch(error) {
        console.log(error)
    }
}

// saga to get tags for images
function* fetchTags() {
    try {
        let tagResponse = yield axios.get('/api/tag'); 
        yield put({ type: 'SET_TAGS', payload: tagResponse.data})
    } catch(error) {
        console.log(error)
    }

}

function* addTags(action) { 
    try {
        yield axios.post('api/tag', action.payload); 
        yield put({type : 'SET_TAGS', payload: action.response})
        } catch(error) {
            console.log(error)
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store images returned from the server
const images = (state = [], action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the images tags (e.g. 'Inspirational', 'Calming', 'Energy', etc.)
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        images,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
