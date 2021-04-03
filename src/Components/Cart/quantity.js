import React, { Component } from 'react'
import axios from 'axios'
import {CartItems,ToatlAmt} from '../../Actions'
import {connect} from 'react-redux'

const quantityUpdate ='https://backendapi.turing.com/shoppingcart/update'

export class quantity extends Component {
    reduceQuantity=async(e)=>{

        if(e.target.name > 1){
           await axios.put((`${quantityUpdate}/${e.target.value}`),{
                quantity:e.target.name - 1 
            } ) 
            await this.props.dispatch(CartItems()) 
            await this.props.dispatch(ToatlAmt())      
        } 
           
    }

    increaseQuantity=async(e)=>{ 
        await axios.put((`${quantityUpdate}/${e.target.value}`),{
            quantity:parseInt(e.target.name) + 1
        } )
        await this.props.dispatch(CartItems()) 
        await this.props.dispatch(ToatlAmt())
        
    }
  render() {
      console.log(this.props)
    return (
           <div ><button value={this.props.Idata} name={this.props.Qdata} onClick={this.reduceQuantity} className='glyphicon glyphicon-minus btn icon'></button>
           {this.props.Qdata} <button value={this.props.Idata} name={this.props.Qdata} onClick={this.increaseQuantity} className='glyphicon glyphicon-plus btn icon'></button> </div> 
    )
  }
}

function mapStateToProps(state){
    return{
        data:state.cartitem    
    }   
}

export default connect(mapStateToProps)(quantity)


