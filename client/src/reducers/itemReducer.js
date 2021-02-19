import {v4 as uuid} from 'uuid';
import {DELETE_ITEM, GET_ITEMS, ADD_ITEM} from '../actions/types';

const initialState = {
    items:[
        
    ]
}

export default function foo(state = initialState, action){
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        case DELETE_ITEM:
            return{
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        case ADD_ITEM:
            return{
                ...state,
                items: [action.payload, ...state.items]
            }
        default:
            return state
    }
}