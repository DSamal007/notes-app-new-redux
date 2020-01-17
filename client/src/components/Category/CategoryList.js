import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startRemoveCategory ,startAddCategory} from '../../actions/categories';


import {ListGroup, ListGroupItem,Button} from 'reactstrap'
import CategoryForm from './CategoryForm'
import swal from 'sweetalert'


class CategoryList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            categories: []
        }
    }


    handleDelete = (id) => {
       swal({
                title: "Are you sure you want to Delete?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Successfully Deleted", {
                    icon: "success",
                  });
                  this.props.dispatch(startRemoveCategory(id))
                } 
              })
    }


    handleSubmit = (category) => {
        this.props.dispatch(startAddCategory(category))
    }


    render(){
    return (
        <div className='container col-md-9'>
            <h1 className="mb-11"> Categories - {this.props.categories.length}</h1>
            <ListGroup>
                {this.props.categories.map(category=>{
                     return <ListGroupItem key={category._id}>{Object.keys(this.props.user).length !== 0 ? <Link to={`/categories/${category._id}`}>{category.name}</Link> : category.name }<Button className="float-right" color="danger" onClick={()=>{
                        this.handleDelete(category._id)
                    }}>remove</Button>
                 <Link to = {`/categories/${category._id}`}><Button className="float-right mr-5" color="info">Edit</Button></Link>
                 </ListGroupItem> 
                 
                })}
            </ListGroup>            
            <hr/><br/>
            <div className='container'>
            <h3>Add a New Category</h3><br/>
                <CategoryForm handleSubmit={this.handleSubmit}/>

            </div>
            
        </div>

        // <React.Fragment>
        //     <h2>Categories - {props.categories.length}</h2>
        //     <table border="1">
        //         <thead>
        //             <tr>
        //                 <th>#</th>
        //                 <th>Name</th>
        //                 <th colSpan="2">Actions</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {
        //                 props.categories.map((category, index) => {
        //                     return (
        //                         <tr key={index}>
        //                             <td>{index+1}</td>
        //                             <td>{category.name}</td>
        //                             <td><Link to={`/categories/${category._id}`}>Edit</Link></td>
        //                             <td><button onClick={ () => {
        //                                 handleDelete(category._id)
        //                             }}>Delete</button></td>
        //                         </tr>
        //                     )
        //                 })
        //             }
        //         </tbody>
        //     </table>
        //     <br/>
        //     <Link to="/categories/new">Add category</Link>
        // </React.Fragment>
        )
    }

}   

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        user: state.user
    }
}

export default connect(mapStateToProps)(CategoryList)