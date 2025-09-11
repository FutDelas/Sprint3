import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-800 flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Fundo decorativo tipo campo */}
      
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#001449,_#061013)] opacity-90"></div>
      {/* Conteúdo */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          ⚽ Bem-vindo(a) ao FutDelas
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          Cadastre-se e descubra um mundo de possibilidades para jovens jogadoras! 
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/cadastro")}
            className="cursor-pointer bg-yellow-500 text-black font-bold py-3 px-6 rounded-full hover:bg-pink-700 transition transform hover:scale-105"
          >
            📝 Cadastrar-se
          </button>

      
        </div>
      </div>

      </div>
  );
};

export default Home;
