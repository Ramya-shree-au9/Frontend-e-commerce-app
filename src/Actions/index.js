import axios from 'axios'
const url = 'https://backendapi.turing.com'

export const PROFILE_ACTION = {
    SET: 'SET_PROFILE',
    RESET: 'RESET_PROFILE'
}
export function AllProducts(id){
    let Nid=id?id:1
    const output = axios.get(`${url}/products?limit=15&page=${Nid}`)
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'ALL_PRODUCTS',
                payload:data
            })
        })
    }
}

export function Department(){
    const output = axios.get(`${url}/departments`)
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'DEPARTMENT',
                payload:data
            })
        })
    }
}
export function Departmentdetails(id){
    const output = axios.get(`${url}/departments/${id}`)
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'DEP_DETAILS',
                payload:data
            })
        })
    }
}

export function DepProducts(id){
    const output = axios.get(`${url}/products/inDepartment/${id}`)
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'DEP_PRODUCT',
                payload:data
            })
        })
    }
}
export function Categories(){
    const output = axios.get(`${url}/categories`)
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'CATEGORIES',
                payload:data
            })
        })
    }
}
export function Categorydetails(id){
    const output = axios.get(`${url}/categories/${id}`)
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'CAT_DETAILS',
                payload:data
            })
        })
    }
}

export function CatProducts(id){
    const output = axios.get(`${url}/products/inCategory/${id}`)
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'CAT_PRODUCT',
                payload:data
            })
        })
    }
}


export function DepartWithCate(id){
    const output = axios.get(`${url}/categories/inDepartment/${id}`)
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'DEP_RES_CATE',
                payload:data
            })
        })
    }
}

export function SearchItem(id){
    // let Nid = id?id:'shirt'
    const output = axios.get(`${url}/products/search?query_string=${id}&all_words=on`)
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'SEARCH_ITEM',
                payload:data
            })
        })
    }
}
// https://backendapi.turing.com/shoppingcart/{cart_id}
export function CartItems(){ 
    let cart_id = localStorage.getItem('cart_id')
    const output= axios.get(`${url}/shoppingcart/${cart_id}`)
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'CART_ITEM',
                payload:data
            })
        })
    }
}

export function DetailProduct(id){   
    const output= axios.get(`${url}/products/${id}/details`)
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'DETAILPRODUCT',
                payload:data
            })
        })
    }
}

// https://backendapi.turing.com/attributes/values/2
export function AttributesColor(){   
    const output= axios.get(`${url}/attributes/values/2`)
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'COLORS',
                payload:data
            })
        })
    }
}
export function AttributesSize(){   
    const output= axios.get(`${url}/attributes/values/1`)
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'SIZES',
                payload:data
            })
        })
    }
}
// https://backendapi.turing.com/products/{product_id}/reviews
export function productReviews(id){   
    const output= axios.get(`${url}/products/${id}/reviews`)
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'PRODUCTREVIEWS',
                payload:data
            })
        })
    }
}
export function  PostAttributes(id,color,size){   
        axios.post(`${url}/shoppingcart/add`,{
        cart_id:localStorage.getItem('cart_id'),
        product_id:id,
        attributes:`${color},${size}`
    })
    return {
        type:'ATTRIBUTES',       
    }
}

// const totamturl = 'https://backendapi.turing.com/shoppingcart/totalAmount'
export function ToatlAmt(){ 
    let cart_id = localStorage.getItem('cart_id')  
    const output= axios.get(`${url}/shoppingcart/totalAmount/${cart_id}`)
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'TOTALCOST',
                payload:data
            })
        })
       
    }
}
// https://backendapi.turing.com/shoppingcart/empty/{cart_id}
export function ClearCart(){ 
    let cart_id = localStorage.getItem('cart_id')  
    axios.delete(`${url}/shoppingcart/empty/${cart_id}`)
       return{
            type:'CLEARCART'
       }       
}

export function CartId(){ 
    axios.get(`${url}/shoppingcart/generateUniqueId`)
    .then((item)=>{
    localStorage.setItem("cart_id",item.data.cart_id)      
})}
// https://backendapi.turing.com/customers
export function SignUpdata(name,mail,psw){     
    const output= axios.post(`${url}/customers`,{
        name:name,
        email:mail,
        password:psw
    })

    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'SIGNUP',
                payload:data
            })
        })
       .catch(({error})=>{
            dispatch({
                type:'SIGNUP',
                payload:'error'
            })
        })
    }
}
// https://backendapi.turing.com/customers/login
export function Logindata (mail,psw){     
    const output= axios.post(`${url}/customers/login`,{
        email:mail,
        password:psw
    })
    return (dispatch) =>{
        output.then(({data}) => {
            dispatch({
                type:'LOGIN',
                payload:data
            })
        })
        .catch(({error})=>{
            dispatch({
                type:'LOGIN',
                payload:'error'
            })
        })
    }
}



