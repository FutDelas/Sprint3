// CanalDosPais.jsx
import { useForm } from "react-hook-form";

const CanalDosPais = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Formulário enviado:", data);
    alert("Mensagem enviada com sucesso!");
    reset();
  };

  return (
    <div className="min-h-screen bg-[#01183c]">
      <h1 className="text-3xl font-bold text-center mb-6 text-neutral-50 pt-6">
        Canal dos Pais e Responsáveis
      </h1>
      <div className="m-10 mt">
      {/* Seção Saúde Física e Emocional */}
      <section className="bg-purple-800 rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-semibold text-white mb-3">
          Cuidados com a Saúde Física e Emocional
        </h2>
        <p className="text-black">
          Incentivar hábitos saudáveis, boa alimentação e acompanhamento médico
          regular são fundamentais. Além disso, oferecer apoio emocional,
          escutando e respeitando os sentimentos dos jovens atletas, contribui
          para seu desenvolvimento equilibrado.
        </p>
      </section>

      {/* Seção Fair Play */}
      <section className="bg-fuchsia-700 shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-semibold text-white mb-3">
          Orientações sobre Fair Play
        </h2>
        <ul className="list-disc list-inside text-black space-y-2">
          <li>Respeitar árbitros, técnicos, colegas e adversários.</li>
          <li>Evitar atitudes negativas, como xingamentos ou discussões.</li>
          <li>Valorizar o esforço mais do que apenas o resultado.</li>
          <li>Ser exemplo de incentivo e positividade nas arquibancadas.</li>
        </ul>
      </section>

      {/* Seção FAQ */}
      <section className="bg-purple-800 shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-semibold text-white mb-3">
          FAQ - Dúvidas Frequentes
        </h2>
        <div className="space-y-4">
          <details className="border rounded-lg p-3">
            <summary className="cursor-pointer font-semibold text-black">
              Como avisar sobre a ausência do meu filho(a)?
            </summary>
            <p className="text-black mt-2">
              Basta preencher o formulário abaixo ou entrar em contato com o
              técnico responsável.
            </p>
          </details>

          <details className="border rounded-lg p-3">
            <summary className="cursor-pointer font-semibold text-black">
              O que fazer em caso de lesão?
            </summary>
            <p className="text-black mt-2">
              Procure atendimento médico imediatamente e informe a equipe para
              orientações adequadas.
            </p>
          </details>
        </div>
      </section>

      {/* Seção Formulário */}
      <section className="bg-fuchsia-700 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-white mb-3">
          Envie suas sugestões, críticas ou avisos
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Seu nome"
            {...register("nome", { required: true })}
            className="w-full border rounded-lg p-2"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            {...register("email", { required: true })}
            className="w-full border rounded-lg p-2"
          />
          <textarea
            placeholder="Escreva sua mensagem..."
            {...register("mensagem", { required: true })}
            className="w-full border rounded-lg p-2"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-800 hover:bg-purple-900 text-white font-semibold px-4 py-2 rounded-lg"
          >
            Enviar
          </button>
        </form>
      </section>
      </div>
    </div>
  );
};

export default CanalDosPais;
