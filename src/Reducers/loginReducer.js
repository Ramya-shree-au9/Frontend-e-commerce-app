export default function cartproducts(state={},action){    
    switch(action.type){
        case 'SIGNUP':
            return{...state, Signup:action.payload}
        case 'LOGIN':
            return{...state, Login:action.payload}
        default:
            return state
    }
}