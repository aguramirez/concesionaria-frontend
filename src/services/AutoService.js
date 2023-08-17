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

