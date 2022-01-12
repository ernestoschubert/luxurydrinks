import axios from 'axios';
import Swal from "sweetalert2";


const authActions = {
    signUpUser: (newUser) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/user/signup', newUser)
            if (res.data.success && !res.data.error) {
                localStorage.setItem('token', res.data.response.token)
                dispatch({ type: 'LOG_USER', payload: { _id: res.data.response._id, token: res.data.response.token, userImg: res.data.response.img, firstName: res.data.response.firstName, role: res.data.response.role } });
                return res
            } else {
                console.error(res)
                return res
            }
        }
    },
    signInUser: (logUser) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/user/login', { ...logUser })
            if (res.data.success && !res.data.error) {
                localStorage.setItem('token', res.data.response.token)
                dispatch({ type: 'LOG_USER', payload: { _id: res.data.response._id, token: res.data.response.token, userImg: res.data.response.img, firstName: res.data.response.name, role: res.data.response.role } })
                return res
            } else {
                console.log(res)
                return res
            }
        }
    },
    logOut: () => {
        return async (dispatch, getState) => {
            dispatch({ type: "LOG_OUT" })
        }
    },
    authUser: (token) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.get('http://localhost:4000/api/user/auth', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                const authUser = response.data.response
                authUser.token = token
                dispatch({ type: "LOG_USER", payload: authUser })
            } catch (error) {
                console.error(error)
                return dispatch({ type: 'LOG_OUT' })
            }
        }
    },
    getUsers: () => {
        return async (dispatch, getState) => {
            try {
                const token = localStorage.getItem('token')
                const res = await axios.get('http://localhost:4000/api/admin/users', {
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                dispatch({ type: 'GET_USERS', payload: res.data.users })
                return res.data.users
            } catch (error) {
                return { msg: 'Unauthorized' }
            }

        }
    },
    deleteUser: (userId) => {
        return async (dispatch, getState) => {
            try {
                const token = localStorage.getItem('token')
                const res = await axios.delete(`http://localhost:4000/api/admin/user/${userId}`, {
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                console.log(res);
                dispatch({ type: 'DELETE_USER', payload: res.data.deletedId })

                if(res.data.msg) {
                    Swal.fire({title: 'Borrado de la BD!', position: 'center', background: 'black', color: 'white', toast: true})
                }

                return res.data.users
            } catch (error) {
                return { msg: 'You must be login' }
            }

        }
    },

}

export default authActions
