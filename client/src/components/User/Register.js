import React from 'react';
import { connect } from 'react-redux'
import { startRegisterUser } from '../../actions/user'

const initialState={
    username: '',
    email: '',
    password: '',
    usernameError:"",
    emailError:"",
    passwordError:""
}

class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = initialState
    }
//validation
    validate=()=>{
        let usernameError=""
        let emailError=""
        let passwordError=""

        if(!this.state.username){
            usernameError="invalid Field !!"
        }
        if(!this.state.email.includes('@')){
            emailError= 'invalid email !!'
        }
        if(!this.state.password){
            passwordError="invalid password !!"
        }
        if(emailError || usernameError ||passwordError){
            this.setState({emailError,usernameError,passwordError})
            return false
        }
        return true
    }


    handleSubmit = (e) => {
        e.preventDefault()        
        const isValid = this.validate()
        if (isValid){          
            const formData = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            } 
            const redirect = () => this.props.history.push('/user/login')
            this.props.dispatch(startRegisterUser(formData, this.props))
            //clear form
            this.setState(initialState)
        }  
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
           
            <div className="container col-md-4">
               
                <form  className="form-signin" onSubmit={this.handleSubmit}>
                <h3 className="h1 mb-3 font-weight-normal text-center" >Register New User</h3>
                
                <div style={{fontSize:12,color:'red'}}>{this.state.usernameError}</div>           
                <label className="sr-only" htmlFor="username">Username</label>
                <input type="text" id="username" className="form-control mb-3" placeholder="Username" name="username" onChange={this.handleChange}/>
            
                <div style={{fontSize:12,color:'red'}}>{this.state.emailError}</div>                
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="text" id="email" className="form-control mb-3" placeholder="Email"  name="email" onChange={this.handleChange}/>

                <div style={{fontSize:12,color:'red'}}>{this.state.passwordError}</div>                
                <label htmlFor="password" className="sr-only">Password</label>
                <input type="password" id="password" className="form-control mb-3" placeholder="Password"  name="password" onChange={this.handleChange}/>

                <button className="btn btn-lg btn-dark btn-block" type="submit">Register</button>                    
                  
                </form>
            </div>
        )
    }
}

export default connect()(Register)