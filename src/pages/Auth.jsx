import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // Adicionado useNavigate
import { ArrowLeft, Mail, Lock, User } from 'lucide-react';

const Auth = () => {
  const { type } = useParams();
  const navigate = useNavigate(); // Adicionado o hook aqui
  const [isLogin, setIsLogin] = useState(true);

  const isClient = type === 'client';
  const roleTitle = isClient ? 'Cliente' : 'Profissional';
  const roleColor = isClient ? 'text-blue-600' : 'text-green-600';
  const btnColor = isClient ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700';

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isLogin && !isClient) {
      // Se for cadastro de AUTÔNOMO, vai para o onboarding
      navigate('/onboarding');
    } else {
      // Login normal ou Cliente
      alert(`Enviando dados de ${isLogin ? 'Login' : 'Cadastro'} para ${roleTitle}...`);
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Link to="/" className="absolute top-8 left-8 flex items-center text-gray-500 hover:text-gray-800 transition">
        <ArrowLeft size={20} className="mr-2" /> Voltar
      </Link>

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            {isLogin ? 'Bem-vindo' : 'Crie sua conta'}
          </h2>
          <p className={`font-medium ${roleColor} mt-2 uppercase tracking-wide text-sm`}>
            Área do {roleTitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={20} />
              <input type="text" placeholder="Nome Completo" className="w-full pl-10 p-3 border rounded-lg outline-none focus:border-blue-500" required />
            </div>
          )}
          
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input type="email" placeholder="Email" className="w-full pl-10 p-3 border rounded-lg outline-none focus:border-blue-500" required />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input type="password" placeholder="Senha" className="w-full pl-10 p-3 border rounded-lg outline-none focus:border-blue-500" required />
          </div>

          <button className={`w-full py-3 text-white font-bold rounded-lg transition ${btnColor}`}>
            {isLogin ? 'Entrar' : 'Cadastrar'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <button onClick={() => setIsLogin(!isLogin)} className="font-bold hover:underline">
            {isLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Faça Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;