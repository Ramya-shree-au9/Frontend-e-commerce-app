import {combineReducers} from 'redux'
import items from './homeReducer'
import cartitem from './cartReducer'
import details from './detaiReducer'


const reducer = combineReducers({
    items,cartitem,details,
    
})

export default reducer
