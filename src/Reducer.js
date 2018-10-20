import * as ActionTypes from './ActionType';

//Reducer根据传入的action的type更新state
export default (state = 0, action) => {
    switch(action.type) {
        case ActionTypes.INCREMENT:
            return state + 1;
        case ActionTypes.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};