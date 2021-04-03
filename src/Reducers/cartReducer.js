

export default function cartproducts(state={},action){    
    switch(action.type){
        case 'CART_ITEM':
            return{...state, cartProduct:action.payload}
        case 'TOTALCOST':
            return{...state, Tcost:action.payload}
        // case 'CLEARCART':
        //     return{...state}
        default:
            return state
    }
}