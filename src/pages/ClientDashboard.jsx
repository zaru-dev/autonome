import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <--- IMPORTANTE: Importamos o hook de navegação
import { 
  Search, MapPin, Star, Filter, Heart, 
  CheckCircle, MessageSquare, Wrench, Zap, Paintbrush, Droplet 
} from 'lucide-react';

const MOCK_PROFESSIONALS = [
  {
    id: 1,
    name: "Carlos Eduardo",
    service: "Eletricista",
    rating: 4.9,
    reviews: 124,
    price: "80,00",
    unit: "hora",
    distance: "1.2 km",
    verified: true,
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=200",
    bio: "Especialista em instalações residenciais e prediais. 15 anos de experiência."
  },
  {
    id: 2,
    name: "Ana Pereira",
    service: "Limpeza / Diarista",
    rating: 5.0,
    reviews: 89,
    price: "150,00",
    unit: "dia",
    distance: "3.5 km",
    verified: true,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    bio: "Limpeza detalhada e organização. Trago meus próprios produtos."
  },
  {
    id: 3,
    name: "Roberto Silva",
    service: "Pedreiro",
    rating: 4.7,
    reviews: 56,
    price: "Combinar",
    unit: "",
    distance: "0.8 km",
    verified: false,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    bio: "Reformas em geral, pisos e revestimentos."
  },
  {
    id: 4,
    name: "Marcos Vinicius",
    service: "Encanador",
    rating: 4.8,
    reviews: 32,
    price: "60,00",
    unit: "visita",
    distance: "5.0 km",
    verified: true,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    bio: "Caça vazamentos e desentupimento 24h."
  },
  {
    id: 5,
    name: "Julia Santos",
    service: "Pintora",
    rating: 5.0,
    reviews: 12,
    price: "25,00",
    unit: "m²",
    distance: "2.1 km",
    verified: true,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    bio: "Pintura decorativa e texturas."
  }
];

const ClientDashboard = () => {
  const navigate = useNavigate(); // <--- ATIVAMOS A NAVEGAÇÃO
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPros = MOCK_PROFESSIONALS.filter(pro => 
    (selectedCategory === "Todos" || pro.service.includes(selectedCategory)) &&
    (pro.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     pro.service.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const categories = [
    { name: "Todos", icon: null },
    { name: "Eletricista", icon: <Zap size={18} /> },
    { name: "Encanador", icon: <Droplet size={18} /> },
    { name: "Pedreiro", icon: <Wrench size={18} /> },
    { name: "Pintor", icon: <Paintbrush size={18} /> },
  ];

  // Função para ir para o perfil
  const handleViewProfile = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Header */}
      <div className="bg-primary px-4 pt-8 pb-12 rounded-b-[2.5rem] shadow-lg">
        <div className="flex justify-between items-center text-white mb-6">
          <div>
            <p className="text-blue-100 text-sm">Olá, Cliente</p>
            <h1 className="text-2xl font-bold">O que precisa hoje?</h1>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
            <span className="font-bold">C</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-2 flex items-center gap-2">
          <MapPin className="text-gray-400 ml-2" size={20} />
          <input 
            type="text" 
            placeholder="Ex: Eletricista em Belém..." 
            className="flex-1 outline-none text-gray-700 p-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-primary text-white p-3 rounded-lg hover:bg-blue-700 transition">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="px-4 -mt-6">
        
        {/* Filtros */}
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button 
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-sm transition
                ${selectedCategory === cat.name 
                  ? 'bg-secondary text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Lista de Profissionais */}
        <div className="mt-4 space-y-4">
          <div className="flex justify-between items-end mb-2">
            <h2 className="font-bold text-gray-800 text-lg">Profissionais Próximos</h2>
            <span className="text-xs text-gray-500">{filteredPros.length} encontrados</span>
          </div>

          {filteredPros.map((pro) => (
            <div 
              key={pro.id} 
              onClick={() => handleViewProfile(pro.id)} // <--- CLIQUE NO CARD INTEIRO
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer"
            >
              <div className="flex gap-4">
                <div className="relative">
                  <img src={pro.image} alt={pro.name} className="w-16 h-16 rounded-xl object-cover" />
                  {pro.verified && (
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-0.5">
                      <CheckCircle className="text-green-500 bg-white rounded-full" size={20} fill="white" />
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-800">{pro.name}</h3>
                    <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-1.5 py-0.5 rounded text-xs font-bold">
                      <Star size={12} fill="currentColor" />
                      {pro.rating}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-500 font-medium">{pro.service}</p>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                    <MapPin size={12} /> {pro.distance} • {pro.reviews} avaliações
                  </div>
                </div>
              </div>

              <hr className="my-3 border-gray-100" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400">A partir de</p>
                  <p className="font-bold text-primary text-lg">
                    R$ {pro.price}
                    {pro.unit && <span className="text-sm text-gray-400 font-normal">/{pro.unit}</span>}
                  </p>
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation(); // Evita conflito de cliques
                    handleViewProfile(pro.id);
                  }}
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-black transition"
                >
                  <MessageSquare size={16} />
                  Ver Perfil
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;