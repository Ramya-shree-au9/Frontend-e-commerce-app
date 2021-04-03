import React from 'react'
import "./About.scss"
import pic from "./pic.jpg"
import pik from "./pik.jpg"
import {Link} from "react-router-dom"
const About =()=> {
  return (

    <div class="body">
    <section id="aboutus">
      <div class="container">
        <div class="row">
          <div class="col-sm-7">
            <h1 class="text-center abt">About Us /<Link to="" ><h6>Home...</h6></Link></h1>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, incidunt! Expedita sed ullam sint dolores rem. Nesciunt odit reiciendis ad. Nostrum dignissimos dolores rem nesciunt neque, iure, quae consequuntur qui molestias optio quia architecto. Consequuntur quod provident reiciendis quibusdam labore vitae recusandae ipsa facilis corporis quisquam et ad nihil ex soluta error earum quae vel doloribus officia reprehenderit dolor veniam, omnis rem velit? Temporibus exercitationem necessitatibus incidunt illum dolore ad voluptates veniam nihil ipsum. Id odio ipsum quidem neque dolorum doloremque animi soluta maiores amet repellat laborum dicta, voluptates vero recusandae corrupti deserunt illo ipsa blanditiis omnis corporis dolorem delectus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, incidunt! Expedita sed ullam sint dolores rem. Nesciunt odit reiciendis ad. Nostrum dignissimos dolores rem nesciunt neque, iure, quae consequuntur qui molestias optio quia architecto. Consequuntur quod provident reiciendis quibusdam labore vitae recusandae ipsa facilis corporis quisquam et ad nihil ex soluta error earum quae vel doloribus officia reprehenderit dolor veniam, omnis rem velit? Temporibus exercitationem necessitatibus incidunt illum dolore ad voluptates veniam nihil ipsum. Id odio ipsum quidem neque dolorum doloremque animi soluta maiores amet repellat laborum dicta, voluptates vero recusandae corrupti deserunt illo ipsa blanditiis omnis corporis dolorem delectus!</p>
               </div>
          <div class="col-sm-5">
            <div class="img-wrap">
              <img src={pic} alt="pic"/>
            </div>
    
          </div>
    
        </div>
    
        <div class="row">
        <div class="col-sm-7">
          <h1 class="text-center abt">How We Do It/<Link to="" ><h6>Home...</h6></Link></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, incidunt! Expedita sed ullam sint dolores rem. Nesciunt odit reiciendis ad. Nostrum dignissimos dolores rem nesciunt neque, iure, quae consequuntur qui molestias optio quia architecto. Consequuntur quod provident reiciendis quibusdam labore vitae recusandae ipsa facilis corporis quisquam et ad nihil ex soluta error earum quae vel doloribus officia reprehenderit dolor veniam, omnis rem velit? Temporibus exercitationem necessitatibus incidunt illum dolore ad voluptates veniam nihil ipsum. Id odio ipsum quidem neque dolorum doloremque animi soluta maiores amet repellat laborum dicta, voluptates vero recusandae corrupti deserunt illo ipsa blanditiis omnis corporis dolorem delectus!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, incidunt! Expedita sed ullam sint dolores rem. Nesciunt odit reiciendis ad. Nostrum dignissimos dolores rem nesciunt neque, iure, quae consequuntur qui molestias optio quia architecto. Consequuntur quod provident reiciendis quibusdam labore vitae recusandae ipsa facilis corporis quisquam et ad nihil ex soluta error earum quae vel doloribus officia reprehenderit dolor veniam, omnis rem velit? Temporibus exercitationem necessitatibus incidunt illum dolore ad voluptates veniam nihil ipsum. Id odio ipsum quidem neque dolorum doloremque animi soluta maiores amet repellat laborum dicta, voluptates vero recusandae corrupti deserunt illo ipsa blanditiis omnis corporis dolorem delectus!</p>
        </div>
        <div class="col-sm-5">
          <div class="img-wrap">
            <img src={pik} alt="pik"/>
          </div>
  
        </div>
        
      </div>
      </div>
    
    
    </section>
    </div>
















  )
}

export default About



// <div class="about-section1">
// <div class="inner-container">
    // <h1>How We Do it/<a href=""><h6>Home....</h6></a></h1>
    // <p class="text">
        // Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore 
// earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos 
// totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
    // </p>
    // <div class="skills">
        // <span>Lorem ipsum dolor sit amet.</span>
        // <span>ipsum dolor sit amet</span>
        // <span>Cipsum dolor sit amet</span>
    // </div>
// </div>
// </div>
// 