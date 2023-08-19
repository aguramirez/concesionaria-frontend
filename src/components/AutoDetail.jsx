import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { AutoContext } from "../context/AutoContext"
import './AutoDetail.css';

export const AutoDetail = () => {

    const { getDetalle, initialAuto , handlerRemoveAuto} = useContext(AutoContext);
    const [auto, setAuto] = useState(initialAuto);
    const navigate = useNavigate();

    const { id } = useParams();
    useEffect(() => {
        const fetchDetalle = async () => {
            setAuto(await getDetalle(id));
        };

        fetchDetalle();
    }, [id]);

    const handlerEditarAuto = (id) => {
        navigate(`/autos/editar/${id}`);
    }

    return (
        <>
            <div className="contenedor-detalle">
                <div className="row">
                    <div className="col-md" id="carrousel">
                <button className="btn btn-primary m-2" onClick={() => handlerEditarAuto(auto.id)}>Editar</button>
                <button className="btn btn-danger m-2" onClick={() => handlerRemoveAuto(auto.id)}>Borrar</button>
                        <div id="carouselExampleIndicators" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={auto?.imagenesUrl} className="d-block w-100" alt='' />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Marca: {auto?.marca}</li>
                            <li className="list-group-item">Modelo: {auto?.modelo}</li>
                            <li className="list-group-item">Motor: {auto?.motor}</li>
                            <li className="list-group-item">Version: {auto?.version}</li>
                            <li className="list-group-item">Kilometraje{auto?.km}</li>
                            <li className="list-group-item">Año: {auto?.anio}</li>
                            <li className="list-group-item">Precio: {auto?.precio}</li>
                            <li className="list-group-item">Transmicion: {auto?.transmicion}</li>
                            <li className="list-group-item">Tipo: {auto?.tipo}</li>
                            <li className="list-group-item">Color: {auto?.color}</li>
                            <li className="list-group-item">Combustible: {auto?.combustible}</li>
                            <li className="list-group-item">Puertas: {auto?.puertas}</li>
                        </ul>
                    </div>
                </div>
                <p className="descripcion">Descripcion: {auto?.descripcion}</p>
            </div>
        </>
    )
}