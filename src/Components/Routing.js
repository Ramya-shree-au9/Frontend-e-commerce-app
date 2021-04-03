import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from '../Container/Home'
// import Header from './Header'
import Header from './Navbar'
import Cart from '../Container/Cart'
import Detail from '../Container/Detail'
import Footer from './Footer'
import Aboutus from './About us/About'
import Contact from './Contact/Contact'
import axios from 'axios';

class Routing extends Component{
    render(){
    return(
        <BrowserRouter>
        <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/cart' component={Cart}/>
            <Route exact path='/detail/:id' component={Detail}/>
            <Route exact path='/aboutus' component={Aboutus}/>
            <Route exact path='/contact' component={Contact}/>
        <Footer/>
        </BrowserRouter>
       
    )   
}
componentDidMount(){
    axios.get('https://backendapi.turing.com/shoppingcart/generateUniqueId')
    .then((item)=>{
      localStorage.setItem("cart_id",item.data.cart_id)
    })
  }
}

export default Routing