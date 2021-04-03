import React,{Component} from 'react'
import {connect} from 'react-redux'
import CartDisplay from '../Components/Cart/cartDisplay'
import {CartItems,ToatlAmt} from '../Actions'

class cart extends Component {
  componentDidMount(){
    this.props.dispatch(CartItems())
    this.props.dispatch(ToatlAmt())
  }
   
  render() {
    console.log(this.props.data.cartProduct)
     return (
       <React.Fragment>
           {this.props.data?
        <div>
        <CartDisplay cartData={this.props.data.cartProduct} Tamt={this.props.data.Tcost}/>
        
      </div>: <img id='loader' src='https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-5468d589f84e.gif' alt=''></img>}
       </React.Fragment>
    )
  }
}

function mapStateToProps(state){
    return{
        data:state.cartitem    
    }   
}
export default connect(mapStateToProps)(cart)
