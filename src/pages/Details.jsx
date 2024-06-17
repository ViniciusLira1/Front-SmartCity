import React from "react";
import Smart_city from "../assets/Smart_city.png"
import { Button } from "@nextui-org/react";


export default function SmartCityDetails() {
    return (
        <>
      
      
        <section className="bg-gray-800 py-10 mt-6">
            <div className="container mx-auto text-center">
                <h1 className="text-blue-400 text-5xl font-extrabold mb-6">Smart City: A Cidade do Futuro</h1>
                <p className="text-gray-300 mb-8 leading-relaxed">
                    A cidades inteligente, ou Smart City, são uma resposta moderna aos desafios urbanos contemporâneos. 
                    Elas utilizam tecnologias avançadas de informação e comunicação para melhorar a eficiência dos serviços urbanos, 
                    aumentar a transparência na gestão pública, 
                    promover a interação com os cidadãos e fomentar o desenvolvimento sustentável. 
                    No coração dessas tecnologias estão os sensores, dispositivos que capturam
                    dados essenciais em tempo real para uma gestão mais eficaz da cidade.
                </p>
               
            </div>
        </section>

        <section className="bg-gray-900 py-10 my-0">
            <div className="container mx-auto text-center">
                <h1 className="text-blue-400 text-5xl font-extrabold mb-6">Tipos de Sensores</h1>
            </div>
        </section>

        <section className="py-12 bg-gray-800">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-start">
                    <h2 className="text-blue-400 text-4xl font-bold mb-5">Sensor de Luminosidade</h2>
                    <p className="mb-8 text-gray-300 leading-relaxed">
                        Sensores de luminosidade são usados para medir a quantidade de luz em um ambiente. 
                        Eles são essenciais para sistemas de iluminação inteligente, que ajustam automaticamente a 
                        intensidade da luz com base nas condições atuais, 
                        economizando energia e melhorando o conforto dos cidadãos.
                        
                    </p>
                </div>
                <div className="flex justify-center">
                    
                </div>
            </div>
        </section>

        <section className="py-12 bg-gray-900">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-start">
                    <h2 className="text-blue-400 text-4xl font-bold mb-5">Sensor de Umidade</h2>
                    <p className="mb-8 text-gray-300 leading-relaxed">
                        Sensores de umidade medem a quantidade de vapor de água no ar. 
                        Eles são vitais para o monitoramento climático, controle de ambientes internos e sistemas de irrigação inteligente, 
                        garantindo condições ótimas para plantas e seres humanos.
                    </p>
                </div>
                <div className="flex justify-center">
                   
                </div>
            </div>
        </section>

        <section className="py-12 bg-gray-800">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-start">
                    <h2 className="text-blue-400 text-4xl font-bold mb-5">Sensor Contador</h2>
                    <p className="mb-8 text-gray-300 leading-relaxed">
                        Sensores contadores são usados para medir o fluxo de pessoas ou veículos. 
                        Eles são críticos para a gestão de tráfego, 
                        planejamento de eventos e análise de ocupação de espaços,
                         ajudando a melhorar a eficiência e segurança nas áreas urbanas.
                    </p>
                </div>
            </div>
        </section>

        <section className="py-12 bg-gray-900">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-start">
                    <h2 className="text-blue-400 text-4xl font-bold mb-5">Sensor Temperatura</h2>
                    <p className="mb-8 text-gray-300 leading-relaxed">
                        Sensores de temperatura são dispositivos que medem a temperatura de ambientes e objetos. 
                        Eles são vitais para diversas aplicações, incluindo automação residencial, sistemas de climatização (HVAC),
                        monitoramento industrial e controle de processos. Esses sensores ajudam a garantir que equipamentos funcionem 
                        de maneira segura e eficiente, proporcionando conforto e segurança aos ocupantes de um espaço.
                    </p>
                </div>
            </div>
        </section>

     
    </>
    );
}
