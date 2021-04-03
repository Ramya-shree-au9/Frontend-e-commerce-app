import Reducer from '../Reducers'
import {logger} from 'redux-logger'
// import promiseMiddleware from 'redux-promise'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'

let store = createStore(Reducer,applyMiddleware(ReduxThunk, logger))

export default store