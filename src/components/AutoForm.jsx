import { useContext, useEffect, useState } from 'react';
import './AutoForm.css';
import { AutoContext } from '../context/AutoContext';
import { useNavigate, useParams } from 'react-router-dom';

const initialAutoForm = {
    id: 0,
    marca: '',
    modelo: '',
    anio: '',
    km: '',
    precio: '',
    descripcion: '',
    tipo: '',
    version: '',
    color: '',
    combustible: '',
    puertas: '',
    transmicion: '',
    motor: '',
    imagenesUrl: [],
}

export const AutoForm = () => {

    const { handlerAddAuto, autos } = useContext(AutoContext);
    const [autoForm, setAutoForm] = useState(initialAutoForm);
    const [autoSelected, setAutoSelected] = useState(initialAutoForm);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        if(id){
            setAutoSelected(autos.find(a => a.id == id)) || initialAutoForm;
            setAutoForm({
                ...autoSelected,
            })
        }
    },[autoSelected, id])

    const {
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
        motor,imagen} = autoForm;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setAutoForm({
            ...autoForm,
            [name]: value,
        })
    }
    
    const onInputChangeImg = ({target}) => {
        const {value} = target;
        const newImg = [value];
        setAutoForm({
            ...autoForm,
            imagenesUrl: newImg,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        handlerAddAuto(autoForm);
        setAutoForm(initialAutoForm);
        navigate("/");

    }
    return (
        <>
            <div className='container'>
                <form className="row g-3" onSubmit={onSubmit}>
                    <div className="col-md-4">
                        <input 
                        className="form-control"
                        placeholder="Marca" 
                        id="marca"
                        name="marca"
                        value={marca}
                        onChange={onInputChange} required />
                    </div>
                    <div className="col-md-4">
                        <input 
                        className="form-control" 
                        placeholder="Modelo"
                        id="modelo"
                        name="modelo"
                        value={modelo}
                        onChange={onInputChange} required />
                    </div>
                    <div className="col-md-4">
                        <input
                        className="form-control" 
                        placeholder="Año"
                        id="anio" 
                        name="anio"
                        value={anio}
                        onChange={onInputChange} required />
                    </div>
                    <div className="col-md-4">
                        <input
                        className="form-control" 
                        placeholder="Kilometraje"
                        id="km" 
                        name="km"
                        value={km}
                        onChange={onInputChange} required />
                    </div>
                    <div className="col-md-4">
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">$</span>
                            <input 
                            className="form-control" 
                            placeholder="Precio"
                            id="precio" 
                            aria-describedby="inputGroupPrepend" 
                            name="precio"
                            value={precio}
                            onChange={onInputChange} required />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <input 
                        className="form-control" 
                        placeholder="Descripcion"
                        id="descripcion" 
                        name="descripcion"
                        value={descripcion}
                        onChange={onInputChange} required />
                    </div>
                    <div className="col-md-4">
                        <input 
                        className="form-control" 
                        placeholder="Tipo"
                        id="tipo" 
                        name="tipo"
                        value={tipo}
                        onChange={onInputChange} required />
                    </div>
                    <div className="col-md-4">
                        <input 
                        className="form-control" 
                        placeholder="Version"
                        id="version" 
                        name="version"
                        value={version}
                        onChange={onInputChange} required />
                    </div>
                    <div className="col-md-4">
                        <input 
                        className="form-control" 
                        placeholder="Color"
                        id="color" 
                        name="color"
                        value={color}
                        onChange={onInputChange} required />
                    </div>
                    <div className="col-md-4">
                        <input 
                        className="form-control" 
                        placeholder="Combustible"
                        id="combustible" 
                        name="combustible"
                        value={combustible}
                        onChange={onInputChange} required />
                    </div>
                    <div className="col-md-4">
                        <input 
                        className="form-control"
                        placeholder="Puertas"
                        id="puertas" 
                        name="puertas"
                        value={puertas}
                        onChange={onInputChange} required />
                    </div>
                    <div className="col-md-4">
                        <input 
                        className="form-control" 
                        placeholder="Transmicion"
                        id="transmicion"
                        name="transmicion" 
                        value={transmicion}
                        onChange={onInputChange} required />
                    </div>
                    <div className="col-md-4">
                        <input 
                        className="form-control" 
                        placeholder="Motor"
                        id="motor" 
                        name="motor"
                        value={motor}
                        onChange={onInputChange} required />
                    </div>
                    <div className="col-md-4">
                        <input 
                        className="form-control" 
                        placeholder="Imagen"
                        id="imagen" 
                        name='imagen'
                        value={imagen}
                        onChange={onInputChangeImg} required />
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">{id > 0?'Editar':'Crear'}</button>
                    </div>
                </form>
            </div>
        </>
    )
}