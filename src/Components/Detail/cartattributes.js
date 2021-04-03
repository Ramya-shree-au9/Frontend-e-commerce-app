import React, { Component } from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'
import {PostAttributes} from '../../Actions'



// const url = 'https://backendapi.turing.com/shoppingcart/add'
class Addcart extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedColor:'',
            selectedSize:'',
        }
    }


   
    colorSelect=(e)=>{
        this.setState({selectedColor:e.target.value})
    }
    sizeSelect=(e)=>{
        console.log(e.target.value)
        this.setState({selectedSize:e.target.value})
    }

    colorsData=()=>{
        if(this.props.color){
           return this.props.color.map((item)=>{
               return (
                   <div className='colorsselect'>
                   <button onClick={this.colorSelect} id={item.value} value={item.value} className= "fas fa-circle"></button>
                   </div>
               )
           })
        }
    }

    sizeData=()=>{
        if(this.props.size){
            return this.props.size.map((item)=>{ 
                return (                     
                    <button onClick={this.sizeSelect} className='cartsizes'  value={item.value}>{item.value}</button>                
                )
            })
         }
     }
   
     cartFunction=()=>{
        this.props.dispatch(PostAttributes(this.props.id,this.state.selectedColor,this.state.selectedSize))   

    }

    render(){
       
        return(
            <div>
                <h1 className='heading'>Colors:</h1>
                {this.colorsData()}
                   <div>
                   <h1 className='heading'>Sizes:</h1>
                    { this.sizeData()} 
                     <div>  
                    <button className='cartButton btn btn-success' disabled={this.state.selectedColor && this.state.selectedSize?false:true}  onClick={this.cartFunction}>Add Cart</button> 
                    </div> 
                    
                </div>   
                </div>       
        )
    }
   
}

function mapStateToProps(state){
    
 return{
     Ddata:state.details
 }
}

export default connect(mapStateToProps)(Addcart)