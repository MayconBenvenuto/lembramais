import { useState, useEffect } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                PillTech
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#features">Recursos</NavLink>
              <NavLink href="#benefits">Benefícios</NavLink>
              <NavLink href="#tech">Tecnologia</NavLink>
              <NavLink href="#contact">Contato</NavLink>
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
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

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                <NavLink href="#features">Recursos</NavLink>
                <NavLink href="#benefits">Benefícios</NavLink>
                <NavLink href="#tech">Tecnologia</NavLink>
                <NavLink href="#contact">Contato</NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Tecnologia Revolucionária</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                O Futuro do
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Cuidado Médico
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Transforme sua rotina de medicamentos com inteligência artificial, 
                automação avançada e design futurista. Nunca mais esqueça uma dose.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1">
                <span className="flex items-center space-x-2">
                  <span>Explorar Agora</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="border-2 border-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Ver Demonstração
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <StatCard number="99.9%" label="Precisão" />
              <StatCard number="24/7" label="Monitoramento" />
              <StatCard number="AI" label="Powered" />
            </div>
          </div>

          {/* 3D Interactive Device */}
          <div className="relative z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                <Interactive3DDevice />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <span className="text-sm font-medium">Recursos Avançados</span>
            </div>
            <h2 className="text-5xl font-bold">
              Tecnologia que
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Salva Vidas
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cada recurso foi projetado para maximizar sua saúde e bem-estar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="🤖"
              title="IA Preditiva"
              description="Algoritmos avançados que aprendem seus padrões e otimizam automaticamente seus horários de medicação."
              gradient="from-purple-500 to-pink-500"
            />
            <FeatureCard
              icon="🔮"
              title="Realidade Aumentada"
              description="Interface AR que projeta informações dos medicamentos diretamente no seu campo de visão."
              gradient="from-cyan-500 to-blue-500"
            />
            <FeatureCard
              icon="⚡"
              title="Dispensação Instantânea"
              description="Sistema pneumático que entrega a dose exata em menos de 2 segundos após o comando."
              gradient="from-green-500 to-teal-500"
            />
            <FeatureCard
              icon="🛡️"
              title="Biometria Avançada"
              description="Reconhecimento facial, digital e de voz para máxima segurança e personalização."
              gradient="from-orange-500 to-red-500"
            />
            <FeatureCard
              icon="🌐"
              title="Conectividade 5G"
              description="Sincronização em tempo real com hospitais, médicos e farmácias através de rede 5G."
              gradient="from-indigo-500 to-purple-500"
            />
            <FeatureCard
              icon="🧬"
              title="Análise Molecular"
              description="Sensores que verificam a integridade molecular dos medicamentos em tempo real."
              gradient="from-pink-500 to-rose-500"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="relative py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <span className="text-sm font-medium">Impacto Real</span>
                </div>
                <h2 className="text-5xl font-bold">
                  Resultados que
                  <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                    Transformam
                  </span>
                </h2>
                <p className="text-xl text-gray-300">
                  Dados comprovados de milhares de usuários ao redor do mundo
                </p>
              </div>

              <div className="space-y-6">
                <BenefitItem
                  percentage="98%"
                  title="Adesão ao Tratamento"
                  description="Aumento comprovado na consistência de medicação com nosso sistema inteligente"
                />
                <BenefitItem
                  percentage="95%"
                  title="Redução de Erros"
                  description="Eliminação quase total de doses perdidas ou incorretas através da automação"
                />
                <BenefitItem
                  percentage="87%"
                  title="Melhoria na Qualidade de Vida"
                  description="Usuários relatam significativa melhora no bem-estar geral e controle da saúde"
                />
                <BenefitItem
                  percentage="92%"
                  title="Satisfação Médica"
                  description="Profissionais de saúde aprovam a precisão e confiabilidade do sistema"
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">📊</div>
                    <h3 className="text-2xl font-bold">Analytics em Tempo Real</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <MetricCard
                      label="Doses Tomadas Hoje"
                      value="8/8"
                      color="green"
                      trend="+100%"
                    />
                    <MetricCard
                      label="Eficácia do Tratamento"
                      value="96.7%"
                      color="blue"
                      trend="+12%"
                    />
                    <MetricCard
                      label="Próxima Dose"
                      value="14:30"
                      color="purple"
                      trend="2h 15m"
                    />
                    <MetricCard
                      label="Estoque Restante"
                      value="23 dias"
                      color="orange"
                      trend="Renovar em breve"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="relative py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <span className="text-sm font-medium">Especificações Técnicas</span>
            </div>
            <h2 className="text-5xl font-bold">
              Engenharia de
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Precisão
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechCard
              title="Processador"
              value="ARM Cortex-A78"
              icon="🔥"
              description="Chip de última geração com IA integrada"
            />
            <TechCard
              title="Armazenamento"
              value="128 compartimentos"
              icon="📦"
              description="Sistema modular expansível"
            />
            <TechCard
              title="Conectividade"
              value="5G + Wi-Fi 6E"
              icon="📡"
              description="Conexão ultra-rápida e estável"
            />
            <TechCard
              title="Bateria"
              value="60 dias"
              icon="🔋"
              description="Autonomia estendida com carregamento solar"
            />
            <TechCard
              title="Sensores"
              value="12 tipos"
              icon="🎯"
              description="Monitoramento completo do ambiente"
            />
            <TechCard
              title="Display"
              value="OLED 4K 7&quot;"
              icon="📺"
              description="Interface touchscreen responsiva"
            />
            <TechCard
              title="Segurança"
              value="Criptografia AES-256"
              icon="🔐"
              description="Proteção de dados médicos"
            />
            <TechCard
              title="Certificação"
              value="FDA + CE + ANVISA"
              icon="✅"
              description="Aprovado globalmente"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Disponível Agora</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold">
                Pronto para o
                <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Futuro da Saúde?
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Junte-se à revolução da medicina personalizada e transforme sua vida hoje mesmo
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-gradient-to-r from-purple-500 to-cyan-500 px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1">
                <span className="flex items-center space-x-3">
                  <span>Solicitar Demonstração</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="border-2 border-white/20 backdrop-blur-sm px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Falar com Especialista
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12">
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Entrega em 24h</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Garantia de 5 anos</span>
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
      </section>

      {/* Footer */}
      <footer id="contact" className="relative border-t border-white/10 py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  PillTech
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Revolucionando o cuidado médico através da tecnologia mais avançada do planeta.
              </p>
              <div className="flex space-x-4">
                <SocialIcon />
                <SocialIcon />
                <SocialIcon />
                <SocialIcon />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Produto</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Especificações</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comparações</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Suporte</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Contato</h3>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>hello@pilltech.ai</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>+55 (11) 9999-9999</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span>📍</span>
                  <span>São Paulo, Brasil</span>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PillTech. Todos os direitos reservados. Feito com ❤️ para um futuro mais saudável.</p>
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
      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        {number}
      </div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </div>
  );
}

function FeatureCard({ icon, title, description, gradient }: {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl"></div>
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
        <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
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
    <div className="flex items-start space-x-6">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center">
          <span className="text-xl font-bold">{percentage}</span>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
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
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
      <div className="flex justify-between items-start mb-2">
        <span className="text-sm text-gray-400">{label}</span>
        <div className={`w-3 h-3 bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} rounded-full`}></div>
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
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
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-semibold text-gray-300 mb-2">{title}</h3>
      <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <p className="text-sm text-gray-500">{description}</p>
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
      y: prev.y + deltaX * 0.5
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
    const deltaY = touch.clientY - lastMousePos.y;

    setRotation(prev => ({
      x: Math.max(-45, Math.min(45, prev.x - deltaY * 0.5)),
      y: prev.y + deltaX * 0.5
    }));

    setLastMousePos({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="aspect-square relative overflow-hidden rounded-2xl">
      {/* Interactive Hint */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-gray-300 flex items-center space-x-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span>Arrastar para girar</span>
        </div>
      </div>

      {/* 3D Container */}
      <div 
        className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ perspective: '1000px' }}
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
          className={`relative transition-transform duration-300 ease-out ${isHovering ? 'scale-105' : 'scale-100'}`}
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Main Device Placeholder */}
          <div className="relative">
            {/* Placeholder para o dispensador */}
            <div className="w-80 h-96 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
              {/* Display Superior */}
              <div className="bg-black rounded-t-3xl p-4 border-b border-white/10">
                <div className="text-center space-y-2">
                  <div className="text-xs text-gray-400 font-medium">DISPENSADOR DE REMÉDIOS</div>
                  <div className="text-4xl font-bold text-white">08:30</div>
                  <div className="text-sm text-gray-300">TERÇA-FEIRA</div>
                  <div className="flex items-center justify-center space-x-2 mt-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <span className="text-cyan-400 font-medium">PRÓXIMA DOSE</span>
                  </div>
                </div>
              </div>
              
              {/* Compartimentos dos medicamentos */}
              <div className="p-4">
                <div className="grid grid-cols-7 gap-1">
                  {[
                    { day: 'DOM', color: 'from-red-500 to-red-600' },
                    { day: 'SEG', color: 'from-orange-500 to-orange-600' },
                    { day: 'TER', color: 'from-green-500 to-green-600' },
                    { day: 'QUA', color: 'from-teal-500 to-teal-600' },
                    { day: 'QUI', color: 'from-cyan-500 to-cyan-600' },
                    { day: 'SEX', color: 'from-blue-500 to-blue-600' },
                    { day: 'SÁB', color: 'from-purple-500 to-purple-600' }
                  ].map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className={`h-20 bg-gradient-to-b ${item.color} rounded-lg relative overflow-hidden border border-white/20`}>
                        {/* Simulação de comprimidos */}
                        {Array.from({ length: 3 }).map((_, j) => (
                          <div
                            key={j}
                            className="absolute w-3 h-3 bg-white/80 rounded-full"
                            style={{
                              left: `${20 + (j * 15)}%`,
                              top: `${20 + (j * 20)}%`,
                            }}
                          ></div>
                        ))}
                      </div>
                      <div className="text-xs text-white text-center font-bold">
                        {item.day}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Nota: Substitua pela imagem real */}
            <div className="absolute top-2 left-2 bg-yellow-500/20 backdrop-blur-sm rounded-lg px-2 py-1">
              <div className="text-xs text-yellow-300">Placeholder - Adicione a imagem em /public/images/dispensador.png</div>
            </div>
            
            {/* 3D Shadow */}
            <div 
              className="absolute inset-0 bg-black/30 blur-xl transform translate-y-8 scale-x-75"
              style={{ transformStyle: 'preserve-3d', transform: 'translateZ(-50px)' }}
            ></div>
          </div>

          {/* Interactive Glow Effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top glow */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-pulse"></div>
            
            {/* Side glows */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-60 animate-pulse delay-500"></div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-60 animate-pulse delay-1000"></div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                style={{
                  left: `${20 + (i * 12)}%`,
                  top: `${30 + (i * 8)}%`,
                  animationDelay: `${i * 300}ms`,
                  animationDuration: '2s'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-cyan-400">7 dias</div>
            <div className="text-xs text-gray-400">Capacidade</div>
          </div>
          <div>
            <div className="text-lg font-bold text-purple-400">Smart</div>
            <div className="text-xs text-gray-400">Display OLED</div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-400">AI</div>
            <div className="text-xs text-gray-400">Powered</div>
          </div>
        </div>
      </div>
    </div>
  );
}
