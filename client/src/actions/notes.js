import axios from '../config/axios'


import swal from 'sweetalert'


/////////////////////////////////////////////////////////////////////set-note
export const setNotes = (notes) => {
    return {
        type: 'SET_NOTES',
        payload: notes
    }
}

export const startSetNotes = () => {
    return (dispatch) => {
        axios.get('/notes', {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.name === "JsonWebTokenError"){
                   swal(response.data.message)
                } else {
                    dispatch(setNotes(response.data))
                    window.reload()
                }
                console.log(response.data)
            })
            .catch((err) => {
               swal(err)
            })
    }
}


///////////////////////////////////////////////////////////////////////////add-note
export const addNote = (formData) => {
    return {
        type: 'ADD_NOTE',
        payload: formData
    }
}

export const startAddNote = (formData, props) => {
    return (dispatch) => {
        axios.post('/notes', formData, {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.name === 'JsonWebTokenError'){
                   swal(response.data.message)
                } else {
                   swal('successfully created')
                    dispatch(addNote(response.data))
                    props.history.push('/notes')
                    window.location.reload()
                }
                console.log(response.data)
            })
            .catch((err) => {
               swal(err)
            })
    }
}


/////////////////////////////////////////////////////////////////////////update-note
export const updateNote = (formData) => {
    return {
        type: 'UPDATE_NOTE',
        payload: formData
    }
}

export const startUpdateNote = (formData, props) => {
    return (dispatch) => {
        axios.put(`/notes/${props.match.params.id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.name === 'JsonWebTokenError'){
                   swal(response.data.message)
                } else {
                   swal('successfully updated')
                    dispatch(updateNote(response.data))
                    props.history.push('/notes')
                    
                }
            })
            .catch((err) => {
               swal(err)
            })
    }
}


///////////////////////////////////////////////////////////////////////////////remove-note
export const removeNote = (id) => {
    return {
        type: 'REMOVE_NOTE',
        payload: id
    }
}

export const startRemoveNote = (id) => {
    return (dispatch) => {
        axios.delete(`/notes/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.name === 'JsonWebTokenError'){
                   swal(response.data.message)
                } else {
                   swal('Successfully Removed')
                    dispatch(removeNote(id))
                    
                }
            })
            .catch((err) => {
               swal(err)
            })
    }
}