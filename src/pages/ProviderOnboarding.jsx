import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Camera, Upload, CheckCircle, MapPin, 
  DollarSign, Briefcase, User, FileText, ChevronRight, ArrowLeft 
} from 'lucide-react';

const ProviderOnboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  // Estado para guardar todos os dados
  const [formData, setFormData] = useState({
    nome: '', cpf: '', telefone: '',
    cidade: '', estado: '',
    servicoTipo: '', cobrancaTipo: 'hora', valor: '', pagamentos: [],
    bio: ''
  });

  // Função para simular upload e análise de IA
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsAnalyzing(true);
      // Simula 2 segundos de análise
      setTimeout(() => setIsAnalyzing(false), 2000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // --- RENDERIZAÇÃO DAS ETAPAS ---

  // 1. Dados Pessoais e Localização
  const renderStep1 = () => (
    <div className="space-y-4 animate-fadeIn">
      <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        <User className="text-primary" /> Quem é você?
      </h3>
      
      <div className="grid grid-cols-1 gap-4">
        <input name="nome" placeholder="Nome Completo" className="input-field" onChange={handleInputChange} />
        <div className="grid grid-cols-2 gap-4">
          <input name="cpf" placeholder="CPF" className="input-field" onChange={handleInputChange} />
          <input name="telefone" placeholder="Celular / WhatsApp" className="input-field" onChange={handleInputChange} />
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mt-6">
        <MapPin className="text-primary" /> Onde você atende?
      </h3>
      <div className="grid grid-cols-3 gap-4">
        <input name="cidade" placeholder="Cidade" className="input-field col-span-2" onChange={handleInputChange} />
        <input name="estado" placeholder="UF" className="input-field" onChange={handleInputChange} />
      </div>
    </div>
  );

  // 2. Identidade (Documentos e Selfie)
  const renderStep2 = () => (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-xl font-bold text-gray-800">Verificação de Segurança</h3>
      <p className="text-gray-500 text-sm">Precisamos confirmar que você é você. Isso traz segurança para os clientes.</p>

      {/* Upload RG */}
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-blue-50 transition cursor-pointer relative">
        <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileUpload} />
        <FileText className="mx-auto text-gray-400 mb-2" size={32} />
        <p className="font-medium text-gray-700">Foto do RG (Frente e Verso)</p>
        <p className="text-xs text-gray-400">Clique para enviar</p>
      </div>

      {/* Selfie Check */}
      <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden relative">
          {isAnalyzing ? (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xs font-bold animate-pulse">
              ANALISANDO ROSTO...
            </div>
          ) : (
            <Camera size={32} className="text-gray-400" />
          )}
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
          <Camera className="inline w-4 h-4 mr-2" />
          Tirar Selfie de Verificação
        </button>
      </div>
    </div>
  );

  // 3. Detalhes do Serviço
  const renderStep3 = () => (
    <div className="space-y-4 animate-fadeIn">
      <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        <Briefcase className="text-primary" /> O que você faz?
      </h3>

      <select name="servicoTipo" className="input-field bg-white" onChange={handleInputChange}>
        <option value="">Selecione sua categoria...</option>
        <option value="pedreiro">Pedreiro / Obras</option>
        <option value="encanador">Encanador</option>
        <option value="eletricista">Eletricista</option>
        <option value="pintor">Pintor</option>
        <option value="limpeza">Limpeza / Diarista</option>
      </select>

      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 space-y-3">
        <label className="block text-sm font-bold text-gray-700">Como você cobra?</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="cobrancaTipo" value="hora" defaultChecked /> Por Hora
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="cobrancaTipo" value="fixo" /> Preço Fixo
          </label>
        </div>
        <div className="relative">
          <DollarSign className="absolute left-3 top-3 text-gray-400" size={16} />
          <input type="number" placeholder="Valor (ex: 50,00)" className="input-field pl-10" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Aceita Pagamento via:</label>
        <div className="flex gap-3 flex-wrap">
          {['Pix', 'Dinheiro', 'Cartão Crédito'].map(pay => (
            <span key={pay} className="px-3 py-1 bg-gray-100 rounded-full text-sm border cursor-pointer hover:bg-gray-200">
              {pay}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  // 4. Perfil Público (Bio e Foto)
  const renderStep4 = () => (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-xl font-bold text-gray-800">Seu Perfil no App</h3>
      
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-gray-100 border-4 border-white shadow-lg flex items-center justify-center relative cursor-pointer hover:bg-gray-200 transition group">
           <Upload className="text-gray-400 group-hover:text-primary" />
           <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileUpload} />
        </div>
        <p className="text-sm text-gray-500 mt-2">Toque para adicionar foto de perfil</p>
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-bold text-gray-700">Sua Bio (Apresentação)</label>
        <textarea 
          maxLength={150}
          rows={4}
          name="bio"
          className="input-field resize-none" 
          placeholder="Olá, sou especialista em acabamentos e trabalho na área há 10 anos..."
          onChange={handleInputChange}
        ></textarea>
        <div className="text-right text-xs text-gray-400">
          {formData.bio.length}/150 caracteres
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      {/* Header com Progresso */}
      <div className="w-full max-w-lg mb-8 pt-4">
        <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
          <span className={step >= 1 ? "text-primary" : ""}>Dados</span>
          <span className={step >= 2 ? "text-primary" : ""}>Identidade</span>
          <span className={step >= 3 ? "text-primary" : ""}>Serviço</span>
          <span className={step >= 4 ? "text-primary" : ""}>Perfil</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${step * 25}%` }}
          ></div>
        </div>
      </div>

      {/* Card Principal */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 min-h-[400px] flex flex-col justify-between">
        
        {/* Conteúdo Dinâmico */}
        <div className="mb-6">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
        </div>

        {/* Botões de Navegação */}
        <div className="flex gap-4 pt-4 border-t">
          {step > 1 && (
            <button 
              onClick={prevStep}
              className="flex-1 py-3 border border-gray-300 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition"
            >
              Voltar
            </button>
          )}
          
          <button 
            onClick={step === 4 ? () => { alert("Perfil enviado para análise!"); navigate('/'); } : nextStep}
            className="flex-1 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
          >
            {step === 4 ? (
              <>Concluir Cadastro <CheckCircle size={20} /></>
            ) : (
              <>Próximo <ChevronRight size={20} /></>
            )}
          </button>
        </div>
      </div>
      
      {/* Estilos CSS Inline para Inputs (Facilitar cópia) */}
      <style>{`
        .input-field {
          width: 100%;
          padding: 12px;
          border-radius: 0.75rem;
          border: 1px solid #e2e8f0;
          outline: none;
          transition: all 0.2s;
        }
        .input-field:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProviderOnboarding;