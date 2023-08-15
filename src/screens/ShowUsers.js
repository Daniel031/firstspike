import React, { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import './../styles/create.css';

export default function ShowUsers() {
    
    const [result, setResult] = useState([]);

    useEffect(() => {
        const apiService = new ApiService();
        apiService.getUsers()
        .then((value) => {
            setResult(value.data);
        }).catch((e) => {
            console.log('failed to connect');
        });
    }, []);


    return (
    <div className="main-container">
        <table className="border-table">
            <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Celular</td>
                </tr>
            </thead>
            <tbody>
                {
                    result.map(item =>(
                        <tr>
                            <td>{ item.name }</td>
                            <td>{ item.cellphone }</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    );
}