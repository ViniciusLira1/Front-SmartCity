import { Button, Input, Link } from "@nextui-org/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      sessionStorage.setItem('token', token);
    }
  }, [token]);

  const createUser = async () => {
    try {
      const response = await axios.post(
        'http://bedon.pythonanywhere.com/api/create_user/',
        {
          username,
          email,
          password
        }
      );

      const resp = await axios.post(
        'http://bedon.pythonanywhere.com/api/token/',
        {
          username,
          password
        }
      );
      setToken(resp.data.access);
      alert("Usuário Criado com Sucesso!");
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-950">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
        <form action="">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-center mb-4 text-white">Bem vindo a Smart City</h1>
            <p className="text-center text-gray-500">
              Preencha os campos abaixo para realizar o Cadastro
            </p>
          </div>

          <div className="mb-4">
            <Input
              type="text"
              variant="underlined"
              label="Nome"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-white bg-gray-850 focus-within:text-white"
              style={{ color: 'white' }}
            />
          </div>

          <div className="mb-4">
            <Input
              type="email"
              variant="underlined"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            type="button"
            className="w-full bg-gray-700 hover:bg-sky-600 text-white font-semibold py-2 rounded-lg"
            onClick={() => createUser()}
          >
            Cadastrar
          </Button>

          <div className="flex justify-center m-auto mt-5">
            <span className="text-gray-500">Já possui cadastro? </span>
            <Link href="/" className="text-sky-500">Clique aqui</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
