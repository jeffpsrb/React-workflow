// import * as counter from './constants'

export const increment = (value) => {
    return {
        type: 'INC',
        value: value
    }
}


export const decrement = (value) => {
    return {
        type: 'DEC',
        value: value
    }
}

export const decrementWithCheckingAction = (value) => {
    return (dispatch,getState) => {
        if(getState().counter.count > 0) {
            dispatch(decrement(value))
        }
    }
}