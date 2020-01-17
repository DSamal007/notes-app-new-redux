import React from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap'

 class CategoryForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:  props.category? props.category.name: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name
        }
        this.props.category && (formData.id = this.props.category._id)
        this.props.handleSubmit(formData)
        this.setState({name:''})
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    render(){
        return (
            <React.Fragment>
                <div className='cntainer col-md-5'>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="name"></Label>
                        <input type="text" value={this.state.name} id="name" onChange={this.handleChange}/>
                    </FormGroup>
                    <Button className="float-left" type="submit" value="add">Add</Button>
                </Form>
               </div>
            </React.Fragment>
        )
    }
}

export default CategoryForm
