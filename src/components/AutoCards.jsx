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
                    <a onClick={() => handlerVerAuto(a.id)} key={a.id}>
                    <div className="card">
                        <div className="img-box">
                            <img src={a.imagenesUrl[0]} />
                        </div>
                        <div className="content">
                            <h2>{a.marca} {a.modelo} {a.motor}</h2>
                            <p className="texto">{a.anio}</p>
                            <p className="texto">{a.descripcion}</p>
                            <p className="price">${a.precio}</p>
                        </div>
                    </div >
                    </a>
                ))}
            </div >
        </>


    )
}