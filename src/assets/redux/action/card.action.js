import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export const cardAction = () => {
    return async (dispatch) => {
        dispatch({
            type: "PENDING",
        });

        try {
            let response = await axios.get(
                `http://localhost:3000/products`
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