import axios from '../config/axios'

import swal from 'sweetalert'

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export const startRegisterUser = (formData, props) => {
    return (dispatch) => {
        axios.post('/user/register', formData)
            .then((response) => {
                const data = response.data
                if(data.hasOwnProperty('errors')){
                    swal(data.message)
                } else if(data.hasOwnProperty('errmsg')){
                    swal(data.errmsg)
                } else {
                    swal('Successfully Registered')
                    dispatch(setUser({}))
                    props.history.push('/user/login')
                    window.reload()
                }
            })
            .catch((err) => {
                swal(err)
            })
    }
}

export const startSetUser = (formData, props) => {
    return (dispatch) => {
        axios.post('/user/login', formData)
            .then((response) => {
                const { userInfo, token } = response.data
                if(token){
                    localStorage.setItem('x-auth', token)
                    dispatch(setUser(userInfo))
                    props.history.push('/')
                    swal('Successfully logged In')
                    window.reload()
                } else {
                    swal(response.data)
                }
            })
            .catch((err) => {
                swal(err)
            })
    }
}

export const startRemoveUser = () => {
    return (dispatch) => {
        axios.delete('/user/logout', {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                // swal(response.data.notice)
                localStorage.clear('x-auth')
                dispatch(setUser({}))
                
                
            })
            .catch((err) => {
                swal(err)
            })
    }
}