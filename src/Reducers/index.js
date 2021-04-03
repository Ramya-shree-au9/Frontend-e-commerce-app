import {combineReducers} from 'redux'
import items from './homeReducer'
import cartitem from './cartReducer'
import details from './detaiReducer'
import logindata from './loginReducer'

import profiledata from './profilereducer'


const reducer = combineReducers({
    items,cartitem,details,logindata,profiledata
    
})

export default reducer
