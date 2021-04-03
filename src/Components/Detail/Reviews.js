import React, { Component } from 'react'
import './DetailDisplay.scss'
import StarRatings from 'react-star-ratings';

class Reviews extends Component{
    renderReviews =({Rdata})=>{
        if (Rdata){
            return Rdata.map((item) =>{
                return(
                    <div >
                        <hr/> 
                        <img className='profile' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-4w9MH9JEaebq72t0o4Ez74Zj8zmQmbgzw&usqp=CAU' alt=''></img>
                                <span className='customerName'>{item.name}</span>
                                <div className='starts'><StarRatings
                                    rating={item.rating}
                                    starRatedColor="yellow"
                                    starDimension="20px"
                                    starSpacing="1px"
                                    numberOfStars={5}
                                    name='rating'
                                    /></div>
                                <div className='reviewDate'>Reviewed in: {item.created_on.split('T')[0]} </div>
                                <h3 className='custoReview'><b>{item.review}</b></h3>
                           
                        </div>
                )
               
            })
        }
    }
    render(){
        return(
            <div className='Reviews'>
                
                <h2 className='reviewHead'>Customer Reviews</h2>
                <div className='reviewdata'>{this.renderReviews(this.props)}</div>
            </div>
           
        )
    }
    
} 

export default Reviews