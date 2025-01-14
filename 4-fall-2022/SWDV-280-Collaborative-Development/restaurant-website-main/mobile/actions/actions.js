import { ADD_ITEM, GET_CART, REMOVE_ITEM, GET_ITEMS } from "../constants/constants";

export const addItem = (item) =>{
    return {
        type: ADD_ITEM,
        payload: item
    }
}
export const getCart = () =>{
    return{
        type: GET_CART,
    }
}
export const removeItem = (item) =>{
    return{
        type: REMOVE_ITEM,
        payload: item,
    }
}
export const getItems = () =>{
    return{
        type: GET_ITEMS,
    }
}