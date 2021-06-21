import axios from "axios"

export const order = (payload) => {
    return async (dispatch, getState) => {
        const dataToPost = { ...payload }
        delete dataToPost._id
        await axios.post('https://secure-inlet-25486.herokuapp.com/allOrders', dataToPost)

        dispatch(
            {
                type: 'ORDERED_FOOD',
                payload
            }
        )
    }
}

export const loadFoods = () => {
    return (dispatch, getState) => {
        fetch('https://secure-inlet-25486.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => {
                dispatch(
                    {
                        type: 'LOAD_FOODS',
                        payload: data
                    }
                )
                console.log(data)
            })
    }

}

export const addFoods = (payload) => {
    return async (dispatch, getState) => {

        await axios.post('https://secure-inlet-25486.herokuapp.com/addFoods', payload)

        dispatch(
            {
                type: 'ADD_FOODS',
                payload
            }
        )
    }
}