import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, Mail, Lock, MapPin, Phone, 
  Camera, ShieldCheck, Upload, ArrowLeft 
} from 'lucide-react';

const ClientRegistration = () => {
  const navigate = useNavigate();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  
  // Estado para a foto de perfil (apenas visualização)
  const [profilePreview, setProfilePreview] = useState(null);

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleIdentityCheck = () => {
    setIsAnalyzing(true);
    // Simula análise de IA por 2.5 segundos
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsVerified(true);
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isVerified) {
      alert("Por favor, faça a verificação de identidade antes de continuar.");
      return;
    }
    alert("Cadastro de Cliente realizado com sucesso!");
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden relative">
        
        {/* Header / Botão Voltar */}
        <button onClick={() => navigate('/auth/client')} className="absolute top-4 left-4 text-gray-500 hover:text-primary transition z-10">
          <ArrowLeft size={24} />
        </button>

        {/* Topo com Foto de Perfil */}
        <div className="bg-blue-600 p-8 pt-12 text-center text-white relative">
          <h2 className="text-2xl font-bold mb-2">Criar conta Cliente</h2>
          <p className="text-blue-100 text-sm mb-6">Preencha seus dados para encontrar profissionais.</p>
          
          {/* Área da Foto de Perfil */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="relative group cursor-pointer">
              <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-md flex items-center justify-center">
                {profilePreview ? (
                  <img src={profilePreview} alt="Perfil" className="w-full h-full object-cover" />
                ) : (
                  <User size={40} className="text-gray-400" />
                )}
              </div>
              <div className="absolute bottom-0 right-0 bg-green-500 p-1.5 rounded-full text-white border-2 border-white shadow-sm">
                <Upload size={14} />
              </div>
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleProfileUpload} />
            </div>
          </div>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="px-8 pt-16 pb-8 space-y-6">
          
          {/* Dados Pessoais */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Nome Completo</label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <input type="text" className="input-field pl-10" placeholder="Ex: Maria Silva" required />
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-gray-700 ml-1">CPF</label>
              <div className="relative mt-1">
                <ShieldCheck className="absolute left-3 top-3 text-gray-400" size={18} />
                <input type="text" className="input-field pl-10" placeholder="000.000.000-00" required />
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-gray-700 ml-1">Celular</label>
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                <input type="tel" className="input-field pl-10" placeholder="(00) 00000-0000" required />
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div>
            <label className="text-sm font-bold text-gray-700 ml-1">Onde você precisa de serviço?</label>
            <div className="flex gap-4 mt-1">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                <input type="text" className="input-field pl-10" placeholder="Cidade" required />
              </div>
              <input type="text" className="input-field w-24" placeholder="UF" maxLength={2} required />
            </div>
          </div>

          {/* Login */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-gray-700 ml-1">E-mail</label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input type="email" className="input-field pl-10" placeholder="seu@email.com" required />
              </div>
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 ml-1">Senha</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                <input type="password" className="input-field pl-10" placeholder="******" required />
              </div>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Área de Segurança (Verificação) */}
          <div className={`border-2 rounded-xl p-4 transition-all ${isVerified ? 'border-green-500 bg-green-50' : 'border-blue-100 bg-blue-50'}`}>
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-full ${isVerified ? 'bg-green-100 text-green-600' : 'bg-white text-blue-600 shadow-sm'}`}>
                {isAnalyzing ? <div className="animate-spin w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full"></div> : 
                 isVerified ? <ShieldCheck size={24} /> : <Camera size={24} />}
              </div>
              
              <div className="flex-1">
                <h4 className={`font-bold ${isVerified ? 'text-green-800' : 'text-blue-900'}`}>
                  {isVerified ? 'Identidade Verificada' : isAnalyzing ? 'Analisando biometria...' : 'Verificação de Segurança'}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {isVerified 
                    ? 'Seu perfil recebeu o selo de verificado!' 
                    : 'Para sua segurança e dos profissionais, precisamos validar seu rosto.'}
                </p>
                
                {!isVerified && !isAnalyzing && (
                  <button 
                    type="button" 
                    onClick={handleIdentityCheck}
                    className="mt-3 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                  >
                    Tirar Selfie de Validação
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Botão Final */}
          <button 
            type="submit" 
            className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition transform active:scale-95 ${isVerified ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
          >
            Concluir Cadastro
          </button>

        </form>
      </div>

      <style>{`
        .input-field {
          width: 100%;
          padding: 12px;
          border-radius: 0.5rem;
          border: 1px solid #e2e8f0;
          outline: none;
          transition: all 0.2s;
        }
        .input-field:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
      `}</style>
    </div>
  );
};

export default ClientRegistration;