import { useReducer } from "react";
import { findAll, findAuto, save } from "../services/AutoService";
import { autosReducer } from "../reducers/autosReducer";
import { useNavigate } from "react-router-dom";

const initialAutos = [];

const initialAuto = {
    id: 0,
    marca: '',
    modelo: '',
    anio: 0,
    km: 0,
    precio: 0,
    descripcion: '',
    tipo: '',
    version: '',
    color: '',
    combustible: '',
    puertas: '',
    transmicion: '',
    motor: '', imagenesUrl: []
}

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

    const getDetalle = async(id) => {
        const result = await findAuto(id);
        return result.data;
        // dispatch({
        //     type: 'getDetail',
        //     payload: result.data,
        // });
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
        initialAuto,
        handlerAddAuto,
        getAutos,
        getDetalle,
    }
}