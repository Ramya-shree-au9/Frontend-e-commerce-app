

export default function products(state={},action){
    
    switch(action.type){
        case 'ALL_PRODUCTS':
            return{...state, Aproducts:action.payload}
        case 'DEPARTMENT':
            return{...state, department:action.payload}
        case 'DEP_PRODUCT':
            return{...state, Aproducts:action.payload}
        case 'DEP_DETAILS':
            return{...state, desDepartment:action.payload}
        case 'CATEGORIES':
            return{...state, categories:action.payload}
        case 'CAT_DETAILS':
            return{...state, desDepartment:action.payload}
        case 'CAT_PRODUCT':
            return{...state, Aproducts:action.payload}
        case 'DEP_RES_CATE':
            return{...state, categories:action.payload}
        case 'SEARCH_ITEM':
            return{...state, Aproducts:action.payload}
        
        default:
            return state
    }
}