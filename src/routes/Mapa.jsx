import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Mapa = () => {
  return (
    <div className="min-h-screen bg-blue-800 flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Fundo gradiente */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#001449,#061013)] opacity-90"></div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-6 w-full max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-6">
          🗺️ Mapa de Peneiras
        </h1>
        <p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto">
          Veja onde estão as peneiras e eventos perto de você.</p>
        <p className="text-xs text-pink-800 mb-6 max-w-3xl mx-auto">
          Clique nos marcadores para mais informações!</p>

        {/* Mapa com Leaflet */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-800">
          <MapContainer
            center={[-23.5505, -46.6333]} // Posição inicial (São Paulo)
            zoom={12}
            scrollWheelZoom={true}
            className="h-[500px] w-full"
          >
            {/* TileLayer = fundo do mapa */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contribuidores'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Marcadores de exemplo */}
            <Marker position={[-23.5275, -46.6781]} icon={icon}>
              <Popup>
                <strong>Allianz Parque</strong> <br /> Peneira dia 20/09 às 14h.
              </Popup>
            </Marker>

            <Marker position={[-23.601, -46.657]} icon={icon}>
              <Popup>
                <strong>Centro de Treinamento</strong> <br /> Peneira dia 29/09
                às 9h.
              </Popup>
            </Marker>

            <Marker position={[-23.5455, -46.4746]} icon={icon}>
                <Popup>
                    <strong>Neo Química Arena</strong> <br /> Evento de organizadores dia 02/10 às 10h
                </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Botão de voltar */}
        <button
          onClick={() => window.history.back()}
          className="mt-8 cursor-pointer bg-yellow-600 text-white font-bold py-3 px-6 rounded-full hover:bg-[#14001dff] transition transform hover:scale-105"
        >
          ⬅️ Voltar
        </button>
      </div>
    </div>
  );
};

export default Mapa;
