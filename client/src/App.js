import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom'



import Home from './components/common/Home';
import Login from './components/User/Login';
import Register from './components/User/Register';

import NoteList from './components/Note/NoteList';
import NoteNew from './components/Note/NoteNew';
import NoteEdit from './components/Note/NoteEdit';

import CategoryList from './components/Category/CategoryList';
import CategoryNew from './components/Category/CategoryNew';
import CategoryEdit from './components/Category/CategoryEdit';

import { connect } from 'react-redux'
import { startRemoveUser } from './actions/user'

import 'bootstrap/dist/css/bootstrap.css'//bootstrap 
import {Navbar,NavbarBrand,Nav,NavItem} from 'reactstrap'//reactStrap
import swal from 'sweetalert'//sweetalert


//for logout
function App(props) {
  const handleLogout = () => {
    props.dispatch(startRemoveUser())
}



  return (
    <BrowserRouter>
      <div>
        <Navbar style={{backgroundColor: '#099'}} light expand="md" className="mb-5">
        <NavbarBrand className="text-light" href="/">Notes App</NavbarBrand>
        <Nav className="ml-auto" navbar>
    
        <NavItem>
          <Link className="nav-link text-light" to="/">Home</Link>
        </NavItem>
        {
          localStorage.getItem('x-auth') ? (
            <React.Fragment>
               <NavItem>
                  <Link className="nav-link text-light" to="/notes">Notes</Link>
              </NavItem>

              <NavItem>
                  <Link className="nav-link text-light" to="/categories">Categories</Link>
              </NavItem>             

          <NavItem>
          <Link className="nav-link text-light" to="/" onClick={()=>{
            swal({
              title: "Are you sure you want to log out?",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then((willDelete) => {
              if (willDelete) {
                swal("Successfully Logged out", {
                  icon: "success",
                });               
                handleLogout()
              } 
            })
            }}>Logout</Link>
          </NavItem>                
            </React.Fragment>
        ) : (
            <React.Fragment>              
              <NavItem>
                  <Link className="nav-link text-light" to='/user/register'>Register</Link>
              </NavItem>
              <NavItem>
                  <Link className="nav-link text-light" to="/user/login">Login</Link>
              </NavItem>      
            </React.Fragment>
        )}
        </Nav>
        </Navbar> 
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/user/register" component={Register} />
          <Route path="/user/login" component={Login} />
          
          <Route path="/notes" component={NoteList} exact={true} />
          <Route path="/notes/new" component={NoteNew} />
          <Route path="/notes/:id" component={NoteEdit} />
          <Route path="/categories" component={CategoryList} exact={true} />
          <Route path="/categories/new" component={CategoryNew} />
          <Route path="/categories/:id" component={CategoryEdit} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}
export default connect(mapStateToProps)(App);