import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Home.scss'
import ProductDisplay from '../Components/Home/productDisplay'
import {AllProducts,Department,DepProducts,Departmentdetails,Categories,
    Categorydetails,CatProducts,DepartWithCate,AttributesColor,AttributesSize} from '../Actions/index'
import Sidebar from '../Components/Home/SideBar'

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
    }
    
    
    render(){
        const indexOfLastPost =this.state.activePage * this.state.postPerPage
        const indexOfFirstPost = indexOfLastPost - this.state.postPerPage

        return(
            <React.Fragment>
                 
                {this.props.mydata.Aproducts?
                 <div className='section'>
                

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
                 </div>
             </div>
             </div>
    
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

