import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Home.scss'
// import PropTypes from 'prop-types';
import Pagination from "react-js-pagination";
import ProductDisplay from '../Components/Home/productDisplay'
import {AllProducts,Department,DepProducts,Departmentdetails,Categories,
    Categorydetails,CatProducts,DepartWithCate,AttributesColor,AttributesSize} from '../Actions/index'
import Sidebar from '../Components/Home/SideBar'
// import Pro from '../Components/Home/pro'
// import Slids from '../Components/Home/Scrollbar'

class Home extends Component{
    constructor(){
        super()
        this.state={
            totCount:'',
            activePage:5,
            postPerPage:15,
        }
    }
    
    componentDidMount(){
        this.props.dispatch(AllProducts())    
        this.props.dispatch(Department())    
        this.props.dispatch(Categories())
        this.props.dispatch(AttributesColor())
        this.props.dispatch(AttributesSize())    
    }
    departmentIdrender=(id)=>{
        this.props.dispatch(DepProducts(id)) 
        this.props.dispatch(Departmentdetails(id))   
        this.props.dispatch(DepartWithCate(id))   
    }
    categoryIdrender=(id)=>{
        this.props.dispatch(CatProducts(id)) 
        this.props.dispatch(Categorydetails(id))   
    }

    handlePageChange=(pageNumber)=> {
      console.log(pageNumber);
      this.setState({activePage:pageNumber}); 
      // setUpdate(true) 
    }
    
    
    render(){
        const indexOfLastPost =this.state.activePage * this.state.postPerPage
        const indexOfFirstPost = indexOfLastPost - this.state.postPerPage
        // const currentPosts = this.props.mydata.Aproducts.Slice(indexOfFirstPost,indexOfLastPost)
        console.log(this.props)
        return(
            <React.Fragment>
                  {/* <div class="spinner-border text-danger"></div> */}
                {this.props.mydata.Aproducts?
                 <div className='section'>
                
                 {/* <Slids/> */}
                {/* <center><h2>Products Overview</h2></center>  */}
             <div className='row'>
                 <div className='col-md-3'>
                     <Sidebar Tcount={this.props.mydata.Aproducts} 
                     depdata={this.props.mydata.department} 
                     catdata={this.props.mydata.categories}
                     dep_id={(id)=>{this.departmentIdrender(id)}}
                     cat_id={(id)=>{this.categoryIdrender(id)}}/>    
                 </div>
                 <div className=' col-md-9'>
                     <ProductDisplay Alldata={this.props.mydata.Aproducts} 
                     detdata={this.props.mydata.desDepartment} 
                     props={this.props}
                     Cdata={this.props.detail.Colors}  Sdata={this.props.detail.Sizes}
                     />
                   
                     {/* <Pro/> */}
                 </div>
             </div>
             </div>
             
            //   <div className='pagecontent'>
            // {filteredData?<div></div>:
            // <div>
            // <center>
            // <>
            // <Pagination
            //   activePage={this.state.activePage}
            //   itemsCountPerPage={this.state.postPerPage}
            //   totalItemsCount={this.props.mydata.Aproducts.length}
            //   pageRangeDisplayed={15}
            //   onChange={this.handlePageChange}
            //   />
            //   </>
            // </center>
            // </div>
            :
             <>
            <img id='loader' src='https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-5468d589f84e.gif' alt=''></img>
            </>}
            </React.Fragment>
           
           
        )
    }

}

function mapStateToProps(state){
    return{
        mydata:state.items, 
        detail:state.details
    }
}

export default connect(mapStateToProps)(Home)

