import axios from "axios"
import Swal from "sweetalert2";


const productActions = {

    fetchProducts: () => {
        return async(dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/drinks")
            if(res.data.success){
                dispatch({type:'GET_PRODUCTS',payload:res.data})
            }else{
                console.error('Error trying to fetch')
            }
    }},
    filterProducts: ( filter,products, value) => {
        return(dispatch,getState) => {
            dispatch({type:'FILTER_PRODUCTS',payload:{filter,products,value}})
        }
    },
    deleteProduct: (productId) => {
        return async (dispatch, getState) => {
            try {
                const token = localStorage.getItem('token')
                const res = await axios.delete(`http://localhost:4000/api/admin/drink/${productId}`, {
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                console.log(res);
                dispatch({ type: 'DELETE_PRODUCT', payload: res.data.deletedId })

                if(res.data.msg) {
                    Swal.fire({title: 'Borrado de la BD!', position: 'center', background: 'black', color: 'white', toast: true})
                }

                return res.data.users
            } catch (error) {
                return { msg: 'You must be login' }
            }

        }
    }
}

export default productActions