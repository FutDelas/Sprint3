import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );

    if (usuario) {
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
      navigate("/perfil");
    } else {
      alert("E-mail ou senha inválidos!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Login
        </h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          
          <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"/>
          
          <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"/>
          
          <button type="submit" className="bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition">Entrar</button>
          
          <p onClick={() => navigate("/cadastro")} className="text-center text-sm text-gray-500 mt-2 cursor-pointer hover:underline">Não tem conta? Cadastre-se</p>
        
        </form>
      </div>
    </div>
  );
};

export default Login;
