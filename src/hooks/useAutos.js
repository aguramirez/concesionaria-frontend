import { useReducer, useState } from "react";
import { findAll, findAuto, remove, save, update } from "../services/AutoService";
import { autosReducer } from "../reducers/autosReducer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
    const [autoSelected, setAutoSelected] = useState(initialAuto);
    const navigate = useNavigate();

    const getAutos = async () => {
        const result = await findAll();
        dispatch({
            type: 'cargandoAutos',
            payload: result.data,
        });
    }

    const getDetalle = async (id) => {
        const result = await findAuto(id);
        return result.data;
    }

    const handlerAddAuto = async (auto) => {
        let response
        if (auto.id === 0) {
            response = await save(auto);
        } else {
            response = await update(auto);
        }
        dispatch({
            type: (auto.id === 0) ? 'addAuto' : 'updateAuto',
            payload: response.data,
        })

        Swal.fire(
            (auto.id === 0) ?
                'Auto creado' : 'Auto actualizado',
            (auto.id === 0) ?
                'El auto ha sido creado con exito!' : 'El auto ha sido actaulizado con exito!',
            'success'
        );

        setAutoSelected(initialAuto);
        navigate('/');
    }

    const handlerRemoveAuto = (id) => {
        Swal.fire({
            title: 'Esta seguro que desea eliminar?',
            text: "Cuidado el auto sera eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                remove(id);
                dispatch({
                    type: 'removeAuto',
                    payload: id,
                })
                Swal.fire(
                    'Auto Eliminado!',
                    'El auto ha sido eliminado con exito!',
                    'success'
                )
                navigate('/');
            }
        })
        
    }

    return {
        autos,
        autoSelected,
        initialAuto,
        handlerAddAuto,
        handlerRemoveAuto,
        getAutos,
        getDetalle,
    }
}