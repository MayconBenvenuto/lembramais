import { useState, useEffect, useRef } from "react";
import dispensadorImage from '/images/dispensador.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Rainbow Flash Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Main Rainbow Glow */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-red-500/20 via-yellow-500/20 via-green-500/20 via-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/15 via-pink-500/15 via-red-500/15 via-orange-500/15 to-yellow-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Rainbow Flash Streaks */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500/30 via-orange-500/30 via-yellow-500/30 via-green-500/30 via-blue-500/30 via-indigo-500/30 to-purple-500/30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-purple-500/20 via-blue-500/20 via-green-500/20 via-yellow-500/20 to-red-500/20 animate-pulse delay-500"></div>
        
        {/* Rainbow Particles */}
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping delay-1500"></div>
      </div>      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/90 backdrop-blur-xl border-b border-white/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-white/20">
                  <span className="text-black font-bold text-xl">L+</span>
                </div>
              </div><span className="text-2xl font-bold text-white">
                Lembra+
              </span>
            </div>            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#features">Recursos</NavLink>
              <NavLink href="#videos">Demonstração</NavLink>
              <NavLink href="#benefits">Benefícios</NavLink>
              <NavLink href="#tech">Tecnologia</NavLink>
              <NavLink href="#contact">Contato</NavLink>
              <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gradient-to-r hover:from-red-500 hover:via-yellow-500 hover:via-green-500 hover:via-blue-500 hover:via-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                Solicitar Demo
              </button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>

          {isMenuOpen && (            <div className="md:hidden py-4 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                <NavLink href="#features">Recursos</NavLink>
                <NavLink href="#videos">Demonstração</NavLink>
                <NavLink href="#benefits">Benefícios</NavLink>
                <NavLink href="#tech">Tecnologia</NavLink>
                <NavLink href="#contact">Contato</NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8 z-10 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-white/30">
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-white">Lançamento Oficial</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
                Lembra+
                <span className="block bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                  Cuidado Inteligente
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                O compartimento inteligente que acende no horário certo para lembrar você de tomar seus medicamentos. 
                Conectado ao seu celular para maior autonomia e segurança.
              </p>
            </div>            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="group bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-gradient-to-r hover:from-red-500 hover:via-yellow-500 hover:via-green-500 hover:via-blue-500 hover:via-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
                <span className="flex items-center justify-center space-x-2">
                  <span>Explorar Agora</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>              <button className="border-2 border-white/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                <a href="#videos">Ver Demonstração</a>
              </button>
            </div><div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 lg:pt-8 max-w-md mx-auto lg:max-w-none lg:mx-0">
              <StatCard number="7" label="Dias" />
              <StatCard number="30" label="Dias Bateria" />
              <StatCard number="LED" label="Inteligente" />
            </div>
          </div>          {/* 3D Interactive Device */}
          <div className="relative z-10 order-first lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-yellow-500/10 via-green-500/10 via-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-2xl lg:rounded-3xl blur-3xl animate-pulse"></div>
              <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20">
                <Interactive3DDevice />
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Features Section */}
      <section id="features" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-white/30">
              <span className="text-xs sm:text-sm font-medium text-white">Recursos Avançados</span>
            </div>            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold px-4 text-white">
              Tecnologia que
              <span className="block bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Cuida com Carinho
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4">
              Funcionalidades pensadas especialmente para promover autonomia e segurança na medicação
            </p>
          </div>          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">            <FeatureCard
              icon="💡"
              title="Sinal Luminoso Inteligente"
              description="O compartimento acende automaticamente no horário correto para lembrar você de tomar seus medicamentos."
            />            <FeatureCard
              icon="⏰"
              title="Lembretes Programáveis"
              description="Configure diferentes horários para diversos medicamentos ao longo do dia com facilidade."
            />            <FeatureCard
              icon="👥"
              title="Cuidado Familiar"
              description="Familiares e cuidadores podem observar visualmente se o medicamento foi tomado."
            />            <FeatureCard
              icon="🔋"
              title="Bateria Duradoura"
              description="Autonomia de longa duração com indicador visual de bateria baixa no próprio dispositivo."
            />            <FeatureCard
              icon="📊"
              title="Controle Visual"
              description="Acompanhe facilmente quais medicamentos já foram tomados através dos indicadores visuais."
            />
          </div>
        </div>
      </section>      {/* Video Demo Section */}
      <section id="videos" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-white/30">
              <span className="text-xs sm:text-sm font-medium text-white">Demonstração</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold px-4 text-white">
              Veja o Lembra+
              <span className="block bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                em Ação
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4">
              Acompanhe como o dispensador funciona na prática e como é fácil de usar no dia a dia
            </p>
          </div><div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">            <VideoPlayer
              src="./videos/exemplos (1).mp4"
              title="Demonstração do LED Inteligente"
              description="Veja como o compartimento acende automaticamente no horário programado para lembrar da medicação."
            />            <VideoPlayer
              src="./videos/exemplos (2).mp4"
              title="Configuração e Uso"
              description="Demonstração de como configurar horários e usar o dispositivo no dia a dia."
            />
          </div>
        </div>
      </section>      {/* Benefits Section */}
      <section id="benefits" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-8 sm:space-y-12 order-2 lg:order-1">            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-white/30">
                <span className="text-xs sm:text-sm font-medium text-white">Resultados Comprovados</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold px-4 lg:px-0 text-white">
                Melhore sua
                <span className="block bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  Qualidade de Vida
                </span>
              </h2>
            </div><div className="space-y-6 sm:space-y-8">
              <BenefitItem
                percentage="85%"
                title="Redução de Esquecimentos"
                description="Usuários relatam melhora significativa na lembrança dos horários de medicação"
              />
              <BenefitItem
                percentage="78%"
                title="Maior Autonomia"
                description="Idosos sentem-se mais independentes no cuidado com a própria saúde"
              />
              <BenefitItem
                percentage="92%"
                title="Tranquilidade Familiar"
                description="Familiares ficam mais tranquilos sabendo que há um lembrete ativo"
              />
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-2xl lg:rounded-3xl blur-2xl lg:blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">                <MetricCard
                  label="Taxa de Precisão"
                  value="99.97%"
                  color="green"
                  trend="+2.3% neste mês"
                /><MetricCard
                  label="Tempo de Resposta"
                  value="Instantâneo"
                  color="green"
                  trend="LED acende na hora"
                />
                <MetricCard
                  label="Facilidade de Uso"
                  value="9.2/10"
                  color="blue"
                  trend="Avaliação dos usuários"
                />
                <MetricCard
                  label="Satisfação"
                  value="4.7/5"
                  color="purple"
                  trend="Terceira idade aprova"
                />
              </div>
              <div className="mt-3 sm:mt-4 lg:mt-6 grid grid-cols-1 gap-3 sm:gap-4 lg:gap-6">
                <MetricCard
                  label="Conectividade"
                  value="98%"
                  color="orange"
                  trend="App sempre conectado"
                />
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Technology Section */}
      <section id="tech" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-white/20">
              <span className="text-xs sm:text-sm font-medium">Especificações Técnicas</span>
            </div>            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold px-4">
              Tecnologia
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Inteligente
              </span>
            </h2>
          </div>          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">            <TechCard
              title="LED Indicador"
              value="Luz Inteligente"
              icon="💡"
              description="Acende automaticamente no horário da medicação"
            />
            <TechCard
              title="Compartimentos"
              value="7 Divisões"
              icon="📦"
              description="Um para cada dia da semana"
            />            <TechCard
              title="Conectividade"
              value="Bluetooth"
              icon="📡"
              description="Conexão opcional para configurações avançadas"
            />
            <TechCard
              title="Bateria"
              value="30 dias"
              icon="🔋"
              description="Longa duração com carregamento USB"
            />
            <TechCard
              title="Material"
              value="Plástico Atóxico"
              icon="🛡️"
              description="Seguro para contato com medicamentos"
            />            <TechCard
              title="Interface"
              value="LED + Botões"
              icon="🎛️"
              description="Controle simples e intuitivo no próprio dispositivo"
            /><TechCard
              title="Notificações"
              value="Push + SMS"
              icon="🔔"
              description="Lembretes múltiplos configuráveis"
            />
            <TechCard
              title="Garantia"
              value="2 anos"
              icon="✅"
              description="Suporte técnico incluído"
            />
          </div>
        </div>
      </section>      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium">Disponível Agora</span>
              </div>              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold px-4">
                Disponível em
                <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Farmácias
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Adquira o Lembra+ com preço especial de lançamento. Disponível nas principais redes de farmácias do Brasil!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">              <button className="group bg-gradient-to-r from-purple-500 to-cyan-500 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1">
                <span className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <span>Encontrar em Farmácias</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="border-2 border-white/20 backdrop-blur-sm px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Ver Demonstração
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12">
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Disponível nas farmácias</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Garantia de 2 anos</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Footer */}
      <footer id="contact" className="relative border-t border-white/10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">            <div className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">L+</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Lembra+
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed text-center sm:text-left text-sm sm:text-base">
                Tecnologia inteligente para cuidar da sua saúde com carinho e autonomia.
              </p>
              <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
                <SocialIcon />
                <SocialIcon />
                <SocialIcon />
                <SocialIcon />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold">Produto</h3>              <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                <li><a href="#features" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#tech" className="hover:text-white transition-colors">Especificações</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Onde Comprar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manual do Usuário</a></li>
              </ul>
            </div>

            <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold">Suporte</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#videos" className="hover:text-white transition-colors">Demonstrações</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Farmácias Parceiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Garantia</a></li>
              </ul>
            </div>

            <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold">Contato</h3>              <div className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                <p className="flex items-center justify-center sm:justify-start space-x-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-lg shadow-sm">📧</span>
                  <span>contato@lembramais.com.br</span>
                </p>
                <p className="flex items-center justify-center sm:justify-start space-x-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-lg shadow-sm">📞</span>
                  <span>+55 (11) 9999-9999</span>
                </p>
                <p className="flex items-center justify-center sm:justify-start space-x-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-lg shadow-sm">📍</span>
                  <span>São Paulo, Brasil</span>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 sm:mt-16 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2025 Lembra+. Todos os direitos reservados. Tecnologia que cuida com carinho.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
    >
      {children}
    </a>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
        {number}
      </div>
      <div className="text-xs sm:text-sm text-white/70 mt-1">{label}</div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-yellow-500/20 via-green-500/20 via-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl lg:rounded-2xl blur-xl"></div>
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-white/40 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2">        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-xl lg:rounded-2xl flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-6 shadow-lg">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">{title}</h3>
        <p className="text-white/70 leading-relaxed text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
}

function BenefitItem({ percentage, title, description }: {
  percentage: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4 sm:space-x-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 rounded-xl lg:rounded-2xl flex items-center justify-center animate-pulse">
          <span className="text-lg sm:text-xl font-bold text-white">{percentage}</span>
        </div>
      </div>
      <div className="space-y-1 sm:space-y-2">
        <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
        <p className="text-white/70 leading-relaxed text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
}

function MetricCard({ label, value, color, trend }: {
  label: string;
  value: string;
  color: string;
  trend: string;
}) {
  const colorClasses = {
    green: 'from-green-500 to-emerald-500',
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    orange: 'from-orange-500 to-red-500'
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg lg:rounded-xl p-3 sm:p-4">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs sm:text-sm text-gray-400">{label}</span>
        <div className={`w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} rounded-full`}></div>
      </div>
      <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">{value}</div>
      <div className="text-xs text-gray-500">{trend}</div>
    </div>
  );
}

function TechCard({ title, value, icon, description }: {
  title: string;
  value: string;
  icon: string;
  description: string;
}) {
  return (    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg mb-3 sm:mb-4 shadow-lg">
        <span className="text-xl sm:text-2xl">{icon}</span>
      </div>
      <h3 className="font-semibold text-gray-300 mb-2 text-sm sm:text-base">{title}</h3>
      <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <p className="text-xs sm:text-sm text-gray-500">{description}</p>
    </div>
  );
}

function SocialIcon() {
  return (
    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
      <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded"></div>
    </div>
  );
}

function Interactive3DDevice() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;

    setRotation(prev => ({
      x: Math.max(-45, Math.min(45, prev.x - deltaY * 0.5)),
      y: Math.max(-45, Math.min(45, prev.y + deltaX * 0.5))
    }));

    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    const touch = e.touches[0];
    setLastMousePos({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const touch = e.touches[0];
    const deltaX = touch.clientX - lastMousePos.x;
    const deltaY = touch.clientY - lastMousePos.y;    setRotation(prev => ({
      x: Math.max(-45, Math.min(45, prev.x - deltaY * 0.5)),
      y: Math.max(-45, Math.min(45, prev.y + deltaX * 0.5))
    }));

    setLastMousePos({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (    <div className="aspect-square relative overflow-hidden rounded-xl lg:rounded-2xl">
      {/* Interactive Hint */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20">
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-1 text-xs text-gray-300 flex items-center space-x-1 sm:space-x-2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="hidden sm:inline">Arraste</span>
          <span className="sm:hidden">👆</span>
        </div>
      </div>{/* 3D Container */}
      <div 
        className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ perspective: '800px' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          handleMouseUp();
          setIsHovering(false);
        }}
        onMouseEnter={() => setIsHovering(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`relative transition-transform duration-300 ease-out ${isHovering ? 'scale-110' : 'scale-105'}`}
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >          {/* Main Device - Imagem Real */}
          <div className="relative">            {/* Imagem do dispensador real */}
            <div className="w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] mx-auto relative"><img 
                src={dispensadorImage} 
                alt="Dispensador de Medicamentos Lembra+" 
                className="w-full h-full object-contain rounded-2xl lg:rounded-3xl shadow-2xl"
                style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))' }}
                onError={(e) => {
                  console.error('Erro ao carregar imagem:', e);
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
                onLoad={() => console.log('Imagem carregada com sucesso!')}
              />
              
              {/* Overlay com informações interativas */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Display de status no topo */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-xl px-4 py-2 border border-cyan-400/30">
                  <div className="text-center space-y-1">
                    <div className="text-xs text-gray-300 font-medium">PRÓXIMA DOSE</div>
                    <div className="text-lg font-bold text-cyan-400">08:30</div>
                    <div className="flex items-center justify-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">ATIVO</span>
                    </div>
                  </div>
                </div>
                
                {/* Indicadores de compartimentos */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {[
                    { color: 'bg-red-400', active: false },
                    { color: 'bg-orange-400', active: false },
                    { color: 'bg-green-400', active: true },
                    { color: 'bg-teal-400', active: false },
                    { color: 'bg-cyan-400', active: false },
                    { color: 'bg-blue-400', active: false },
                    { color: 'bg-purple-400', active: false }
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className={`w-3 h-3 rounded-full ${item.color} ${item.active ? 'animate-pulse' : 'opacity-60'} border border-white/30`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* 3D Shadow */}
            <div 
              className="absolute inset-0 bg-black/30 blur-xl transform translate-y-8 scale-x-75"
              style={{ transformStyle: 'preserve-3d', transform: 'translateZ(-50px)' }}
            ></div>
          </div>          {/* Interactive Glow Effects - Simplificados */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top glow */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40 animate-pulse"></div>
          </div>

          {/* Floating particles - Reduzidos */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                style={{
                  left: `${30 + (i * 20)}%`,
                  top: `${40 + (i * 10)}%`,
                  animationDelay: `${i * 500}ms`,
                  animationDuration: '3s'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>      {/* Info Panel - Simplificado */}
      <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 bg-black/50 backdrop-blur-sm rounded-lg lg:rounded-xl p-3 sm:p-4 border border-white/20">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
          <div>
            <div className="text-base sm:text-lg font-bold text-cyan-400">7 dias</div>
            <div className="text-xs text-gray-400">Capacidade</div>
          </div>
          <div>
            <div className="text-base sm:text-lg font-bold text-purple-400">Smart</div>
            <div className="text-xs text-gray-400">Display LED</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoPlayer({ src, title, description }: {
  src: string;
  title: string;
  description: string;
}) {
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div 
        className="relative group rounded-xl lg:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-auto rounded-xl lg:rounded-2xl"
          style={{ minHeight: '200px' }}
        />
        
        {/* Overlay Controls */}
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
            <button
              onClick={toggleMute}
              className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-full p-2 sm:p-3 hover:bg-white/10 transition-all duration-300"
              title={isMuted ? 'Ativar som' : 'Desativar som'}
            >
              {isMuted ? (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
          </div>
            {/* Play indicator */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
            <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-1 text-xs text-white flex items-center space-x-1 sm:space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs">DEMO</span>
            </div>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl lg:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="space-y-2 sm:space-y-3">
        <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
}
