import { Action } from "@remix-run/router"
import { ADD_TO_CART } from "../../../constants"
const initialState = {
    cardData: []
}

const cardItems = (state= initialState, action) =>{

    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cardData: [...state.cardData,action.data]
    }   
           
        default:
            return state
    }
} 
export default cardItems;