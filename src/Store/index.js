import Reducer from '../Reducers'
// import promiseMiddleware from 'redux-promise'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'

let store = createStore(Reducer,applyMiddleware(ReduxThunk))

export default store