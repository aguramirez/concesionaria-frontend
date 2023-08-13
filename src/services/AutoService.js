
export const getAutos = async() => {

    const res = await fetch('http://localhost:8080/autos')
    const autos = await res.json();

    return autos;
}