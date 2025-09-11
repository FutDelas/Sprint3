import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Cadastro = () => {
  const { register, handleSubmit, reset } = useForm();
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  const cadastrarPerfil = (data) => {
    const { email, password } = data;
    const emailExistente = users.some(user => user.email === email);
    if (emailExistente) {
      setMessage("Este e-mail já está cadastrado");
    } else {
      setUsers([...users, { email, password }]);
      setMessage("Usuário cadastrado com sucesso!");
      reset();
    }
  };

  useEffect(() => {
    const usuariosSalvos = localStorage.getItem("users");
    if (usuariosSalvos) {
      setUsers(JSON.parse(usuariosSalvos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

   return (
    <div className="relative min-h-screen bg-blue-800 flex items-center justify-center">
      {/* Fundo com gradiente */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#001449,#061013)] opacity-90"></div>

      {/* Conteúdo por cima */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md z-10">
        <h2 className="text-2xl font-bold text-center text-[#14001dff] mb-6">Login</h2>
        <form onSubmit={handleSubmit(cadastrarPerfil)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input 
              type="email" 
              {...register("email", { required: true })} 
              placeholder="Digite seu email" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Senha:</label>
            <input 
              type="password" 
              {...register("password", { required: true })} 
              placeholder="Digite sua senha" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="cursor-pointer w-full bg-[#14001dff] text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Entrar
          </button>
        </form>
        {message && (
          <p className={`mt-4 text-center ${message.includes("cadastrado") ? "text-red-600" : "text-green-600"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Cadastro;