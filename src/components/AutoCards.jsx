import { useContext, useEffect } from "react"
import './AutoCards.css';
import { AutoContext } from "../context/AutoContext";
import { useNavigate } from "react-router-dom";

export const AutoCards = () => {

    const { autos, getAutos } = useContext(AutoContext);
    const navigate = useNavigate();

    useEffect(() => {
        getAutos();
    }, []);

    const handlerVerAuto = (id) => {
        navigate(`/autos/detalle/${id}`);
    }

    return (
        <>
            <div className="container">
                {autos.map(a => (
                    <div className="card" key={a.id}>
                        <div className="img-box">
                            <img src={a.imagenesUrl[0]} />
                        </div>
                        <div className="content">
                            <h2>{a.marca} {a.modelo} {a.motor}</h2>
                            <p>{a.anio}</p>
                            <p>{a.descripcion}</p>
                            <p className="price">${a.precio}</p>
                            <button onClick={() => handlerVerAuto(a.id)}>Ver</button>
                        </div>
                    </div >
                ))}
            </div >
        </>


    )
}