export const ACTION_TYPE = {
    FETCH_START: "FETCH_START",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_ERROR: "FETCH_ERROR",
};

export const INITAL_STATE = {
    loading: false,
    post: {},
    error: false,
    error_message:'',
}

export const ReducerFunction = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'FETCH_START':
            return {
                post: {},
                error: false,
                loading:true,
            };
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: false,
                post: action.payload,
            };
        case 'FETCH_ERROR':
            return {
                post: {},
                loading: false,
                error: true,
                error_message:action.payload.message,
            };
    
        default:
            return state;
    }

}