import { useContext, useEffect } from "react"
import './AutoCards.css';
import { AutoContext } from "../context/AutoContext";

export const AutoCards = () => {

    const {autos, getAutos} = useContext(AutoContext);

    useEffect(() => {
        getAutos();
    },[]);

    return (
        <>
            <a href="#">
            <div className="container">
                {autos.map(a => (
                <div className="card" key={a.marca}>
                    <div className="img-box">
                        <img src={a.imagenesUrl[0]} />
                    </div>
                    <div className="content">
                        <h2>{a.marca} {a.modelo} {a.motor}</h2>
                        <p>{a.anio}</p>
                        <p>{a.descripcion}</p>
                        <p className="price">${a.precio}</p>
                    </div>
                </div>
                ))}
            </div>
            </a>
        </>


    )
}