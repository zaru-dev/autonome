// migrar para um sistema de banco de dados
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Star, MapPin, ShieldCheck, 
  MessageSquare, Share2, Clock, ThumbsUp 
} from 'lucide-react';

const ProfessionalProfile = () => {
  const navigate = useNavigate();

  // Dados fictícios de um profissional
  const pro = {
    name: "Carlos Eduardo",
    service: "Eletricista Residencial",
    rating: 4.9,
    reviews: 124,
    price: "80,00",
    unit: "hora",
    distance: "1.2 km",
    verified: true,
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=400",
    bio: "Especialista em instalações elétricas, troca de fiação e quadros de distribuição. Trabalho com ferramentas de ponta e emito nota fiscal. Garantia de 3 meses em todos os serviços.",
    tags: ["Instalação", "Manutenção", "24 horas", "Residencial"],
    portfolio: [
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1558402529-d2638a7023e9?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&q=80&w=300"
    ],
    comments: [
      { user: "Mariana L.", text: "Muito atencioso e resolveu rápido!", star: 5 },
      { user: "Pedro H.", text: "Preço justo e serviço limpo.", star: 5 }
    ]
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* Imagem de Capa / Header */}
      <div className="relative h-64 bg-gray-200">
        <img src={pro.image} alt="Capa" className="w-full h-full object-cover brightness-75" />
        
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start text-white">
          <button onClick={() => navigate(-1)} className="bg-black/30 p-2 rounded-full hover:bg-black/50 transition">
            <ArrowLeft size={24} />
          </button>
          <button className="bg-black/30 p-2 rounded-full hover:bg-black/50 transition">
            <Share2 size={24} />
          </button>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="relative -mt-10 bg-white rounded-t-[2rem] px-6 pt-10 shadow-xl">
        
        {/* Badge Verificado Flutuante */}
        {pro.verified && (
          <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-white p-1.5 rounded-full shadow-md">
            <ShieldCheck className="text-green-500 w-12 h-12 bg-green-50 rounded-full p-2" />
          </div>
        )}

        {/* Cabeçalho do Perfil */}
        <div className="mb-6">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold text-gray-900">{pro.name}</h1>
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-500">A partir de</span>
              <span className="text-xl font-bold text-primary">R$ {pro.price}</span>
            </div>
          </div>
          <p className="text-gray-500 font-medium">{pro.service}</p>
          
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
            <div className="flex items-center gap-1 text-yellow-500 font-bold">
              <Star size={16} fill="currentColor" /> {pro.rating}
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} /> {pro.distance}
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} /> Seg a Sáb
            </div>
          </div>
        </div>

        <hr className="border-gray-100 mb-6" />

        {/* Sobre */}
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-3">Sobre o profissional</h3>
          <p className="text-gray-600 leading-relaxed text-sm">{pro.bio}</p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {pro.tags.map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Portfólio (Fotos) */}
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-3">Trabalhos Realizados</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {pro.portfolio.map((img, index) => (
              <img key={index} src={img} alt="Trabalho" className="w-32 h-32 rounded-lg object-cover flex-shrink-0" />
            ))}
          </div>
        </div>

        {/* Avaliações */}
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-3">Avaliações ({pro.reviews})</h3>
          <div className="space-y-4">
            {pro.comments.map((comment, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-xl">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-sm">{comment.user}</span>
                  <div className="flex text-yellow-500">
                    {[...Array(comment.star)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Botão Flutuante de Contato */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 flex items-center gap-4">
        <button className="p-3 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200">
          <ThumbsUp size={24} />
        </button>
        <button 
          onClick={() => window.open(`https://wa.me/5511999999999?text=Olá, vi seu perfil no Autonome!`, '_blank')}
          className="flex-1 bg-green-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 shadow-lg active:scale-95 transition"
        >
          <MessageSquare size={20} />
          Chamar no WhatsApp
        </button>
      </div>

    </div>
  );
};

export default ProfessionalProfile;