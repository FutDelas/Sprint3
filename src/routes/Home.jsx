import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-800 flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Fundo gradiente */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#001449,#061013)] opacity-90"></div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          ⚽ Bem-vindo(a) ao FutDelas
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          Cadastre-se e descubra um mundo de possibilidades para jovens jogadoras! 
        </p>

        {/* Grade de botões */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <button
            onClick={() => navigate("/cadastro")}
            className="cursor-pointer bg-yellow-600 text-white font-bold py-3 px-6 rounded-full hover:bg-[#14001dff] transition transform hover:scale-105"
          >
            📝 Cadastrar-se
          </button>

          <button
            onClick={() => navigate("/cadastro-organizador")}
            className="cursor-pointer bg-purple-800 text-white font-bold py-3 px-6 rounded-full hover:bg-[#14001dff] transition transform hover:scale-105"
          >
            🎁 Painel para Organizadores
          </button>

          <button
            onClick={() => navigate("/torneios")}
            className="cursor-pointer bg-yellow-600 text-white font-bold py-3 px-6 rounded-full hover:bg-[#14001dff] transition transform hover:scale-105"
          >
            🏆 Torneios
          </button>

          <button
            onClick={() => navigate("/mapa")}
            className="cursor-pointer bg-purple-800 text-white font-bold py-3 px-6 rounded-full hover:bg-[#14001dff] transition transform hover:scale-105"
          >
            🗺️ Mapa de Peneiras
          </button>

          <button
            onClick={() => navigate("/recompensas")}
            className="cursor-pointer bg-yellow-600 text-white font-bold py-3 px-6 rounded-full hover:bg-[#14001dff] transition transform hover:scale-105"
          >
            🎖️ Recompensas
          </button>

          <button
            onClick={() => navigate("/canal-de-pais-e-responsaveis")}
            className="cursor-pointer bg-purple-800 text-white font-bold py-3 px-6 rounded-full hover:bg-[#14001dff] transition transform hover:scale-105"
          >
            👨‍👩‍👧 Canal dos Pais
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
