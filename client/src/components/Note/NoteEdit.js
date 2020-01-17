import React from 'react';
import NoteForm from './NoteForm';
import { connect } from 'react-redux'
import { startUpdateNote } from '../../actions/notes'

function NoteEdit(props) {
    const handleSubmit = (formData) => {
        // const redirect = () => this.props.history.push('/notes')
        props.dispatch(startUpdateNote(formData, props))
    }
    return (
        <React.Fragment>
            
            <div className='container'>
            <h2 style={{textAlign:'center'}}>Edit notes</h2>
            { props.note && <NoteForm {...props.note} handleSubmit={handleSubmit} />}
        </div>
           
        </React.Fragment>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        note: state.notes.find(note => note._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(NoteEdit)