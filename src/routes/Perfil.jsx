
export default function PerfilEstetico() {
  const profile = {
    name: 'Julia Silva',
    username: '@Julia.silva',
    location: 'São Paulo, Brasil',
    bio: 'Jogadora e apaixonada por futebol ',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
    cover: 'https://images.unsplash.com/photo-1503264116251-35a269479413?w=1500&q=80'
  };

  return (
    <div className="min-h-screen bg-gray-50">
        
      <div className="w-full relative h-56 md:h-72 lg:h-80 bg-gray-200 overflow-hidden">
        <img src={profile.cover} alt="cover" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 -mt-16 md:-mt-20 flex flex-col md:flex-row items-start md:items-end gap-4 relative">
        <img
          src={profile.avatar}
          alt="avatar"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg "
        />
        <div className="md:block">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">{profile.name}</h1>
          <p className="text-sm text-gray-600">{profile.username} • {profile.location}</p>
          <p className="mt-2 text-gray-700 max-w-xl">{profile.bio}</p>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <button className="px-4 py-2 rounded-2xl border shadow-sm text-sm hover:shadow-md">Seguir</button>
          <button className="px-4 py-2 rounded-2xl bg-blue-600 text-white text-sm shadow hover:bg-blue-700">Mensagem</button>
          <button className="px-4 py-2 rounded-2xl border text-sm">Editar Perfil</button>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-2xl shadow-sm p-3 md:p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex items-center gap-2 md:col-span-3">
          <button className="px-3 py-2 rounded-md bg-gray-100">Publicações</button>
          <button className="px-3 py-2 rounded-md">Sobre</button>
          <button className="px-3 py-2 rounded-md">Amigos</button>
          <button className="px-3 py-2 rounded-md">Conexões</button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">

        <aside className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <h3 className="font-semibold mb-2">Sobre</h3>
            <p className="text-sm text-gray-600">{profile.bio}</p>
          </div>
        </aside>

        <main className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <h3 className="font-semibold mb-2">Publicação Exemplo</h3>
            <p className="text-gray-700">Aqui vai o conteúdo da publicação...</p>
          </div>
        </main>
      </div>
    </div>
  );
}
