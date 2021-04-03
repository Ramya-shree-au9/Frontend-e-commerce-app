import React, { Component } from 'react'
import axios from 'axios'
import {CartItems,ClearCart,ToatlAmt,PROFILE_ACTION} from '../../Actions'
import { connect } from 'react-redux'
import './cartDisplay.scss'
import Quantity from './quantity'
import {Link} from 'react-router-dom'

const url ='https://backendapi.turing.com/images/products'
const removurl = 'https://backendapi.turing.com/shoppingcart/removeProduct'
const clrurl ='https://backendapi.turing.com/shoppingcart/empty'
class cartDisplay extends Component{
    
    deleteItem=async(e)=>{
        console.log(e.target.value)
        await axios.delete(`${removurl}/${e.target.value}`) 
        await this.props.dispatch(CartItems()) 
        await this.props.dispatch(ToatlAmt())
    }

    renderItems=(cartData)=>{
        let Item = cartData
        if(Item){
            return Item.map((data)=>{    
               return (<tr  key={data.item_id} className='cartcontent'>
                    <td className='tabletext'><button value={data.item_id} onClick={this.deleteItem} className="fas fa-trash-alt"></button></td> 
                    <td ><img className='img ' src={`${url}/${data.image}`} alt=''/></td>
                     <td className='tabletext'>{data.name}</td>
                        <td className='tabletext clrselect' id={data.attributes.split(",")[0]}><span>{data.attributes.split(",")[0]}</span></td>
                        <td className='tabletext'>{data.attributes.split(",")[1]}</td>
                        <td className='tabletext'><Quantity Qdata={data.quantity} Idata={data.item_id}/></td>
                        <td className='tabletext '><i className='cost'> ${data.subtotal}</i></td>                        
                     </tr>                
               )
            })
        }
       
    }                                                                                                                                                                                                                   
   
    cartClear=async()=>{
        if(this.props){
            let cart_id = localStorage.getItem('cart_id') 
            await axios.delete(`${clrurl}/${cart_id}`)
           
            await this.props.dispatch(CartItems()) 
        }
        
    }
    checkout=()=>{
        this.props.dispatch({
            type:PROFILE_ACTION.RESET  
          })
        localStorage.removeItem('userDetail')
        localStorage.removeItem('username')
        this.props.dispatch(ClearCart())
    }

    renderdata=({cartData})=>{
      
        if(cartData.length > 0){
            return(
                <div>
                   
                <table >
                    <tr className='tableHead'>
                        <th className='tabletext'>Remove</th>
                        <th></th>
                        <th className='tabletext'>Name</th>
                        <th className='tabletext'>Color</th>
                        <th className='tabletext'>Size</th>
                        <th className='tabletext'>Quantity</th>
                        <th className='tabletext'>Price</th>
                        
                    </tr>   
                    {this.renderItems(cartData)}
                    <div>
                    
                    </div>
                 </table>
                 <h2 className='totalCost'>SubTotal({cartData.length} items) = ${this.props.Tamt.total_amount}</h2>
                 <button onClick={this.cartClear} className='btn btn-danger emptyCart'>Empty Cart</button>
                
                 </div>
            )
        }
        else{
            return(
                <h2 className='noItem'><i>Your Cart is empty</i></h2>
            )
        }
    }
    render(){
    return(
        <div className='cartsection'>
            <div className='cartitems'>
                <h1 className='carthead'>My cart</h1>
                {(this.props.cartData && this.props.Tamt)?
                this.renderdata(this.props):
                <div></div>} 
            </div>    
        </div>   
    )
}}

function mapStateToProps(state){
    return{
        data:state.cartitem    
    }   
}

export default connect(mapStateToProps)(cartDisplay)
