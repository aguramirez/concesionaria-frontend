import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { AutoContext } from "../context/AutoContext"
import './AutoDetail.css';

export const AutoDetail = () => {

    const { getDetalle, initialAuto } = useContext(AutoContext);
    const [auto, setAuto] = useState(initialAuto);

    const { id } = useParams();
    useEffect(() => {
        const fetchDetalle = async () => {
            setAuto(await getDetalle(id));
        };

        fetchDetalle();
    }, [id]);

    return (
        <>
            <div className="contenedor-detalle">
                <div className="row">
                    <div className="col-md" id="carrousel">
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
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">Marca: </li>
                            <li className="list-group-item">{auto?.marca}</li>
                        </ul>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">Modelo: </li>
                            <li className="list-group-item">{auto?.modelo}</li>
                        </ul>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">Año: </li>
                            <li className="list-group-item">{auto?.anio}</li>
                        </ul>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">Kilometraje: </li>
                            <li className="list-group-item">{auto?.km}</li>
                        </ul>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">Precio: </li>
                            <li className="list-group-item">{auto?.precio}</li>
                        </ul>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">Tipo: </li>
                            <li className="list-group-item">{auto?.tipo}</li>
                        </ul>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">Version: </li>
                            <li className="list-group-item">{auto?.version}</li>
                        </ul>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">Color: </li>
                            <li className="list-group-item">{auto?.color}</li>
                        </ul>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">Combustible: </li>
                            <li className="list-group-item">{auto?.combustible}</li>
                        </ul>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">Puertas: </li>
                            <li className="list-group-item">{auto?.puertas}</li>
                        </ul>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">Transmicion: </li>
                            <li className="list-group-item">{auto?.transmicion}</li>
                        </ul>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">Motor: </li>
                            <li className="list-group-item">{auto?.motor}</li>
                        </ul>
                    </div>
                </div>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item">Descripcion: </li>
                <li className="list-group-item">{auto?.descripcion}</li>
            </ul>
            </div>
        </>
    )
}