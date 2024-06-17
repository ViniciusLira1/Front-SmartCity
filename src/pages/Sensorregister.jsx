import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";

export default function Login() {
    const navigate = useNavigate();

    const [responsavel, setResponsavel] = useState('');
    const [tipo, setTipo] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [unidade_medida, setUnidade_medida] = useState('');
    const [observacao, setObservacao] = useState('');
    const [status_operacional, setStatus_operacional] = useState('');
    const [mac_address, setMacAddress] = useState('');
    const [token, setToken] = useState(null);

    useEffect(() => {
        const tokenStoraged = sessionStorage.getItem('token');
        if (tokenStoraged) {
            setToken(tokenStoraged);
        } else {
            console.error("Token não encontrado");
        }
    }, []);

    const criarSensor = async () => {
        if (!token) {
            console.error("Não há token para a autorização");
            return;
        }

        try {
            const response = await axios.post(
                'http://bedon.pythonanywhere.com/api/sensores/',
                {
                    responsavel,
                    tipo,
                    mac_address,
                    localizacao,
                    latitude,
                    longitude,
                    unidade_medida,
                    observacao,
                    status_operacional
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            console.log("Sensor criado");
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <form onSubmit={(e) => { e.preventDefault(); criarSensor(); }} className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-3xl">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white">Register your sensor</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Input 
                            type="text" 
                            variant="underlined" 
                            label="Responsavel" 
                            value={responsavel} 
                            onChange={(e) => setResponsavel(e.target.value)} 
                            className="mb-4 text-white bg-gray-850 focus-within:text-white"
                            style={{ color: 'white' }}
                        />
                        <Input 
                            type="text" 
                            variant="underlined" 
                            label="Tipo" 
                            value={tipo} 
                            onChange={(e) => setTipo(e.target.value)} 
                            className="mb-4 text-white bg-gray-850 focus-within:text-white"
                            style={{ color: 'white' }}
                        />
                        <Input 
                            type="text" 
                            variant="underlined" 
                            label="Mac_address" 
                            value={mac_address} 
                            onChange={(e) => setMacAddress(e.target.value)} 
                            className="mb-4 text-white bg-gray-850 focus-within:text-white"
                            style={{ color: 'white' }}
                        />
                    </div>
                    <div>
                        <Input 
                            type="text" 
                            variant="underlined" 
                            label="Localizacao" 
                            value={localizacao} 
                            onChange={(e) => setLocalizacao(e.target.value)} 
                            className="mb-4 text-white bg-gray-850 focus-within:text-white"
                            style={{ color: 'white' }}
                        />
                        <Input 
                            type="text" 
                            variant="underlined" 
                            label="Latitude" 
                            value={latitude} 
                            onChange={(e) => setLatitude(e.target.value)} 
                            className="mb-4 text-white bg-gray-850 focus-within:text-white"
                            style={{ color: 'white' }}
                        />
                        <Input 
                            type="text" 
                            variant="underlined" 
                            label="Longitude" 
                            value={longitude} 
                            onChange={(e) => setLongitude(e.target.value)} 
                            className="mb-4 text-white bg-gray-850 focus-within:text-white"
                            style={{ color: 'white' }}
                        />
                    </div>
                    <div>
                        <Input 
                            type="text" 
                            variant="underlined" 
                            label="Unidade de medida" 
                            value={unidade_medida} 
                            onChange={(e) => setUnidade_medida(e.target.value)} 
                            className="mb-4 text-white bg-gray-850 focus-within:text-white"
                            style={{ color: 'white' }}
                        />
                        <Input 
                            type="text" 
                            variant="underlined" 
                            label="Observacao" 
                            value={observacao} 
                            onChange={(e) => setObservacao(e.target.value)} 
                            className="mb-4 text-white bg-gray-850 focus-within:text-white"
                            style={{ color: 'white' }}
                        />
                        <Input 
                            type="text" 
                            variant="underlined" 
                            label="Status operacional" 
                            value={status_operacional} 
                            onChange={(e) => setStatus_operacional(e.target.value)} 
                            className="mb-4 text-white bg-gray-850 focus-within:text-white"
                            style={{ color: 'white' }}
                        />
                    </div>
                </div>
                <div className="text-center mt-8">
                    <Button type="submit" color="primary" className="w-1/2 bg-gray-950 hover:bg-red-500 text-white">Register</Button>
                </div>
            </form>
        </div>
    );
}
