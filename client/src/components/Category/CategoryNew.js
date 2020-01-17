import React from 'react';
import CategoryForm from './CategoryForm';
import { connect } from 'react-redux'
import { startAddCategory } from '../../actions/categories'

function CategoryNew(props) {
    const handleSubmit = (formData) => {
        props.dispatch(startAddCategory(formData, props))
    }
    return (
        <React.Fragment>
            <h2>Add new category</h2>
            <CategoryForm handleSubmit={handleSubmit} />
        </React.Fragment>
    )
}

export default connect()(CategoryNew)