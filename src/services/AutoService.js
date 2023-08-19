import axios from "axios";

const BASE_URL = 'http://localhost:8080/autos';

export const findAll = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const findAuto = async (id) => {
    try {
        return await axios.get(`${BASE_URL}/detalle/${id}`);
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const save = async ({ marca,
    modelo,
    anio,
    km,
    precio,
    descripcion,
    tipo,
    version,
    color,
    combustible,
    puertas,
    transmicion,
    motor, imagenesUrl}) => {
    try {
        return await axios.post(`${BASE_URL}/crear`, {
            marca,
            modelo,
            anio,
            km,
            precio,
            descripcion,
            tipo,
            version,
            color,
            combustible,
            puertas,
            transmicion,
            motor, imagenesUrl
        })
    } catch (error) {
        console.error(error)
    }
    return undefined;
}

export const update = async ({id, marca,modelo,anio,km,precio,descripcion,tipo,version,color,combustible,
    puertas,
    transmicion,
    motor, imagenesUrl}) => {
    try {
        return await axios.put(`${BASE_URL}/editar/${id}`, {
            marca,
            modelo,
            anio,
            km,
            precio,
            descripcion,
            tipo,
            version,
            color,
            combustible,
            puertas,
            transmicion,
            motor, imagenesUrl
        })
    } catch (error) {
        console.error(error)
    }
    return undefined;
}

export const remove = async(id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error(error);
    }
}

