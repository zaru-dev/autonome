import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Wrench } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-primary tracking-tight">Autonome</h1>
          <p className="text-xl text-secondary">A solução certa, na hora que você precisa.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Opção Cliente */}
          <button 
            onClick={() => navigate('/auth/client')}
            className="group flex flex-col items-center p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary cursor-pointer"
          >
            <div className="p-4 bg-blue-100 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <User size={48} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Sou Cliente</h2>
            <p className="text-gray-500">Preciso encontrar um profissional.</p>
          </button>

          {/* Opção Autônomo */}
          <button 
            onClick={() => navigate('/auth/provider')}
            className="group flex flex-col items-center p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-green-500 cursor-pointer"
          >
            <div className="p-4 bg-green-100 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <Wrench size={48} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Sou Autônomo</h2>
            <p className="text-gray-500">Quero oferecer meus serviços.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;