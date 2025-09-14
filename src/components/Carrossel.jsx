// Carrossel.jsx
import { useState, useEffect } from "react";
import fotoDepoimento from "../assets/depoimento.jpg"; // imagem importada

// Array de depoimentos
const depoimentos = [
  { nome: "Jogadora 1", texto: "O Passa a Bola mudou minha forma de treinar!", foto: fotoDepoimento },
  { nome: "Jogadora 2", texto: "Encontrei meu primeiro torneio graças ao site.", foto: fotoDepoimento },
  { nome: "Jogadora 3", texto: "Ótima plataforma para jovens atletas.", foto: fotoDepoimento },
];

const Carrossel = ({ fundo = "#5A8CA6" }) => {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((prev) => (prev + 1) % depoimentos.length);
    }, 4000); // muda a cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16" style={{ backgroundColor: fundo }}>
      <h3 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
        Depoimentos
      </h3>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl text-center">
        <img
          src={depoimentos[indice].foto}
          alt={depoimentos[indice].nome}
          className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-4 border-[#FF6F91]"
        />
        <p className="text-lg md:text-xl font-semibold mb-2 text-[#003B5C]">
          "{depoimentos[indice].texto}"
        </p>
        <p className="text-sm md:text-base text-gray-700">{depoimentos[indice].nome}</p>
      </div>
    </section>
  );
};

export default Carrossel;
