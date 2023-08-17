import { useReducer } from "react";
import { findAll, save } from "../services/AutoService";
import { autosReducer } from "../reducers/autosReducer";
import { useNavigate } from "react-router-dom";

const initialAutos = [];

export const useAutos = () => {

    const [autos, dispatch] = useReducer(autosReducer, initialAutos);
    const navigate = useNavigate();

    const getAutos = async() => {
        const result = await findAll();
        dispatch({
            type: 'cargandoAutos',
            payload: result.data,
        });
    }

    const handlerAddAuto = async(auto) => {
        let response
        response = await save(auto);
        dispatch({
            type: 'addAuto',
            payload: response.data,
        })

        navigate('/');
    }

    return {
        autos,
        handlerAddAuto,
        getAutos,
    }
}