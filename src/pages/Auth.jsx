import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Lock } from 'lucide-react';

const Auth = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const isClient = type === 'client';
  const roleTitle = isClient ? 'Cliente' : 'Profissional';
  const roleColor = isClient ? 'text-blue-600' : 'text-green-600';
  const btnColor = isClient ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700';

  // Função apenas para LOGIN
 const handleLogin = (e) => {
    e.preventDefault();
    if (isClient) {
        navigate('/dashboard'); // Cliente vai para o Dashboard de busca
    } else {
        alert("Painel do Autônomo em construção..."); 
    }
  };

  // Função que direciona para as telas de cadastro completas
  const handleRegisterRedirect = () => {
    if (isClient) {
      navigate('/register-client'); // Vai direto para a tela do Cliente
    } else {
      navigate('/onboarding'); // Vai direto para a tela do Autônomo
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <Link to="/" className="absolute top-8 left-8 flex items-center text-gray-500 hover:text-gray-800 transition">
        <ArrowLeft size={20} className="mr-2" /> Voltar para Home
      </Link>

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md animate-fadeIn">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Bem-vindo</h2>
          <p className={`font-medium ${roleColor} mt-2 uppercase tracking-wide text-sm`}>
            Login de {roleTitle}
          </p>
        </div>

        {/* Formulário APENAS de Login */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input type="email" placeholder="Email" className="w-full pl-10 p-3 border rounded-lg outline-none focus:border-blue-500 transition" required />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input type="password" placeholder="Senha" className="w-full pl-10 p-3 border rounded-lg outline-none focus:border-blue-500 transition" required />
          </div>

          <button className={`w-full py-3 text-white font-bold rounded-lg transition transform active:scale-95 ${btnColor}`}>
            Entrar
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-600 mb-2">Ainda não tem uma conta?</p>
          <button 
            onClick={handleRegisterRedirect} 
            className={`font-bold hover:underline ${roleColor}`}
          >
            Criar conta de {roleTitle} agora
          </button>
        </div>
      </div>
      
      {/* Estilo para animação suave */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Auth;