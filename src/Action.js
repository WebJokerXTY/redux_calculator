import * as ActionTypes from './ActionType';
//用户鼠标进行的操作
export const increment = () => {
    return {
        type: ActionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: ActionTypes.DECREMENT
    };
};