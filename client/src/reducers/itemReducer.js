import {v4 as uuid} from 'uuid';
import {GET_ITEMS} from '../actions/types';

const initialState = {
    items:[
        {id: uuid(), name: "Eggs"},
        {id: uuid(), name: "Milk"},
        {id: uuid(), name: "Tea"},
        {id: uuid(), name: "Coffee"}
    ]
}

export default function foo(state = initialState, action){
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state
    }
}