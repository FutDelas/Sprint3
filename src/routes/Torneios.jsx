import { useState, useEffect } from "react";
 
export default function Torneios({ userEmail }) {
  const encontrosIniciais = [
    {
      id: 1,
      nome: "Torneio de Domingo",
      data: "04/09/2025 - 14:00h",
      local: "Ginásio Central",
      encerrado: true,
      vagas: 20,
      inscritos: 20,
      participantes: [],
    },
    {
      id: 2,
      nome: "Jogo Amistoso de Quarta",
      data: "11/09/2025 - 19:00h",
      local: "Quadra do Bairro",
      encerrado: true,
      vagas: 15,
      inscritos: 15,
      participantes: [],
    },
    {
      id: 3,
      nome: "Desafio de Sábado",
      data: "18/09/2025 - 16:00h",
      local: "Arena Passa a Bola",
      encerrado: false,
      vagas: 25,
      inscritos: 10,
      participantes: [],
    },
    {
      id: 4,
      nome: "Treino Coletivo de Sexta",
      data: "25/09/2025 - 18:30h",
      local: "Quadra Escola Municipal",
      encerrado: false,
      vagas: 30,
      inscritos: 5,
      participantes: [],
    },
  ];
 
  const [encontros, setEncontros] = useState(() => {
    const saved = localStorage.getItem("encontros");
    return saved ? JSON.parse(saved) : encontrosIniciais;
  });
 
  useEffect(() => {
    localStorage.setItem("encontros", JSON.stringify(encontros));
  }, [encontros]);
 
  const confirmarPresenca = (id) => {
    setEncontros((prev) =>
      prev.map((encontro) => {
        if (
          !encontro.encerrado &&
          encontro.inscritos < encontro.vagas &&
          encontro.id === id &&
          !encontro.participantes.includes(userEmail)
        ) {
          return {
            ...encontro,
            inscritos: encontro.inscritos + 1,
            participantes: [...encontro.participantes, userEmail],
          };
        }
        return encontro;
      })
    );
  };
 
  const cancelarPresenca = (nomeEncontro) => {
    setEncontros((prev) =>
      prev.map((encontro) => {
        if (encontro.nome === nomeEncontro) {
          return {
            ...encontro,
            inscritos: encontro.inscritos - 1,
            participantes: encontro.participantes.filter((email) => email !== userEmail),
          };
        }
        return encontro;
      })
    );
  };
 
  return (
    <div className="relative min-h-screen bg-blue-800 flex flex-col items-center justify-center p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#001449,#061013)] opacity-90"></div>
 
      <div className="relative w-full max-w-6xl z-10 space-y-8">
        {/* Hero */}
        <section className="text-center">
          <h1 className="text-3xl font-bold text-white">Não perca os encontros desse mês!</h1>
          <p className="mt-2 text-gray-300">
            Nossos encontros semanais são a chance perfeita para se divertir, praticar e conhecer novas meninas que também amam futebol! Toda semana temos treinos coletivos para todos os níveis. Escolha o encontro que mais combina com você e confirme sua presença para garantir sua vaga!
          </p>
        </section>
 
        {/* Lista de encontros */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {encontros.map((encontro) => {
              const jaInscrito = encontro.participantes.includes(userEmail);
 
              const cardClasses = `
                p-4 border rounded-2xl shadow-lg
                ${encontro.encerrado ? "bg-gray-400 text-gray-700" : "bg-white text-gray-800"}
              `;
 
              return (
                <div key={encontro.id} className={cardClasses}>
                  <h3 className="text-lg font-bold text-[#14001dff]">{encontro.nome}</h3>
                  <p>🗓 {encontro.data}</p>
                  <p>📍 {encontro.local}</p>
                  <p>📊 Vagas: {encontro.inscritos} / {encontro.vagas}</p>
 
                  <button
                    onClick={() =>
                      jaInscrito ? cancelarPresenca(encontro.nome) : confirmarPresenca(encontro.id)
                    }
                    disabled={encontro.encerrado || (!jaInscrito && encontro.inscritos >= encontro.vagas)}
                    className={`mt-3 w-full px-4 py-2 rounded-xl text-white transition ${
                      encontro.encerrado || (!jaInscrito && encontro.inscritos >= encontro.vagas)
                        ? "bg-gray-600 cursor-not-allowed"
                        : jaInscrito
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-[#14001dff] hover:bg-yellow-600"
                    }`}
                  >
                    {encontro.encerrado || (!jaInscrito && encontro.inscritos >= encontro.vagas)
                      ? "Inscrições Encerradas"
                      : jaInscrito
                      ? "Cancelar Inscrição"
                      : "Confirmar Presença"}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
 
 