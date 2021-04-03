
import React, { Component } from "react";
import './Navbar.scss'
import {Link} from 'react-router-dom'
import {SearchItem,ClearCart,PROFILE_ACTION} from '../Actions'
import {connect} from 'react-redux'

class Nav extends Component{
  constructor(){
    super()
    this.state={
        searchItem:''
    }
}

renderlogout=()=>{
  this.props.dispatch({
    type:PROFILE_ACTION.RESET  
  })
  localStorage.removeItem('userDetail')
  localStorage.removeItem('username')
  this.props.dispatch(ClearCart())
}
inputRender=(e)=>{
    console.log(e.target.value)
    this.setState({searchItem:e.target.value})
}
searchRender=()=>{
    this.props.dispatch(SearchItem(this.state.searchItem))
}

  render(){
  return (
    <div className="  sticky-top p-0 m-0">
      <nav className="navbar navbar-expand-lg "> 
        <h3 class="Dm glow w-25">Deccan Merchants</h3>
        <div class="container mr-5 w-50">
        
        <div class="input-group mr-5  mt-3  pb-3 ">
        <input onChange={this.inputRender} value={this.state.searchItem} type="text" class="form-control w-50 inp"placeholder="Search" id="mail" name="Search"/>
        
        <div class="input-group-append">
          <span class="input-group-text"  onClick={this.searchRender}><i class="fa fa-search"></i></span>
        </div>
      </div>
          
          <div className=" ml-3 w-100  text-end" id="collapsenavbar">
            <ul className="ml-5 navbar-nav">
            
                <li className="nav-item ">
                    <Link to='/' className=" ml-2 pl-4 ft text-white ">Home</Link>
                </li>
              
           
                
                <li ><Link to='/cart' id="cart" className=" ml-2 ft pl-4 text-white">
                <span> <i className="fas fa-shopping-cart mr-1 "></i></span>
        
               Cart </Link></li>
           
            </ul>           
          </div>          
        </div>      
      </nav>  
    </div>
  )
}}

function mapStateToProps(state){
    return{
        mydata:state.items,
        cart:state.cartitem.cartProduct
    }
}

export default connect(mapStateToProps)(Nav)

