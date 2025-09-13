import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState(""); // começa vazio
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();

    if (!tipo) {
      alert("Por favor, selecione o tipo de conta.");
      return;
    }

    const novoUsuario = { nome, dataNascimento, email, senha, tipo };
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.find((u) => u.email === email);
    if (existe) {
      alert("E-mail já cadastrado! Vá para o login.");
      navigate("/login");
      return;
    }

    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#01183c]">
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Cadastro
        </h1>
        <form onSubmit={handleCadastro} className="flex flex-col gap-4">
          
          <input type="text" placeholder="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} required className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"/>
          
          <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"/>
          
          <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"/>

          <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"/>

          <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-600" required>
            
            <option value="" disabled>Selecione o tipo de conta</option>
            <option value="jogadora">Jogadora</option>
            <option value="treinador">Treinador</option>
          
          </select>

          <button type="submit" className="bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition">Cadastrar</button>
          
          <p onClick={() => navigate("/login")} className="text-center text-sm text-gray-500 mt-2 cursor-pointer hover:underline">Já tem conta? Faça login</p>
        
        </form>
      </div>
    </div>
    </div>
  );
};

export default Cadastro;
