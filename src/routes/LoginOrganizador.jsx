import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginOrganizador = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const organizadores = JSON.parse(localStorage.getItem("organizadores")) || [];
    const organizador = organizadores.find(
      (u) => u.email === email && u.senha === senha
    );

    if (organizador) {
      localStorage.setItem("organizadorLogado", JSON.stringify(organizador));
      navigate("/perfil-organizador");
    } else {
      alert("E-mail ou senha inválidos!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#01183c]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Login Organizador
        </h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          
          <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          
          <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
          
          <button type="submit" className="bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition">Entrar</button>

          <p onClick={() => navigate("/cadastro-organizador")} className="text-center text-sm text-gray-500 mt-2 cursor-pointer hover:underline">Não tem conta? Cadastre-se</p>

        </form>
      </div>
    </div>
  );
};

export default LoginOrganizador;
