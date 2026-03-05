import heroImage from "@/assets/hero-nfs.jpg";
import screenshot1 from "@/assets/screenshot-1.jpg";
import screenshot2 from "@/assets/screenshot-2.jpg";
import { Download, Zap, CheckCircle, Shield, Gift, RefreshCw, X, Play, ArrowDown, Clock, MousePointerClick, Settings, Package } from "lucide-react";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const packGames = [
  { name: "GTA San Andreas", img: "https://ksdigital.shop/wp-content/uploads/2025/07/9ff343a1a37c543ff9bc59c574cbea10.jpg" },
  { name: "GTA V", img: "https://ksdigital.shop/wp-content/uploads/2025/09/LEGACY.png" },
  { name: "God of War 2", img: "https://ksdigital.shop/wp-content/uploads/2025/07/6cf9f1c447f889b021b25214731d6bfa-Copia.webp" },
  { name: "NFS Underground", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Nfsu_capa_pt.jpg" },
  { name: "NFS Most Wanted", img: "https://ksdigital.shop/wp-content/uploads/2025/09/NFSMW_Boxart.webp" },
  { name: "Midnight Club 3", img: "https://ksdigital.shop/wp-content/uploads/2025/07/Midnight_Club_3_DUB_Edition_capa.jpg" },
  { name: "Resident Evil 4", img: "https://ksdigital.shop/wp-content/uploads/2025/07/ChatGPT-Image-1-de-jul.-de-2025-16_04_51.png" },
  { name: "Spider-Man 3", img: "https://ksdigital.shop/wp-content/uploads/2025/07/604880f85fdfa4d069dd4dfabe163639-1-1.jpg" },
  { name: "Bully", img: "https://ksdigital.shop/wp-content/uploads/2025/07/images-3.jpg" },
  { name: "Dragon Ball Z", img: "https://ksdigital.shop/wp-content/uploads/2025/07/cover.png" },
  { name: "Naruto Shippuden 5", img: "https://ksdigital.shop/wp-content/uploads/2025/07/naruto-shippuden-ultimate-ninja-5-turns-15-years-old-today-v0-qpof6pn8l47a1.webp" },
  { name: "Tekken 5", img: "https://ksdigital.shop/wp-content/uploads/2025/07/Tekken_5_capa.png" },
  { name: "Burnout 3", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Burnout3-TakedownUSA-image.jpg" },
  { name: "Mortal Kombat", img: "https://ksdigital.shop/wp-content/uploads/2025/07/favorite-cover-art-from-the-3d-era-v0-c54eu3fg1d8d1.webp" },
  { name: "Assassin's Creed", img: "https://ksdigital.shop/wp-content/uploads/2025/07/Assassins_Creed_Bloodlines_capa.png" },
  { name: "God of War 1", img: "https://ksdigital.shop/wp-content/uploads/2025/07/PT-BR-1-2.png" },
  { name: "Call of Duty 3", img: "https://ksdigital.shop/wp-content/uploads/2025/09/CallofDuty3USA-image.jpg" },
  { name: "Gran Turismo 4", img: "https://ksdigital.shop/wp-content/uploads/2025/09/gran-turismo-4.jpg" },
  { name: "Guitar Hero III", img: "https://ksdigital.shop/wp-content/uploads/2025/09/GuitarHeroIII-LegendsofRockUSA-image.jpg" },
  { name: "NFS Carbon", img: "https://ksdigital.shop/wp-content/uploads/2025/07/71h324tjzmL.jpg" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Need for Speed Underground" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>
        <div className="relative z-10 container text-center px-4 py-16">
          <div className="inline-block bg-neon-green/10 border border-neon-green/30 px-4 py-1.5 rounded-full mb-6">
            <span className="text-neon-green font-semibold text-sm">🎮 100% Gratuito</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-glow mb-5 text-primary">
            Need for Speed Underground
            <span className="block text-foreground text-lg sm:text-xl md:text-2xl mt-3 font-body font-normal">
              Baixe agora e jogue no seu PC em minutos
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Download gratuito + tutorial de instalação passo a passo. Sem cadastro, sem complicação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("download")}
              className="inline-flex items-center gap-3 bg-neon-gradient px-8 py-4 rounded-xl font-display font-bold text-primary-foreground text-base sm:text-lg box-glow-strong hover:scale-105 transition-transform duration-200 w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5" />
              Baixar jogo grátis
            </button>
            <button
              onClick={() => scrollToSection("tutorial")}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              <Play className="w-4 h-4" />
              Ver tutorial de instalação
            </button>
          </div>
          <p className="mt-6 text-muted-foreground text-xs flex items-center justify-center gap-1.5">
            <Shield className="w-3.5 h-3.5" /> Download seguro • Sem vírus • Funciona no Windows 7/8/10/11
          </p>
        </div>
        <button
          onClick={() => scrollToSection("tutorial")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary animate-bounce"
          aria-label="Rolar"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </section>

      {/* PROVA VISUAL */}
      <section className="py-14 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <img src={screenshot1} alt="Gameplay NFS Underground" className="rounded-xl neon-border box-glow w-full" />
            <img src={screenshot2} alt="Customização NFS Underground" className="rounded-xl neon-border box-glow w-full" />
          </div>
          <p className="text-center text-muted-foreground text-sm mt-4">
            Reviva o clássico das corridas de rua direto no seu PC
          </p>
        </div>
      </section>

      {/* VIDEO TUTORIAL */}
      <section id="tutorial" className="py-16 px-4 bg-card-gradient">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary text-glow mb-3">
            Tutorial de instalação
          </h2>
          <p className="text-muted-foreground mb-8">
            Veja como instalar o jogo passo a passo no vídeo abaixo.
          </p>
          <div className="aspect-video rounded-xl overflow-hidden neon-border box-glow bg-muted mb-8">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <p className="font-display text-sm">Insira o vídeo do YouTube aqui</p>
            </div>
          </div>
          <button
            onClick={() => scrollToSection("download")}
            className="inline-flex items-center gap-3 bg-neon-gradient px-8 py-4 rounded-xl font-display font-bold text-primary-foreground box-glow hover:scale-105 transition-transform duration-200"
          >
            <Download className="w-5 h-5" />
            Ir para o download
          </button>
        </div>
      </section>

      {/* DOWNLOAD GRATUITO */}
      <section id="download" className="py-16 px-4">
        <div className="container max-w-xl mx-auto text-center">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary text-glow mb-3">
            Download gratuito
          </h2>
          <p className="text-foreground/80 mb-8">
            Clique no botão abaixo para baixar o Need for Speed Underground.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-neon-gradient px-12 py-5 rounded-xl font-display font-black text-primary-foreground text-lg sm:text-xl box-glow-strong hover:scale-105 transition-transform duration-200 animate-pulse-neon"
          >
            <Download className="w-7 h-7" />
            Baixar agora
          </a>
          <p className="mt-4 text-muted-foreground text-xs flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" /> Download seguro e gratuito.
          </p>
        </div>
      </section>

      {/* COMPARAÇÃO MANUAL vs AUTOMÁTICO */}
      <section className="py-16 px-4 bg-card-gradient">
        <div className="container max-w-2xl mx-auto">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-center text-neon-magenta text-glow-magenta mb-4">
            Quer evitar instalação manual?
          </h2>
          <p className="text-center text-foreground/70 mb-10 max-w-lg mx-auto text-sm sm:text-base">
            Compare as duas opções e escolha a melhor para você:
          </p>

          {/* Tabela de Comparação */}
          <div className="rounded-2xl overflow-hidden neon-border">
            {/* Header */}
            <div className="grid grid-cols-[1fr_1fr] sm:grid-cols-[1fr_1fr]">
              <div className="bg-muted/30 p-4 sm:p-5 text-center border-b border-r border-border">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-2">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <span className="font-display text-xs sm:text-sm font-bold text-muted-foreground">Manual</span>
              </div>
              <div className="bg-primary/10 p-4 sm:p-5 text-center border-b border-border box-glow">
                <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-5 h-5 text-neon-green" />
                </div>
                <span className="font-display text-xs sm:text-sm font-bold text-primary">Automático</span>
              </div>
            </div>

            {/* Rows */}
            {[
              {
                manual: "Instalação demorada",
                manualIcon: Clock,
                auto: "Instalação 1 clique",
                autoIcon: MousePointerClick,
              },
              {
                manual: "Configuração manual",
                manualIcon: Settings,
                auto: "Jogo pronto",
                autoIcon: Zap,
              },
              {
                manual: "Apenas 1 jogo",
                manualIcon: X,
                auto: "Pack completo",
                autoIcon: Package,
              },
            ].map(({ manual, manualIcon: MI, auto, autoIcon: AI }, i) => (
              <div key={i} className="grid grid-cols-2">
                <div className="bg-muted/10 border-b border-r border-border p-4 sm:p-5 flex items-center gap-2.5">
                  <MI className="w-4 h-4 text-destructive/70 flex-shrink-0" />
                  <span className="text-muted-foreground text-xs sm:text-sm">{manual}</span>
                </div>
                <div className="bg-primary/5 border-b border-border p-4 sm:p-5 flex items-center gap-2.5">
                  <AI className="w-4 h-4 text-neon-green flex-shrink-0" />
                  <span className="text-foreground text-xs sm:text-sm font-medium">{auto}</span>
                </div>
              </div>
            ))}

            {/* Price row */}
            <div className="grid grid-cols-2">
              <div className="bg-muted/10 border-r border-border p-4 sm:p-5 text-center">
                <span className="font-display text-lg sm:text-xl font-bold text-neon-green">Grátis</span>
              </div>
              <div className="bg-primary/5 p-4 sm:p-5 text-center">
                <span className="text-muted-foreground text-xs line-through block">R$47</span>
                <span className="font-display text-lg sm:text-xl font-bold text-primary text-glow">R$27</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => scrollToSection("premium")}
              className="inline-flex items-center gap-2 bg-neon-gradient px-8 py-3.5 rounded-xl font-display font-bold text-primary-foreground text-sm hover:scale-105 transition-transform duration-200 box-glow"
            >
              <Zap className="w-4 h-4" />
              Quero a versão automática
            </button>
          </div>
        </div>
      </section>

      {/* JOGOS DO PACK */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary text-glow text-center mb-3">
            +20 jogos clássicos inclusos no pack
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-10">
            Todos esses jogos vêm prontos para instalar com 1 clique
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-2 sm:gap-3">
            {packGames.map((game) => (
              <div key={game.name} className="group relative">
                <div className="aspect-[3/4] rounded-lg overflow-hidden neon-border transition-all duration-200 group-hover:box-glow group-hover:scale-105">
                  <img
                    src={game.img}
                    alt={game.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-[10px] sm:text-xs text-muted-foreground text-center mt-1.5 leading-tight truncate">
                  {game.name}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-xs mt-6">
            E muito mais... Novos jogos adicionados regularmente!
          </p>
        </div>
      </section>

      {/* OFERTA PREMIUM */}
      <section id="premium" className="py-16 px-4 bg-card-gradient">
        <div className="container max-w-md mx-auto">
          <div className="rounded-2xl neon-border box-glow-strong p-8 sm:p-10 bg-muted/20 backdrop-blur text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-neon-gradient" />
            <div className="inline-block bg-neon-gradient px-4 py-1 rounded-full font-display text-xs font-bold text-primary-foreground mb-6 uppercase tracking-wider">
              🔥 Mais vendido
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-primary text-glow mb-2">
              Versão Automática + Pack Completo
            </h2>
            <p className="text-muted-foreground text-sm mb-8">Tudo pronto para jogar, sem dor de cabeça</p>
            <ul className="text-left space-y-3 mb-8">
              {[
                { icon: Zap, text: "Instalação automática em 1 clique" },
                { icon: CheckCircle, text: "Jogo configurado e pronto para rodar" },
                { icon: Shield, text: "Sem erros ou arquivos faltando" },
                { icon: Gift, text: "+20 jogos clássicos inclusos (GTA, God of War, NFS...)" },
                { icon: RefreshCw, text: "Atualizações e novos jogos grátis" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-foreground/90 text-sm">
                  <Icon className="w-4 h-4 text-neon-green flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="mb-2">
              <span className="text-muted-foreground text-sm line-through mr-2">R$47</span>
              <span className="font-display text-4xl font-black text-primary text-glow">R$27</span>
            </div>
            <p className="text-muted-foreground text-xs mb-6">Pagamento único • Acesso imediato</p>
            <a
              href="#"
              className="block w-full bg-neon-gradient py-4 rounded-xl font-display font-bold text-primary-foreground text-base hover:scale-[1.02] transition-transform duration-200 box-glow-strong"
            >
              Desbloquear agora por R$27
            </a>
            <p className="mt-3 text-muted-foreground text-[10px] flex items-center justify-center gap-1.5">
              <Shield className="w-3 h-3" /> Compra segura • Entrega imediata
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container max-w-2xl mx-auto">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-primary text-glow text-center mb-10">
            Dúvidas frequentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "O download é gratuito?",
                a: "Sim, você pode baixar o jogo gratuitamente e instalar seguindo o tutorial.",
              },
              {
                q: "Preciso pagar para jogar?",
                a: "Não. O pagamento é apenas para quem quiser a instalação automática e o pack com +20 jogos extras.",
              },
              {
                q: "O instalador automático é seguro?",
                a: "Sim, ele apenas automatiza o processo de instalação para você não precisar fazer nada manualmente.",
              },
              {
                q: "Quais jogos vêm no pack?",
                a: "GTA San Andreas, GTA V, God of War, Need for Speed, Midnight Club, Spider-Man, Naruto, Dragon Ball Z, e muitos outros clássicos.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-xl bg-muted/20 neon-border p-5">
                <h3 className="font-display text-xs sm:text-sm font-bold text-primary mb-2">{q}</h3>
                <p className="text-foreground/70 text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground text-xs">
            Página criada para facilitar o acesso ao jogo e ajudar jogadores a instalarem sem dificuldades.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
