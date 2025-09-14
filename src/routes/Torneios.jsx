import { useState, useEffect } from "react";

export default function Encontros() {
  const encontrosPadrao = [
    {
      id: 1,
      titulo: "Encontro no Estádio Municipal",
      data: "18/09 às 20h - 23h",
      local: "Estádio Municipal",
      vagas: 20,
      inscritos: 0,
      participantes: [],
    },
    {
      id: 2,
      titulo: "Encontro no Centro de Treinamento",
      data: "05/10 às 09h",
      local: "Centro de Treinamento",
      vagas: 15,
      inscritos: 0,
      participantes: [],
    },
    {
      id: 3,
      titulo: "Encontro na Arena",
      data: "12/10 às 10h",
      local: "Arena Municipal",
      vagas: 25,
      inscritos: 0,
      participantes: [],
    },
  ];

  const [encontros, setEncontros] = useState(encontrosPadrao);
  const [modalAberto, setModalAberto] = useState(false);
  const [encontroSelecionado, setEncontroSelecionado] = useState(null);
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    email: "",
    whatsapp: "",
    nivel: "",
  });

  // Carrega dados do localStorage
  useEffect(() => {
    try {
      const salvos = localStorage.getItem("encontros");
      if (salvos) {
        setEncontros(JSON.parse(salvos));
      }
    } catch {
      setEncontros(encontrosPadrao);
    }
  }, []);

  // Salva alterações
  useEffect(() => {
    localStorage.setItem("encontros", JSON.stringify(encontros));
  }, [encontros]);

  const abrirModal = (encontro) => {
    setEncontroSelecionado(encontro);
    setModalAberto(true);
  };

  const confirmarPresenca = () => {
    if (!form.nome || !form.email) {
      alert("Preencha nome e e-mail para confirmar a inscrição.");
      return;
    }

    setEncontros((prev) =>
      prev.map((e) =>
        e.id === encontroSelecionado.id && e.inscritos < e.vagas
          ? {
              ...e,
              inscritos: e.inscritos + 1,
              participantes: [
                ...e.participantes,
                {
                  nome: form.nome,
                  idade: form.idade,
                  email: form.email,
                  whatsapp: form.whatsapp,
                  nivel: form.nivel,
                },
              ],
            }
          : e
      )
    );

    setForm({ nome: "", idade: "", email: "", whatsapp: "", nivel: "" });
    setModalAberto(false);
  };

  const cancelarPresenca = (encontroId, email) => {
    setEncontros((prev) =>
      prev.map((e) =>
        e.id === encontroId
          ? {
              ...e,
              inscritos: e.inscritos - 1,
              participantes: e.participantes.filter(
                (p) => p.email !== email
              ),
            }
          : e
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#F4F0F8] p-6">
      <h1 className="text-3xl font-bold text-center text-[#14001dff] mb-6">
        Encontros FutDelas
      </h1>

      <p className="text-center max-w-xl mx-auto text-lg mb-8">
        Os <strong>Encontros FutDelas</strong> são para{" "}
        <strong>mulheres de todas as idades</strong> que querem jogar futebol,
        se divertir e aprender juntas. Escolha um encontro abaixo e confirme
        sua presença!
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {encontros.map((encontro) => {
          const jaInscrito = encontro.participantes.some(
            (p) => p.email === form.email
          );
          const lotado = encontro.inscritos >= encontro.vagas;

          return (
            <div
              key={encontro.id}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center"
            >
              <h2 className="text-xl font-semibold">{encontro.titulo}</h2>
              <p className="text-gray-600">{encontro.data}</p>
              <p className="text-gray-600">{encontro.local}</p>
              <p className="mt-2 text-sm">
                Vagas: {encontro.inscritos}/{encontro.vagas}
              </p>

              <button
                onClick={() =>
                  jaInscrito
                    ? cancelarPresenca(encontro.id, form.email)
                    : abrirModal(encontro)
                }
                className={`mt-4 px-4 py-2 rounded-xl ${
                  lotado && !jaInscrito
                    ? "bg-gray-400 cursor-not-allowed"
                    : jaInscrito
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-pink-600 hover:bg-pink-700 text-white"
                }`}
                disabled={lotado && !jaInscrito}
              >
                {jaInscrito
                  ? "Cancelar inscrição"
                  : lotado
                  ? "Lotado"
                  : "Quero Participar"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Modal de inscrição */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold text-[#14001dff] mb-4">
              Ficha de Inscrição
            </h2>

            <input
              type="text"
              placeholder="Nome completo"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="w-full mb-3 p-2 border rounded"
            />

            <input
              type="number"
              placeholder="Idade"
              value={form.idade}
              onChange={(e) => setForm({ ...form, idade: e.target.value })}
              className="w-full mb-3 p-2 border rounded"
            />

            <input
              type="email"
              placeholder="Seu e-mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mb-3 p-2 border rounded"
            />

            <input
              type="tel"
              placeholder="WhatsApp (opcional)"
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              className="w-full mb-3 p-2 border rounded"
            />

            <select
              value={form.nivel}
              onChange={(e) => setForm({ ...form, nivel: e.target.value })}
              className="w-full mb-3 p-2 border rounded"
            >
              <option value="">Nível de jogo (opcional)</option>
              <option value="iniciante">Iniciante</option>
              <option value="intermediaria">Intermediária</option>
              <option value="avancada">Avançada</option>
            </select>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setModalAberto(false)}
                className="px-4 py-2 rounded-xl bg-gray-300 hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarPresenca}
                className="px-4 py-2 rounded-xl bg-pink-600 text-white hover:bg-pink-700"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
