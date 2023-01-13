let initialState = {
    loading: true,
    data: undefined,
    error: undefined,
    modalData: undefined,
};

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PENDING":
            return {
                ...state,
                loading: true,
            };

        case "FULFILLED":
            return {
                ...state,
                loading: false,
                data: action.payload,
            };

        case "REJECTED":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case "SEARCHDATA":
            return {
                loading: false,
                data: action.payload,
            };

        case "SORT":
            return {
                loading: false,
                data: action.payload,
            };

        default:
            return state;
    }
};
