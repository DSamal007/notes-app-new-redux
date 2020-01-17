import React from 'react';
import { connect } from 'react-redux'
import { startSetUser } from '../../actions/user'

const initialState ={
    email: '',
    password: '',
    emailError:"",
    passwordError:""
}

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = initialState
    }

    validate=()=>{
        let emailError=""
        let passwordError=""

       
        if(!this.state.email.includes('@')){
            emailError= 'invalid email !!'
        }
        if(!this.state.password){
            passwordError="invalid password !!"
        }
        if(emailError || passwordError){
            this.setState({emailError,passwordError})
            return false
        }
        return true
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const isValid = this.validate()
        if(isValid){
            const formData = {
                email: this.state.email,
                password: this.state.password
            }
            const redirect = () => {
                window.location.reload()
                this.props.history.push('/')
            }    
            this.props.dispatch(startSetUser(formData, this.props))
        }
       
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    
    render(){
        return (
            <React.Fragment>
                <div className="container-fluid col-md-4">
            <form className="form-signin" onSubmit={this.handleSubmit}>
                    
                    <h1 className="h1 mb-3 font-weight-normal text-center">Login</h1>

                    <div style={{color:"red"}}>{this.state.emailError}</div> 
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="text" id="email" className="form-control mb-3" placeholder="Email"  name="email" onChange={this.handleChange}/>
                    
                    <div style={{color:"red"}}>{this.state.passwordError}</div> 
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" id="password" className="form-control mb-3" placeholder="Password"  name="password" onChange={this.handleChange}/>

                    <button className="btn btn-lg btn-dark btn-block" type="submit">Login</button>
                </form>
            </div>
            </React.Fragment>
        )
    }
}

export default connect()(Login)