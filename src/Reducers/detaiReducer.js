
export default function products(state={},action){    
    switch(action.type){
        case 'DETAILPRODUCT':
            return{...state, detailProduct:action.payload}
        case 'PRODUCTREVIEWS':
            return{...state, Previews:action.payload}
        case 'COLORS':
            return{...state, Colors:action.payload}
        case 'SIZES':
            return{...state, Sizes:action.payload}
        case 'ATTRIBUTES':
            return{...state}
        default:
            return state
    }
}