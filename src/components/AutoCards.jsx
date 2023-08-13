import { useEffect, useState } from "react"
import { getAutos } from "../services/AutoService";
import './AutoCards.css';

export const AutoCards = () => {

    const [autos, setAutos] = useState([]);

    const findAll = async () => {
        const autosBackend = await getAutos();
        setAutos(autosBackend);
    }

    useEffect(
        () => {
            findAll();
        }, []
    )

    return (
        <>
            <div className="card-container">
                {autos.map(a => (
                    <div className="card" style={{ width: '18rem' }} key={a.marca}>
                        <img src={a.imagenesUrl[0]} className="card-img-top" alt="auto" />
                        <div className="card-body">
                            <h5 className="card-title">{a.marca} {a.modelo} {a.motor}</h5>
                            <p className="card-text">{a.descripcion}</p>
                            <p className="card-text precio">U$D {a.precio}</p>
                            <a href="#" className="btn btn-primary">
                                Ver
                            </a>
                        </div>
                    </div>
                
            ))}
            </div>
        </>


    )
}