import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import Painel from "../components/Painel";
import PainelMap from "../components/PainelMap";
import { Button } from "@nextui-org/react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
    const [token, setToken] = useState('');
    const [sensores, setSensores] = useState([]);
    const [escolha, setEscolha] = useState('');
    const [sensor, setSensor] = useState('');
    const [sensorData, setSensorData] = useState('');
    const [selectedButton, setSelectedButton] = useState('');

    useEffect(() => {
        const tokenStoraged = sessionStorage.getItem('token');
        if (tokenStoraged) {
            setToken(tokenStoraged);
        }
    }, []);

    useEffect(() => {
        if (token) {
            getSensores();
        }
    }, [token, escolha]);

    const getSensores = async () => {
        try {
            const response = await axios.get(`http://bedon.pythonanywhere.com/api/sensores/?tipo=${escolha}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setSensores(response.data);
        } catch (error) {
            console.error("Failed to fetch sensores:", error);
        }
    };

    const handleEscolhaChange = (novaEscolha) => {
        setEscolha(novaEscolha);
        setSelectedButton(novaEscolha);
    };

    const handleSensorChange = async (sensor) => {
        setSensor(sensor);
        try {
            const response = await axios.post(`http://bedon.pythonanywhere.com/api/${sensor.tipo.toLowerCase()}_filter/`, {
                'sensor_id': sensor.id
            },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            setSensorData(response.data);
        } catch (error) {
            console.error("Failed to fetch sensor data:", error);
        }
    };

    return (
        <>
             <section className="bg-gray-900 py-20">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 py-10">
                <div className="text-center md:text-left w-full">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">O que é SmartCity?</h1>
                    <p className="text-gray-300 text-lg md:text-xl mb-8">
                        A Smart City utiliza tecnologias de informação e comunicação para melhorar a eficiência dos serviços urbanos,
                        aumentar a transparência e a interação com os cidadãos, e promover um desenvolvimento sustentável.
                        A integração de sensores, dados em tempo real e automação oferece novas oportunidades.
                    </p>
                    <Link to="/details">
                        <Button className="bg-blue-500 text-white w-40 hover:bg-blue-600">Saiba mais!</Button>
                    </Link>
                    
                </div>
            </div>
      

                <div className="">

                    <div>
                        <Menu onEscolhaChange={handleEscolhaChange} />
                        <PainelMap sensores={sensores} onClickMarker={handleSensorChange} />
                    </div>

                </div>
            </section>
            <section className="bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center justify-between">
                    <div className="relative w-full">
                        <Painel sensor={sensor} sensorData={sensorData} />
                    </div>
                </div>
            </section>
            <section className="bg-gray-900 py-20">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 py-10">
                <div className="text-center md:text-left w-full">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Deseja adicionar ou editar um sensor?</h1>
                    <p className="text-gray-300 text-lg md:text-xl mb-8">
                        Clique no botão abaixo para editar ou cadastrar um sensor!
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Link to="/register">
                            <Button className="bg-blue-500 text-white w-40 hover:bg-blue-600">Cadastrar</Button>
                        </Link>
                        <Link to="/sensors">
                            <Button className="bg-blue-500 text-white w-40 hover:bg-blue-600">Editar</Button>
                        </Link>
                    </div>
                    
                </div>
            </div>
            </section>
           
        </>
    );
}
