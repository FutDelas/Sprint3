// src/pages/Escolinhas.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Escolinhas = () => {
  const navigate = useNavigate();
  const [busca, setBusca] = useState("");
  const [filtroFaixa, setFiltroFaixa] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [escolinhaSelecionada, setEscolinhaSelecionada] = useState("");

  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    email: "",
    telefone: "",
  });

  const escolinhas = [
    {
      nome: "Escolinha Bola de Ouro",
      local: "Centro - São Paulo",
      faixa: "8 a 15 anos",
      dias: "Segunda e Quarta",
      horario: "18h - 19h30",
      fotos: ["https://source.unsplash.com/400x250/?soccer", "https://source.unsplash.com/400x250/?football-training"],
    },
    {
      nome: "Academia Estrelas",
      local: "Vila Olímpica - Rio de Janeiro",
      faixa: "10 a 18 anos",
      dias: "Terça e Quinta",
      horario: "16h - 17h30",
      fotos: ["https://source.unsplash.com/400x250/?soccer-girls", "https://source.unsplash.com/400x250/?soccer-field"],
    },
    {
      nome: "Futuro Feminino",
      local: "Bairro Industrial - Belo Horizonte",
      faixa: "6 a 14 anos",
      dias: "Sábado",
      horario: "09h - 11h",
      fotos: ["https://source.unsplash.com/400x250/?soccer-training", "https://source.unsplash.com/400x250/?football"],
    },
    {
      nome: "Chuteiras de Ouro",
      local: "Zona Sul - São Paulo",
      faixa: "7 a 16 anos",
      dias: "Segunda, Quarta e Sexta",
      horario: "17h - 18h30",
      fotos: ["https://source.unsplash.com/400x250/?soccer-kids", "https://source.unsplash.com/400x250/?girls-football"],
    },
    {
      nome: "Estrelas do Futuro",
      local: "Centro - Rio de Janeiro",
      faixa: "9 a 15 anos",
      dias: "Terça e Quinta",
      horario: "15h - 16h30",
      fotos: ["https://source.unsplash.com/400x250/?soccer-team", "https://source.unsplash.com/400x250/?football-training"],
    },
    {
      nome: "Garotas em Campo",
      local: "Belo Horizonte",
      faixa: "8 a 14 anos",
      dias: "Sábado",
      horario: "10h - 12h",
      fotos: ["https://source.unsplash.com/400x250/?girls-soccer", "https://source.unsplash.com/400x250/?football-field"],
    },
  ];

  const filtradas = escolinhas.filter((e) => {
    const texto = (e.nome + e.local).toLowerCase();
    const buscaMatch = texto.includes(busca.toLowerCase());
    const filtroMatch = filtroFaixa ? e.faixa.includes(filtroFaixa) : true;
    return buscaMatch && filtroMatch;
  });

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
    alert(`Pré-inscrição enviada para ${escolinhaSelecionada}!\nDados:\nNome: ${formData.nome}\nIdade: ${formData.idade}\nEmail: ${formData.email}\nTelefone: ${formData.telefone}`);
    fecharModal();
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* TÍTULO */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{ color: "#F06292" }}>
          Escolinhas de Futebol
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-10" style={{ color: "#0A192F" }}>
          Encontre uma escolinha perto de você e faça sua pré-inscrição!
        </p>

        {/* LAYOUT: COLUNA FILTROS À ESQUERDA E CARDS À DIREITA */}
        <div className="md:flex gap-8">
          {/* COLUNA DE FILTROS */}
          <div className="md:w-1/4 mb-6 md:mb-0">
            <div className="bg-[#FFF3F6] p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-4" style={{ color: "#F06292" }}>Filtros</h3>
              <input
                type="text"
                placeholder="Buscar por cidade ou nome..."
                className="p-3 rounded-xl border border-gray-300 w-full mb-4"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
              <select
                className="p-3 rounded-xl border border-gray-300 w-full"
                value={filtroFaixa}
                onChange={(e) => setFiltroFaixa(e.target.value)}
              >
                <option value="">Todas as idades</option>
                <option value="6 a 14 anos">6 a 14 anos</option>
                <option value="7 a 16 anos">7 a 16 anos</option>
                <option value="8 a 14 anos">8 a 14 anos</option>
                <option value="8 a 15 anos">8 a 15 anos</option>
                <option value="9 a 15 anos">9 a 15 anos</option>
                <option value="10 a 18 anos">10 a 18 anos</option>
              </select>
            </div>
          </div>

          {/* COLUNA DE CARDS */}
          <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filtradas.map((e, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition transform hover:scale-105 border-l-4 border-[#F06292]">
                <h3 className="text-xl font-bold mb-2" style={{ color: "#F06292" }}>{e.nome}</h3>
                <p className="mb-1">📍 {e.local}</p>
                <p className="mb-1">👧 Faixa etária: {e.faixa}</p>
                <p className="mb-1">📅 {e.dias}</p>
                <p className="mb-4">⏰ {e.horario}</p>

                {/* GALERIA DE FOTOS */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {e.fotos.map((foto, idx) => (
                    <img
                      key={idx}
                      src={foto}
                      alt="foto da escolinha"
                      className="rounded-xl object-cover h-28 w-full"
                    />
                  ))}
                </div>

                <button
                  onClick={() => abrirFormulario(e.nome)}
                  className="w-full py-2 px-4 rounded-full transition hover:scale-105"
                  style={{ backgroundColor: "#F06292", color: "#FFFFFF" }}
                >
                  Pré-Inscrever
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* MODAL DE PRÉ-INSCRIÇÃO */}
        {modalAberto && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl p-6 w-11/12 md:w-1/2 relative shadow-lg">
              <button
                onClick={fecharModal}
                className="absolute top-4 right-4 text-gray-500 font-bold text-xl"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#F06292" }}>
                Pré-inscrição para {escolinhaSelecionada}
              </h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Nome da atleta"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  className="p-3 rounded-xl border border-gray-300"
                />
                <input
                  type="number"
                  placeholder="Idade"
                  required
                  value={formData.idade}
                  onChange={(e) => setFormData({...formData, idade: e.target.value})}
                  className="p-3 rounded-xl border border-gray-300"
                />
                <input
                  type="email"
                  placeholder="E-mail do responsável"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="p-3 rounded-xl border border-gray-300"
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  required
                  value={formData.telefone}
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                  className="p-3 rounded-xl border border-gray-300"
                />
                <button
                  type="submit"
                  className="py-3 px-6 rounded-full transition hover:scale-105"
                  style={{ backgroundColor: "#F06292", color: "#FFFFFF" }}
                >
                  Enviar Pré-Inscrição
                </button>
              </form>
            </div>
          </div>
        )}

        {/* BOTÃO VOLTAR */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate(-1)}
            className="py-3 px-6 rounded-full transition hover:scale-105"
            style={{ backgroundColor: "#0A192F", color: "#FFFFFF" }}
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Escolinhas;
