import { useReducer } from "react";
import { findAll } from "../services/AutoService";
import { autosReducer } from "../reducers/autosReducer";

const initialAutos = [];

export const useAutos = () => {

    const [autos, dispatch] = useReducer(autosReducer, initialAutos);

    const getAutos = async() => {
        const result = await findAll();
        dispatch({
            type: 'cargandoAutos',
            payload: result.data,
        });
    }

    return {
        autos,
        getAutos,
    }
}