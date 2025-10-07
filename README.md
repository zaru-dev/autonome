# 🧩 Autonome

Olá, eu sou **Luiz Felipe Araújo Da Costa**, desenvolvedor e idealizador do projeto **Autonome**.

O **Autonome** é um aplicativo móvel desenvolvido para facilitar a **intermediação segura e rápida de serviços presenciais** entre **profissionais autônomos** e **clientes** que precisam de atendimento urgente.  
O sistema atua como um **intermediário confiável**, conectando prestadores de serviços (como encanadores, pintores, eletricistas e outros) a pessoas ou empresas que necessitam de um profissional imediatamente.

---

## 🚀 Objetivo

O objetivo principal do Autonome é **simplificar a contratação de serviços autônomos** por meio de uma plataforma digital moderna, eficiente e segura.  
Além de promover a **inclusão digital** e a **geração de renda**, o aplicativo busca aumentar a **confiabilidade e a transparência** nas contratações.

---

## 🏗️ Arquitetura e Tecnologias

**Frontend (Aplicativo Móvel):**
- [React Native (Expo)](https://expo.dev/)
- TypeScript
- Supabase Client para React Native

**Backend e Infraestrutura:**
- **[Supabase](https://supabase.com/)** - Plataforma completa Backend-as-a-Service
- **PostgreSQL** - Banco de dados relacional
- **Autenticação Supabase** - Gerenciamento de usuários e segurança
- **Storage Supabase** - Armazenamento de documentos e imagens
- **Row Level Security (RLS)** - Controle de acesso granular

---

## 🗃️ Modelagem do Banco de Dados (Supabase)

O banco de dados no Supabase foi modelado para garantir **integridade, rastreabilidade e escalabilidade**. Abaixo estão as principais entidades:

### 👤 **Usuários (profiles)**
- Integrado com autenticação do Supabase
- Dados básicos: nome, e-mail, telefone, tipo (cliente/autônomo)
- Tabela vinculada ao auth.users

### 🛠️ **Autônomos (autonomos)**
- Informações detalhadas: dados pessoais, endereço, documentos
- Área de atuação, experiência, nível de verificação
- Status da conta (ativo, suspenso, aguardando validação)

### 🧠 **Habilidades e Competências**
- Catálogo de habilidades (ex: encanamento, elétrica, pintura)
- Vinculação de autônomos com níveis de experiência

### 📦 **Pedidos/Contratos (pedidos)**
- Registro de serviços contratados
- Status do pedido (aberto, em andamento, finalizado, cancelado)
- Valor total e datas de criação/atualização

### 📋 **Itens do Pedido e Histórico**
- Detalhamento dos serviços dentro de um pedido
- Rastreabilidade completa de alterações de status

### 💳 **Pagamentos**
- Registro de transações (PIX, cartão, dinheiro)
- Status do pagamento (pendente, pago, falhou)

---

## 📱 Funcionalidades Principais

- ✅ **Cadastro seguro** de usuários e prestadores de serviço
- ✅ **Busca inteligente** por tipo de serviço e localização
- ✅ **Sistema de verificação** em 4 níveis para autônomos
- ✅ **Chat interno** para comunicação direta
- ✅ **Histórico completo** de atendimentos e avaliações
- ✅ **Pagamentos integrados** com múltiplos métodos
- ✅ **Rastreamento em tempo real** do ciclo de serviço

---

## 🔐 Segurança com Supabase

O Supabase oferece uma camada robusta de segurança:

- **Row Level Security (RLS)** - Controle de acesso por linha
- **Autenticação nativa** com e-mail/senha e provedores sociais
- **Armazenamento seguro** de documentos com políticas de acesso
- **API segura** com endpoints protegidos por JWT
- **Backups automáticos** e monitoramento contínuo

---

## 🗂️ Estrutura do Projeto

```
autonome/
│
├── apps/
│   ├── mobile/           → Aplicativo React Native (Expo)
│   └── web/              → Painel administrativo (opcional)
├── packages/
│   ├── supabase/         → Configurações e migrations do Supabase
│   └── shared/           → Código compartilhado
├── docs/                 → Documentação
├── README.md             → Este arquivo
└── .gitignore
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+
- Expo CLI
- Conta no Supabase

### Configuração
1. Clone o repositório
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente do Supabase
4. Execute: `npx expo start`

---

## 💡 Próximos Passos

- [ ] Implementar políticas RLS no Supabase
- [ ] Desenvolver sistema de notificações em tempo real
- [ ] Integrar gateway de pagamento (PIX, cartão)
- [ ] Implementar sistema de avaliações e reviews
- [ ] Desenvolver painel administrativo
- [ ] Publicar na Play Store e App Store

---

## 👨‍💻 Autor

**Luiz Felipe Araújo Da Costa**  
Desenvolvedor Full-Stack e idealizador do projeto Autonome  
📧 [luiz.costa@aluno.uepa.br](mailto:luiz.costa@aluno.uepa.br)  
📍 Paragominas – PA, Brasil  
🎓 Universidade do Estado do Pará (UEPA)

---

## ⚖️ Licença

Este projeto está licenciado sob os termos da **[Licença MIT](./LICENSE)**.

---

## 🧩 Sobre

Este repositório faz parte de um projeto acadêmico e de pesquisa voltado para o **desenvolvimento de soluções tecnológicas de impacto social**.  
O Autonome pretende evoluir como uma ferramenta de apoio ao trabalho autônomo e à conectividade digital no mercado de serviços presenciais.

**Tecnologia:** Supabase + React Native + TypeScript