import { Button } from "@nextui-org/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Sensors() {
  const navigate = useNavigate();
  const [sensores, setSensores] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenStoraged = sessionStorage.getItem('token');
    if (tokenStoraged) {
      setToken(tokenStoraged);
    } else {
      console.error("Token não encontrado");
    }
  }, []);

  useEffect(() => {
    if (token) {
      getSensores();
    }
  }, [token]);

  const getSensores = async () => {
    try {
      const response = await axios.get('http://bedon.pythonanywhere.com/api/sensores/', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSensores(response.data);
    } catch (error) {
      console.error("Failed to fetch sensores:", error);
    }
  };

  const edit = (id) => {
    navigate(`/edit/${id}`);
  };

  const exclude = async (id) => {
    if (id) {
      try {
        await axios.delete(`http://bedon.pythonanywhere.com/api/sensores/${id}`);
        alert("Sensor deletado com sucesso!");
        // Atualiza a lista de sensores após a exclusão
        getSensores();
      } catch (error) {
        console.error("Failed to delete sensor:", error);
      }
    } else {
      console.log("Não há id");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mt-36 mb-10">
            <Button onClick={() => navigate("/register")} color="primary" className="bg-gray-700 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg">
              Register New Sensor
            </Button>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {sensores.map((sensor) => (
              <div key={sensor.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{sensor.tipo}</h2>
                  <p className="text-gray-300 mb-4">{sensor.localizacao}</p>
                  <p className="text-gray-400 mb-4">Responsável: {sensor.responsavel}</p>
                  <div className="flex justify-between">
                    <Button auto onClick={() => edit(sensor.id)} className="bg-gray-700 text-white mr-2">
                      Edit
                    </Button>
                    <Button auto onClick={() => exclude(sensor.id)} className="bg-gray-700 text-white hover:bg-red-500">
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
