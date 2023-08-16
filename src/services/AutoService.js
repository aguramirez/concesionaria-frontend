import axios from "axios";

const BASE_URL = 'http://localhost:8080/autos';

export const findAll = async() => {
    try {
        const response = await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}