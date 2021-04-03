import React,{Component} from 'react'
// import './Home.scss'
import {connect} from 'react-redux'
import Detailpage from '../Components/Detail/DetailDisplay'
import {DetailProduct,productReviews,AttributesColor,AttributesSize} from '../Actions'



class Details extends Component{
    componentDidMount(){
        sessionStorage.setItem('id',this.props.match.params.id)
        this.props.dispatch(DetailProduct(this.props.match.params.id))
        this.props.dispatch(productReviews(this.props.match.params.id))
        this.props.dispatch(AttributesColor())
        this.props.dispatch(AttributesSize())
    }

    render(){
       console.log(this.props.match.params.id)
    return(
        <React.Fragment>
            {this.props.detaildata.detailProduct && this.props.detaildata.Colors && this.props.detaildata.Sizes && this.props.detaildata.Previews?
            <div className='section'>
            <Detailpage props={this.props} Ddata={this.props.detaildata.detailProduct} data={this.props.detaildata.Previews} 
            Cdata={this.props.detaildata.Colors} Sdata={this.props.detaildata.Sizes}/>    
            </div>:
             <img id='loader' src='https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-5468d589f84e.gif' alt=''></img>}
        </React.Fragment>
        
    )
}}

function mapStateToProps(state){
    console.log('sts',state)
    return{
        detaildata:state.details,
        
    }
}
export default connect(mapStateToProps)(Details)