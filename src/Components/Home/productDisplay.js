import React, { Component } from 'react'
import './productDisplay.scss'
import {Link} from 'react-router-dom'
// import './file.css'
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// import Slider from "react-slick";
import Addcart from '../Detail/cartattributes'



const url = 'https://backendapi.turing.com/images/products'
class productDisplay extends Component{

    renderProduct = ({Alldata})=>{
            if(Alldata){
                 if(Alldata.count > 0){
               return Alldata.rows.map((item)=>{
                return(
                    <>
                
                <div class="col-xs-12 col-sm-6 col-md-4" id="team" >
                    
                <div class="image-flip" >
                    <div class="mainflip flip-0">
                        <div class="frontside">                        
                            <div class="card">  
                                <div class="card-body text-center" key={item.product_id}>
                                
                                    <div><img alt='' class="img-fluid pt-4" src={`${url}/${item.thumbnail}`} alt="shirt image" /></div>
                                    <div className="card-title">{item.name}</div>
                                    {item.discounted_price < item.price && item.discounted_price > 0?
                                    <>
                                        <h2 className="text">$ {item.discounted_price}</h2>
                                        <h4 class="card-discount">$ {item.price}</h4></>:
                                        <>
                                        <h2 className="text">$ {item.price}</h2>
                                     
                                        </>
                                    }    
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center ">
                                <center>    <h1 class="card-title">{item.name}</h1>
                                {item.discounted_price < item.price && item.discounted_price > 0?                                    
                                        <h2 className="text">$ {item.discounted_price}</h2>
                                       : <h2 className="text">$ {item.price}</h2>
                                    }   
                                    <div className='HomeAttri'>
                                    <Addcart props={this.props.props} id={item.product_id} color={this.props.Cdata} size={this.props.Sdata}/>
                                    </div>
                                    <div>
                                      <Link className='readMorebtn' to={`/detail/${item.product_id}`}>Read more..</Link>
                                  </div>   
                                </center>      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
             </>
                )
               
            })
        } else{
            return(<div className='errormsg'>Sorry! No products under the given search</div>)
        }  
        }
        
    }
  
   renderDescription=({detdata})=>{
        if(detdata){
            return <h2>{detdata.description}</h2>
        }
    }
    render(){
    return (
       
      <React.Fragment>
          <div className='homepage'>
         <b style={{fontsize:'50px'}}> <h1 className='description'>{this.renderDescription(this.props)}</h1></b>
       
        {this.renderProduct(this.props)}
        </div>
     </React.Fragment>
            
    )
  }
}

export default productDisplay
