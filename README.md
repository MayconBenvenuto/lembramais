# 💊 PillTech - Landing Page Porta Comprimidos Digital

Uma landing page moderna e interativa para um dispensador de remédios inteligente com tecnologia de ponta.

## 🚀 Demo Online

Acesse: [https://SEU_USUARIO.github.io/porta-comprimidos/](https://SEU_USUARIO.github.io/porta-comprimidos/) *(substitua SEU_USUARIO pelo seu nome de usuário do GitHub)*

## ✨ Características

- **Design Futurista**: Interface moderna com gradientes e efeitos glassmorphism
- **Dispositivo 3D Interativo**: Modelo 3D do dispensador que pode ser rotacionado por mouse/touch
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Tecnologia Moderna**: Built with React 19, TypeScript, Tailwind CSS, e Vite
- **Animações Suaves**: Transições e efeitos visuais envolventes
- **Backend Integrado**: Convex para funcionalidades futuras

## 🎯 Funcionalidades do Dispositivo 3D

- ✅ **Interação por Arrastar**: Mouse e touch support
- ✅ **Rotação Limitada**: Entre -45° e +45° para experiência natural
- ✅ **Display OLED Simulado**: Mostra horário e próxima dose
- ✅ **7 Compartimentos**: Um para cada dia da semana com cores distintas
- ✅ **Efeitos Visuais**: Partículas flutuantes e brilhos dinâmicos
- ✅ **Feedback Visual**: Cursor e animações respondem à interação

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19** - Framework JavaScript moderno
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool ultrarrápido

### Backend
- **Convex** - Backend-as-a-Service
- **Convex Auth** - Sistema de autenticação

### Deployment
- **GitHub Pages** - Hospedagem gratuita
- **gh-pages** - Deploy automatizado

## 🏃‍♂️ Como Executar Localmente

1. **Clone o repositório:**
```bash
git clone https://github.com/SEU_USUARIO/porta-comprimidos.git
cd porta-comprimidos
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o projeto:**
```bash
npm run dev
```

4. **Acesse:** `http://localhost:5173/`

## 📦 Scripts Disponíveis

- `npm run dev` - Executa frontend + backend em desenvolvimento
- `npm run dev:frontend` - Apenas frontend
- `npm run dev:backend` - Apenas backend Convex
- `npm run build` - Build de produção
- `npm run preview` - Preview do build
- `npm run deploy` - Deploy para GitHub Pages
- `npm run lint` - Verificação de código

## 🌐 Deploy para GitHub Pages

1. **Crie um repositório no GitHub** (público)
2. **Configure o remote:**
```bash
git remote add origin https://github.com/SEU_USUARIO/porta-comprimidos.git
git push -u origin main
```
3. **Faça o deploy:**
```bash
npm run deploy
```
4. **Configure GitHub Pages** (Settings > Pages > Branch: gh-pages)

## 📁 Estrutura do Projeto

```
├── public/
│   └── images/
│       └── dispensador.png    # Imagem do dispositivo
├── src/
│   ├── App.tsx               # Componente principal
│   ├── main.tsx              # Entry point
│   ├── index.css            # Estilos globais
│   └── lib/
│       └── utils.ts         # Utilitários
├── convex/                  # Backend Convex
├── dist/                    # Build de produção
└── deploy-instructions.txt  # Instruções de deploy
```

## 🎨 Componentes Principais

### `Interactive3DDevice`
Componente principal do dispositivo 3D com:
- Rotação interativa via mouse/touch
- Display simulado com horário e status
- Compartimentos coloridos para medicamentos
- Efeitos visuais e animações

### Seções da Landing Page
- **Hero Section** - Apresentação principal com dispositivo 3D
- **Features Section** - Recursos e tecnologias
- **Benefits Section** - Benefícios e estatísticas
- **Technology Section** - Especificações técnicas
- **CTA Section** - Chamada para ação
- **Footer** - Informações e contato

## 🔧 Configurações

### Vite Config
- Base path configurada para GitHub Pages
- Plugins React e otimizações
- Alias `@` para pasta `src`

### Tailwind Config
- Tema customizado com cores da marca
- Gradientes e animações personalizadas
- Responsividade completa

## 📱 Responsividade

- **Desktop**: Experiência completa com animações
- **Tablet**: Layout adaptado mantendo funcionalidades
- **Mobile**: Interface otimizada para touch

## 🌟 Próximas Funcionalidades

- [ ] Integração completa com backend Convex
- [ ] Sistema de autenticação funcional
- [ ] Formulários de contato dinâmicos
- [ ] Dashboard administrativo
- [ ] Integração com APIs médicas
- [ ] Sistema de notificações

## 📄 Licença

Este projeto é uma demonstração educacional desenvolvida para a ETE Dom Bosco.

## 👨‍💻 Desenvolvido por

**Maycon** - ETE Dom Bosco  
*Com assistência de GitHub Copilot*

---

⭐ **Não esqueça de dar uma estrela se gostou do projeto!**
