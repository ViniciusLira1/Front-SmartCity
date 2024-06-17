import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const fetchToken = async () => {
    if (username && password) {
      try {
        const response = await axios.post(
          'http://bedon.pythonanywhere.com/api/token/',
          {
            username,
            password
          }
        );
        sessionStorage.setItem('token', response.data.access);
        sessionStorage.setItem('token_refresh', response.data.refresh);
        navigate("/home");
      } catch (error) {
        alert("Usuário ou Senha Inválidas");
        console.error("Failed to fetch token:", error);
      }
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-950">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
        <form onSubmit={(e) => { e.preventDefault(); fetchToken(); }}>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-center mb-4 text-white">Login Smart City</h1>
            <p className="text-center text-gray-500">
              Preencha os campos abaixo para realizar o Login
            </p>
          </div>

          <div className="mb-4">
            <Input
              type="text"
              variant="underlined"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-white bg-gray-850 focus-within:text-white"
              style={{ color: 'white' }}
            />
          </div>
          <div className="mb-6">
            <Input
              type="password"
              variant="underlined"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-white bg-gray-850 focus-within:text-white"
              style={{ color: 'white' }}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gray-700 hover:bg-sky-600 text-white font-semibold py-2 rounded-lg"
          >
            Login
          </Button>

          <div className="flex justify-center mt-5">
            <span className="text-gray-500">Não possui cadastro?</span>
            <Link href="/signup" className="text-sky-500 ml-1">
              Clique aqui
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
