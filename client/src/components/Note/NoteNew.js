import React from 'react';
import { connect } from 'react-redux'
import NoteForm from './NoteForm';
import { startAddNote } from '../../actions/notes'

function NoteNew(props) {
    const handleSubmit = (formData) => {
        props.dispatch(startAddNote(formData, props))
    }
    return (
        <React.Fragment>
            <h2 style={{textAlign:'center'}}>Add new note</h2>
            <NoteForm handleSubmit={handleSubmit} />
        </React.Fragment>
    )
}

export default connect()(NoteNew)