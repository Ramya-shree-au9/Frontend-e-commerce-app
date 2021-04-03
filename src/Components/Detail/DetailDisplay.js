import React,{Component} from 'react'
import './DetailDisplay.scss'
import Cartpage from './cartattributes'
import Reviews from './Reviews'

const url ='https://backendapi.turing.com/images/products'
class DetailDisplay extends Component{
    constructor(){
        super()
        this.state={
            img:true
        }
    }

    renderimage=()=>{
        this.setState({img:false})
    }
    renderimage1=()=>{
        this.setState({img:true})
    }
    renderData=({Ddata})=>{    
        if(Ddata){
            let data = Ddata[0]
            return(
            <div class="row" className='detailSection'>
           <center> <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                {this.state.img?<img alt='' className='img1' id='image' src={`${url}/${data.image}`}></img>:
                <img alt='' className='img1' id='image_2' src={`${url}/${data.image_2}`}></img>}
                
                <div  className='subImage'>
                
                <img alt='' className='img2' id={this.state.img?'border':'remBorder'} onClick={this.renderimage1} src={`${url}/${data.image}`}></img>
                
               <img alt='' className='img2' id={!this.state.img?'border':'remBorder'}  onClick={this.renderimage} src={`${url}/${data.image_2}`}></img>
               </div>
                
            </div></center>
            <div className="col-lg-6 col-md-6 col-xs-12  col-sm-6" id='details'>
                <h2 className='title'>{data.name}</h2>
               
            {data.discounted_price < data.price && data.discounted_price > 0?
                
                <>
                    <h2 className="text">$ {data.discounted_price} 
                    <span className='saveAmt'>save: $ {Math.floor((data.price - data.discounted_price) * 100) / 100} </span> </h2>
                    <h4 className='discount'>M.R.P = <span class="card-discount">$ {data.price}</span></h4>
                   </>:
                    <>
                    <h2 className="text">$ {data.price}</h2>    
                </>
                } 
                <div className='detailAttri'>
                <Cartpage props={this.props.props} id={sessionStorage.getItem('id')} color={this.props.Cdata} size={this.props.Sdata}/> 
                </div>  
            </div>
          </div>
            )  
        }}
    render(){
    return(
        <React.Fragment >
             {this.renderData(this.props)}
           
             <Reviews Rdata={this.props.data}/>
        </React.Fragment>
       
    )
}}

export default DetailDisplay