// Cadastro.jsx
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Cadastro = () => {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Pega os usuários já cadastrados do localStorage
  const getUsers = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  };

  const onSubmit = (data) => {
    const users = getUsers();

    // Verifica se o email já existe
    const userExists = users.some((user) => user.email === data.email);

    if (userExists) {
      setMessage("E-mail já cadastrado... redirecionando para login");
      setTimeout(() => {
        navigate("/login"); // redireciona para Login.jsx
      }, 2000);
    } else {
      // Cria novo usuário
      const novoUser = {
        nome: data.nome,
        idade: data.idade,
        email: data.email,
        senha: data.senha,
        posicao: data.posicao,
        foto: data.foto || "",
      };

      // Salva no localStorage
      localStorage.setItem("users", JSON.stringify([...users, novoUser]));
      setMessage("Cadastro realizado com sucesso!");
      reset();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Cadastro</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input {...register("nome", { required: true })} placeholder="Nome" className="border p-2 rounded"/>
          
          <input {...register("dataNascimento", { required: true })} type="data" placeholder="Data de Nascimento" className="border p-2 rounded"/>
          
          <input {...register("email", { required: true })} type="email" placeholder="E-mail" className="border p-2 rounded"/>
         
          <input {...register("senha", { required: true })} type="password" placeholder="Senha" className="border p-2 rounded"/>
          
          <select {...register("posicao", { required: true })} className="border p-2 rounded">
            <option value="">Selecione a posição em campo</option>
            <option value="Goleiro">Goleiro</option>
            <option value="Zagueiro">Zagueiro</option>
            <option value="Lateral">Lateral</option>
            <option value="Meio-campo">Meio-campo</option>
            <option value="Atacante">Atacante</option>
          </select>
          <input
            {...register("foto")}
            type="text"
            placeholder="URL da Foto (opcional)"
            className="border p-2 rounded"/>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Cadastrar</button>
          <button onClick={() => navigate("/")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Teste</button>

          </form>

        {message && (
          <p className="text-center text-sm text-red-500 mt-4">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Cadastro;
