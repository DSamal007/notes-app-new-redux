import React from 'react';
import CategoryForm from './CategoryForm';
import { connect } from 'react-redux'
import { startUpdateCategory } from '../../actions/categories'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'



class CategoryEdit extends React.Component{
  


    handleSubmit = (formData) => {

        const redirect = () => this.props.history.push(`/categories`)
        this.props.dispatch(startUpdateCategory(formData, this.props))
    }

    render(){
    return (
        <React.Fragment>
             <div>
                {this.props.category && (
                    <div className='container col-md-3'>
                         
                         <h2>Edit Category</h2>
                         
                         {this.props.category.name && <CategoryForm category = {this.props.category} handleSubmit = {this.handleSubmit} />}<br/>
                         <Link to="/categories" ><Button className="float-right" color="secondary" >back</Button></Link>
                        
                    </div>
                )}
               
            </div>
        </React.Fragment>
    )
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        category: state.categories.find(category => category._id === id)
    }
}

export default connect(mapStateToProps)(CategoryEdit)