import axios from "axios"

const citiesActions = {

    fetchProducts: () => {
        return async(dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/admin/drinks")
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
    }
}

export default citiesActions