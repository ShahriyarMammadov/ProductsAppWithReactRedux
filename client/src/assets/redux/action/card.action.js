import axios from "axios";

export const cardAction = () => {
    return async (dispatch) => {
        dispatch({
            type: "PENDING",
        });

        try {
            let response = await axios.get(
                `http://localhost:3000/prod`
            );
            dispatch({
                type: "FULFILLED",
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: "REJECTED",
                payload: error,
            });
        }
    };
}

export const searchAction = (value) => {
    return {
        type: 'SEARCHDATA',
        payload: value
    }
}

export const sortAction = (value) => {
    return {
        type: 'SORT',
        payload: value
    }
}