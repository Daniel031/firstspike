import React, { useState } from "react";
import ApiService from "../services/ApiService";
import './../styles/create.css';
import { Link } from "react-router-dom";

export default function CreateUser() {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        const apiService = new ApiService();
        apiService.saveUser(name, number)
        .then((value) => {
            console.log(value);
        })
        .catch((e) => {
            console.log(e);
        });
    }

    return (
    <div className="main-container">
        <div className="card">
            <form onSubmit={ handleSubmit }>
                <div className="form-field">
                    <input placeholder="Nombre" type="text" onChange={ (e) => setName(e.target.value) }/>
                    <label>Nombre</label>
                </div>
                <div className="form-field">
                    <input placeholder="Celular" type="number" onChange={ (e) => setNumber(e.target.value) }/>
                    <label>Celular</label>
                </div>
                <div className="button-send">
                    <input type="submit" value={ 'Guardar' }/>
                </div>
                <div className="hiperlink">
                    <Link to={'/show-users'}> Mostrar usuarios </Link>
                </div>
            </form>
        </div>
    </div>
    );
}