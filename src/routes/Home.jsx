// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import Carrossel from "../components/Carrossel";
import JogosNaTv from "../components/Jogosnatv";
import { MdLocationOn, MdDateRange, MdAccessTime } from "react-icons/md";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#F4F0F8]">

      {/* BANNER HERO */}
      <section className="py-20 text-center bg-gradient-to-r from-[#FF6F91] to-[#A87AD9] text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
           Bem-vindo(a) ao Passa a Bola
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Cadastre-se e descubra um mundo de possibilidades para jovens jogadoras!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <button
            onClick={() => navigate("/cadastro")}
            className="bg-[#FF6F91] text-white font-bold py-3 px-6 rounded-full hover:bg-[#E65A7F] transition transform hover:scale-105"
          >
             Cadastrar-se
          </button>

          <button
            onClick={() => navigate("/cadastro-organizador")}
            className="bg-[#14001D] text-white font-bold py-3 px-6 rounded-full hover:bg-[#2B0C3D] transition transform hover:scale-105"
          >
             Painel para Organizadores
          </button>

          <button
            onClick={() => navigate("/torneios")}
            className="bg-[#FF6F91] text-white font-bold py-3 px-6 rounded-full hover:bg-[#E65A7F] transition transform hover:scale-105"
          >
             Torneios
          </button>

          <button
            onClick={() => navigate("/mapa")}
            className="bg-[#14001D] text-white font-bold py-3 px-6 rounded-full hover:bg-[#2B0C3D] transition transform hover:scale-105"
          >
             Mapa de Peneiras
          </button>

          <button
            onClick={() => navigate("/recompensas")}
            className="bg-[#FF6F91] text-white font-bold py-3 px-6 rounded-full hover:bg-[#E65A7F] transition transform hover:scale-105"
          >
             Recompensas
          </button>

          <button
            onClick={() => navigate("/canal-de-pais-e-responsaveis")}
            className="bg-[#14001D] text-white font-bold py-3 px-6 rounded-full hover:bg-[#2B0C3D] transition transform hover:scale-105"
          >
             Canal dos Pais
          </button>
        </div>
      </section>



{/* SEÇÃO DE TORNEIOS */}
<section className="py-16 max-w-6xl mx-auto px-4">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

    {/* Texto motivador à esquerda */}
    <div className="md:w-1/2 flex flex-col items-start">
      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Encontro FutDelas
      </h3>
      <p className="text-xl md:text-1xl text-gray-900 mb-6">
        São momentos especiais para mulheres de todas as idades e níveis se divertirem,
        praticarem futebol e conhecerem novas amigas que também amam o esporte. Venha jogar, aprender e celebrar o
        futebol feminino com a gente!
      </p>
      <button
        onClick={() => navigate("/torneios")}
        className="bg-[#FF6F91] text-white py-3 px-6 rounded-full hover:bg-[#E65A7F] hover:scale-105 transition"
      >
        Se inscreva!
      </button>
    </div>

    {/* Card do próximo encontro à direita */}
    <div className="md:w-1/2 flex flex-col items-center">
      <div className="bg-white text-[#1a1a1a] p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 border-t-4 border-[#FF6F91] flex flex-col justify-center h-full w-full">
        <h4 className="font-bold text-2xl mb-4">Próximo Encontro</h4>
        
        {/* Local */}
        <p className="text-[#2d2d2d] text-lg mb-2 flex items-center gap-2">
          <MdLocationOn className="text-pink-500" /> Campo de Bairro
        </p>

        {/* Data */}
        <p className="text-gray-700 text-lg mb-2 flex items-center gap-2">
          <MdDateRange className="text-pink-500" /> 18/09
        </p>

        {/* Horário */}
        <p className="text-gray-700 text-lg flex items-center gap-2">
          <MdAccessTime className="text-pink-500" /> 20:00 - 23:00
        </p>
      </div>
    </div>

  </div>
</section>


      {/* CARROSSEL DE DEPOIMENTOS */}
      <Carrossel fundo="#FF6F91" />

      {/* SEÇÃO JOGOS NA TV */}
      <JogosNaTv />

        {/* SEÇÃO DE PENEIRAS */}
<section className="py-16 text-center bg-[#FF6F91]">
  <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">Peneiras Próximas</h3>
  <p className="max-w-3xl mx-auto mb-8 text-lg text-white">
    Veja onde estão as peneiras e eventos perto de você. Clique no botão para acessar o mapa completo!
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    <div className="bg-white text-[#14001D] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
      <h4 className="font-bold text-xl mb-2">Allianz Parque</h4>
      <p className="text-[#5a8ca6]">Peneira dia 20/09 às 14h</p>
    </div>
    <div className="bg-white text-[#14001D] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
      <h4 className="font-bold text-xl mb-2">Centro de Treinamento</h4>
      <p className="text-[#5a8ca6]">Peneira dia 29/09 às 09h</p>
    </div>
    <div className="bg-white text-[#14001D] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
      <h4 className="font-bold text-xl mb-2">Neo Química Arena</h4>
      <p className="text-[#5a8ca6]">Evento de organizadores dia 02/10 às 10h</p>
    </div>
  </div>
  <div className="mt-10">
    <button
      onClick={() => navigate("/mapa")}
      className="bg-[#14001D] text-white py-3 px-6 rounded-full hover:bg-[#2B0C3D] hover:scale-105 transition"
    >
       Ver Mapa Completo
    </button>
  </div>
</section>



      {/* SEÇÃO NÚMEROS */}
      <section className="py-12 text-center">
        <h3 className="text-3xl font-bold mb-8 text-[#14001D]">Nossos números</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition text-[#14001D]">
            <p className="text-4xl font-bold">500+</p>
            <p>Jogadoras cadastradas</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition text-[#14001D]">
            <p className="text-4xl font-bold">30+</p>
            <p>Torneios apoiados</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition text-[#14001D]">
            <p className="text-4xl font-bold">15+</p>
            <p>Clubes conectados</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO CANAL DOS PAIS */}
      <section className="py-16 bg-[#FF6F91] text-white text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-6"> Canal dos Pais</h3>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8">
          Um espaço dedicado aos pais e responsáveis acompanharem o desenvolvimento das jovens jogadoras, receber dicas de segurança, participar de decisões e acompanhar torneios e recompensas.
        </p>
        <button
          onClick={() => navigate("/canal-de-pais-e-responsaveis")}
          className="bg-[#14001D] text-white font-bold py-3 px-6 rounded-full hover:bg-[#2B0C3D] hover:scale-105 transition"
        >
          Acessar Canal dos Pais
        </button>
      </section>
    </div>
  );
};

export default Home;
