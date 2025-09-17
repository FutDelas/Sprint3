// src/pages/Escolinhas.jsx
import { useState } from "react";

const Escolinhas = () => {
  const [pagina, setPagina] = useState(0);
  const [filtroFaixa, setFiltroFaixa] = useState("");
  const [filtroLocal, setFiltroLocal] = useState("");
  const [filtroAvaliacao, setFiltroAvaliacao] = useState("");
  const [filtroDias, setFiltroDias] = useState("");
  const [filtroNivel, setFiltroNivel] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [escolinhaSelecionada, setEscolinhaSelecionada] = useState("");
  const [formData, setFormData] = useState({ nome: "", idade: "", email: "", telefone: "" });

  const abrirFormulario = (nomeEscolinha) => {
    setEscolinhaSelecionada(nomeEscolinha);
    setModalAberto(true);
  };
  const fecharModal = () => {
    setModalAberto(false);
    setFormData({ nome: "", idade: "", email: "", telefone: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pré-inscrição enviada para ${escolinhaSelecionada}!`);
    fecharModal();
  };

  const escolinhas = [
     { nome: "Bola de Ouro", local: "São Paulo - SP", faixa: "6 a 14 anos" },
    { nome: "Estrelas do Futuro", local: "Rio de Janeiro - RJ", faixa: "8 a 15 anos" },
    { nome: "Garotas em Campo", local: "Belo Horizonte - MG", faixa: "8 a 14 anos" },
    { nome: "Chuteiras de Ouro", local: "Curitiba - PR", faixa: "7 a 16 anos" },
    { nome: "Futuro Feminino", local: "Porto Alegre - RS", faixa: "6 a 14 anos" },
    { nome: "Academia Estrelas", local: "Fortaleza - CE", faixa: "10 a 18 anos" },
    { nome: "Meninas de Ouro", local: "Recife - PE", faixa: "7 a 14 anos" },
    { nome: "Futebol e Amizade", local: "Salvador - BA", faixa: "8 a 15 anos" },
    { nome: "Craques do Amanhã", local: "Manaus - AM", faixa: "6 a 14 anos" },
    { nome: "Estrelas da Bola", local: "Belém - PA", faixa: "8 a 16 anos" },
    { nome: "Soccer Girls", local: "Florianópolis - SC", faixa: "9 a 15 anos" },
    { nome: "Futebol Feminino RJ", local: "Niterói - RJ", faixa: "8 a 15 anos" },
    { nome: "Meninas em Campo", local: "Campinas - SP", faixa: "7 a 14 anos" },
    { nome: "Garotas de Ouro", local: "Vitória - ES", faixa: "6 a 14 anos" },
    { nome: "Futebol e Alegria", local: "Goiânia - GO", faixa: "8 a 15 anos" },
    { nome: "Chuteiras Mágicas", local: "São Luís - MA", faixa: "7 a 16 anos" },
    { nome: "Estrelas do Futebol", local: "Maceió - AL", faixa: "8 a 14 anos" },
    { nome: "Futebol Feminino BH", local: "Belo Horizonte - MG", faixa: "6 a 14 anos" },
    { nome: "Garotas Futebol Clube", local: "Curitiba - PR", faixa: "8 a 15 anos" },
    { nome: "Bolas de Estrelas", local: "Porto Alegre - RS", faixa: "7 a 14 anos" },
    { nome: "Meninas em Campo 2", local: "São Paulo - SP", faixa: "8 a 14 anos" },
    { nome: "Craques de Amanhã 2", local: "Rio de Janeiro - RJ", faixa: "7 a 16 anos" },
    { nome: "Futebol Feliz", local: "Fortaleza - CE", faixa: "6 a 14 anos" },
    { nome: "Chuteiras Brilhantes", local: "Salvador - BA", faixa: "8 a 15 anos" },
    { nome: "Estrelas Mirins", local: "Recife - PE", faixa: "7 a 14 anos" },
    { nome: "Soccer Kids", local: "Manaus - AM", faixa: "6 a 14 anos" },
    { nome: "Futebol e Alegria 2", local: "Belém - PA", faixa: "8 a 16 anos" },
    { nome: "Garotas Campeãs", local: "Florianópolis - SC", faixa: "9 a 15 anos" },
    { nome: "Academia Bola", local: "Niterói - RJ", faixa: "8 a 15 anos" },
    { nome: "Meninas Brilhantes", local: "Campinas - SP", faixa: "7 a 14 anos" },
    { nome: "Estrelas de Ouro", local: "Vitória - ES", faixa: "6 a 14 anos" },
    { nome: "Futebol e Amizade 2", local: "Goiânia - GO", faixa: "8 a 15 anos" },
    { nome: "Chuteiras de Estrela", local: "São Luís - MA", faixa: "7 a 16 anos" },
    { nome: "Craques Mirins", local: "Maceió - AL", faixa: "8 a 14 anos" },
    { nome: "Futebol Feminino SP", local: "São Paulo - SP", faixa: "6 a 14 anos" },
    { nome: "Garotas Talentosas", local: "Rio de Janeiro - RJ", faixa: "8 a 15 anos" },
    { nome: "Bola e Amizade", local: "Fortaleza - CE", faixa: "7 a 14 anos" },
    { nome: "Estrelas do Amanhã", local: "Salvador - BA", faixa: "8 a 15 anos" },
    { nome: "Soccer Girls 2", local: "Recife - PE", faixa: "6 a 14 anos" },
    { nome: "Futebol Feliz 2", local: "Manaus - AM", faixa: "8 a 16 anos" },
    { nome: "Meninas da Bola", local: "Belém - PA", faixa: "7 a 14 anos" },
    { nome: "Academia Mirim", local: "Florianópolis - SC", faixa: "9 a 15 anos" },
  ];

  const filtradas = escolinhas.filter(e => 
    (!filtroFaixa || e.faixa === filtroFaixa) &&
    (!filtroLocal || e.local.includes(filtroLocal)) &&
    (!filtroAvaliacao || e.avaliacao >= parseInt(filtroAvaliacao)) &&
    (!filtroDias || e.dias.includes(filtroDias)) &&
    (!filtroNivel || e.nivel === filtroNivel)
  );

  const cardsPorPagina = 6;
  const totalPaginas = Math.ceil(filtradas.length / cardsPorPagina);
  const mostrarEscolinhas = filtradas.slice(pagina * cardsPorPagina, (pagina + 1) * cardsPorPagina);

  return (
    <div className="min-h-screen py-12 px-6" style={{ backgroundColor: "#F0F4F8" }}>
      <h1 className="text-4xl font-bold mb-6 text-center text-[#F06292]">
        Escolinhas de Futebol
      </h1>

      <div className="flex gap-6 max-w-6xl mx-auto">
        {/* Coluna esquerda - Filtros */}
        <div className="w-1/4 space-y-4 p-4 bg-white rounded-2xl shadow-md shadow-pink-100 sticky top-4 h-fit">
          <h2 className="font-bold text-xl mb-2 text-[#003B5C]">Filtros</h2>
          <select value={filtroFaixa} onChange={e => { setFiltroFaixa(e.target.value); setPagina(0); }} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F06292]">
            <option value="">Faixa Etária</option>
            <option value="6 a 8 anos">6 a 8 anos</option>
            <option value="9 a 12 anos">9 a 12 anos</option>
            <option value="13 a 16 anos">13 a 16 anos</option>
          </select>

          <select value={filtroLocal} onChange={e => { setFiltroLocal(e.target.value); setPagina(0); }} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F06292]">
            <option value="">Localização</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="MG">Minas Gerais</option>
            <option value="PR">Paraná</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="CE">Ceará</option>
            <option value="PE">Pernambuco</option>
            <option value="BA">Bahia</option>
            <option value="AM">Amazonas</option>
            <option value="PA">Pará</option>
            <option value="SC">Santa Catarina</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="AL">Alagoas</option>
          </select>

          <select value={filtroAvaliacao} onChange={e => { setFiltroAvaliacao(e.target.value); setPagina(0); }} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F06292]">
            <option value="">Avaliação mínima</option>
            {[5,4,3,2,1].map(n => <option key={n} value={n}>{'★'.repeat(n)}</option>)}
          </select>

          <select value={filtroDias} onChange={e => { setFiltroDias(e.target.value); setPagina(0); }} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F06292]">
            <option value="">Dias de treino</option>
            <option value="Seg">Segunda</option>
            <option value="Ter">Terça</option>
            <option value="Qua">Quarta</option>
            <option value="Qui">Quinta</option>
            <option value="Sex">Sexta</option>
            <option value="Sáb">Sábado</option>
          </select>

          <select value={filtroNivel} onChange={e => { setFiltroNivel(e.target.value); setPagina(0); }} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F06292]">
            <option value="">Nível</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </div>

        {/* Coluna direita - Cards */}
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {mostrarEscolinhas.map((e, i) => (
            <div key={i} className="p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105" style={{ backgroundColor: "#FFFFFF", borderLeft: "4px solid #F06292" }}>
              <h3 className="font-bold text-xl mb-2 text-[#003B5C]">{e.nome}</h3>
              <p className="mb-1"><strong>Local:</strong> {e.local}</p>
              <p className="mb-1"><strong>Faixa etária:</strong> {e.faixa}</p>
              <p className="mb-1"><strong>Avaliação:</strong> {'★'.repeat(e.avaliacao)}</p>
              <p className="mb-1"><strong>Dias de treino:</strong> {e.dias}</p>
              <p className="mb-1"><strong>Nível:</strong> {e.nivel}</p>
              <button onClick={() => abrirFormulario(e.nome)} className="mt-2 py-2 px-4 bg-gradient-to-r from-[#F06292] to-[#E65A7F] text-white rounded-full hover:from-[#E65A7F] hover:to-[#F06292] transition transform hover:scale-105">
                Pré-inscrição
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navegação */}
      <div className="flex justify-center mt-6 gap-4">
        <button disabled={pagina===0} onClick={() => setPagina(pagina-1)} className="py-2 px-4 bg-[#F06292] text-white rounded-full disabled:opacity-50 hover:bg-[#E65A7F] transition">Anterior</button>
        <button disabled={pagina+1>=totalPaginas} onClick={() => setPagina(pagina+1)} className="py-2 px-4 bg-[#F06292] text-white rounded-full disabled:opacity-50 hover:bg-[#E65A7F] transition">Próximo</button>
      </div>

      {/* Modal */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl w-96 relative shadow-lg">
            <button onClick={fecharModal} className="absolute top-2 right-2 font-bold text-xl text-gray-600 hover:text-gray-900">×</button>
            <h2 className="text-2xl font-bold mb-4 text-[#F06292]">Pré-inscrição: {escolinhaSelecionada}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input type="text" placeholder="Nome" value={formData.nome} onChange={e => setFormData({...formData, nome:e.target.value})} required className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F06292]" />
              <input type="number" placeholder="Idade" value={formData.idade} onChange={e => setFormData({...formData, idade:e.target.value})} required className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F06292]" />
              <input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email:e.target.value})} required className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F06292]" />
              <input type="tel" placeholder="Telefone" value={formData.telefone} onChange={e => setFormData({...formData, telefone:e.target.value})} required className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F06292]" />
              <button type="submit" className="py-2 px-4 bg-gradient-to-r from-[#F06292] to-[#E65A7F] text-white rounded-full hover:from-[#E65A7F] hover:to-[#F06292] transition transform hover:scale-105 mt-2">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Escolinhas;
