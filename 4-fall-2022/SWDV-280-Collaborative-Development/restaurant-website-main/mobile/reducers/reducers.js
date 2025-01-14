import { ADD_ITEM, GET_CART, REMOVE_ITEM, GET_ITEMS } from "../constants/constants";

const initialState = {
    cart: [],
    items : [
        {"key": 0, "name": "Burrito", "price": 10.99, "image": require('../Components/images/burrito.png'), "qty": 0,},
        { "key": 1,"name": "Taco", "price": 10.99, "image": require('../Components/images/burrito.png'), "qty": 0,},
        {"key": 2,"name": "Quesadilla", "price": 10.99, "image": require('../Components/images/burrito.png'), "qty": 0,},
        {"key": 3,"name": "Enchilada", "price": 10.99, "image": require('../Components/images/burrito.png'), "qty": 0,},
      ],
      
};

function cartReducer(state = initialState, action)  {
    switch(action.type){
        case ADD_ITEM:
            return{
                ...state,
                cart: [...state.cart, action.payload],
            };
        case GET_CART:
            return{
                ...state,
                cart: [...state.cart]
            };
        case REMOVE_ITEM:
            return{
                ...state,
                cart: state.cart.filter(item => item.key !== action.payload.key,
                    ),
            };
        case GET_ITEMS:
            return{
                ...state,
                items: [...state.items]
             };
            default:
            return state;
    }
}
export default cartReducer;