import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startRemoveNote } from '../../actions/notes'

import {Row, Col,Container} from 'reactstrap'
import {Card, CardTitle, CardText,Button} from 'reactstrap'
import swal from 'sweetalert'

class  NoteList extends React.Component{

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
              this.props.dispatch(startRemoveNote(id))
            } 
          })
    }

    // findCategory = (id) => {
    //     return this.props.category.find(category=>category._id == id)
    // }



    render(){
    return (
        <React.Fragment>
            <div className='container'>
            <h1 className="mb-5"> Avilable Notes - {this.props.notes.length}</h1> 
            <Row>
            {
                        this.props.notes.map((note, index) => {
                            return (
                                <Col md="3" key={index}>
                                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="mb-4">
                                        <CardTitle><h4>{index+1}:  {note.title?note.title:'NA'}</h4></CardTitle>
                                        
                                        <CardText>Description: {note.body? note.body:'NA'}</CardText>


                                        <CardText> Category: {note.category ? note.category.name :'NA'}</CardText>

                                         {/* <CardText><Link className="text-white" to={`/categories/${note.category._id? note.category._id : this.findCategory(note.category)._id}`}>Category: {note.category.name? note.category.name : this.findCategory(note.category).name}</Link></CardText> */}

                                        <Container className="mt-3">
                                             <Row>
                                                 <Col md="6">
                                                     <Link to={`/notes/${note._id}`}><Button color="info">edit</Button></Link>
                                                 </Col>
                                                 <Col md="6">
                                                     <Button color="danger" onClick={()=>{this.handleDelete(note._id)}}>remove</Button>
                                                 </Col>
                                             </Row>
                                         </Container>

                                    </Card>
                                    
                                   
                                </Col>
                            )
                        })
                    }
            </Row>

            </div>
            <div className='container'>
            <Link to="/notes/new" ><Button color="secondary" >Add Note</Button></Link>
            </div>
         
            
        </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        category: state.category
    }
}

export default connect(mapStateToProps)(NoteList)