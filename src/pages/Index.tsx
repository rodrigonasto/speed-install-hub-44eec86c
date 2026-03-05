import heroImage from "@/assets/hero-nfs.jpg";
import screenshot1 from "@/assets/screenshot-1.jpg";
import screenshot2 from "@/assets/screenshot-2.jpg";
import { Download, Zap, CheckCircle, Shield, Gift, RefreshCw, X, Play, ArrowDown, Clock, MousePointerClick, Settings, Package } from "lucide-react";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const packGames = [
  { name: "DFL26 Mobile", img: "https://ksdigital.shop/wp-content/uploads/2025/10/2026.png" },
  { name: "Pack 8 Jogos", img: "https://ksdigital.shop/wp-content/uploads/2025/10/Design-sem-nome-3.png" },
  { name: "PES eFootball 2026", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Captura-de-tela-2025-09-29-185922.png" },
  { name: "Bomba Patch 2025", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Captura-de-tela-2025-09-29-192312.png" },
  { name: "PES 25", img: "https://ksdigital.shop/wp-content/uploads/2025/07/images-39.jpg" },
  { name: "Bomba Patch Cazé TV", img: "https://ksdigital.shop/wp-content/uploads/2025/07/download-2.jpg" },
  { name: "PES 2017", img: "https://ksdigital.shop/wp-content/uploads/2025/08/pes-2017-mobile-scaled.webp" },
  { name: "PES 2012", img: "https://ksdigital.shop/wp-content/uploads/2025/09/PROEVOLUTIONSOCCER2012.jpg" },
  { name: "PES 2013", img: "https://ksdigital.shop/wp-content/uploads/2025/09/PROEVOLUTIONSOCCER2013.jpg" },
  { name: "PES 2014", img: "https://ksdigital.shop/wp-content/uploads/2025/07/81HK0XmqEfL._UF8941000_QL80_.jpg" },
  { name: "eFootball 2024", img: "https://ksdigital.shop/wp-content/uploads/2025/09/eFootball-2024.jpg" },
  { name: "FC 25 - FIFA14", img: "https://ksdigital.shop/wp-content/uploads/2025/07/images-41.jpg" },
  { name: "Bomba Patch 2007", img: "https://ksdigital.shop/wp-content/uploads/2025/07/D_NQ_NP_665172-MLB83879911947_042025-O-e1752550275311.webp" },
  { name: "Bomba Patch 2026", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Celular-Super_Bomba_Patch_2026_V01.fw_.webp" },
  { name: "God of War 2", img: "https://ksdigital.shop/wp-content/uploads/2025/07/6cf9f1c447f889b021b25214731d6bfa-Copia.webp" },
  { name: "God of War 1", img: "https://ksdigital.shop/wp-content/uploads/2025/07/PT-BR-1-2.png" },
  { name: "GoW Ghost of Sparta", img: "https://ksdigital.shop/wp-content/uploads/2025/07/PT-BR-1-1.png" },
  { name: "GoW Chains of Olympus", img: "https://ksdigital.shop/wp-content/uploads/2025/07/PT-BR-3.png" },
  { name: "GTA V", img: "https://ksdigital.shop/wp-content/uploads/2025/09/LEGACY.png" },
  { name: "GTA Brasil", img: "https://ksdigital.shop/wp-content/uploads/2025/07/ChatGPT-Image-16-de-jul.-de-2025-23_26_39.png" },
  { name: "GTA San Andreas", img: "https://ksdigital.shop/wp-content/uploads/2025/07/9ff343a1a37c543ff9bc59c574cbea10.jpg" },
  { name: "GTA SA Definitive", img: "https://ksdigital.shop/wp-content/uploads/2025/07/cover-1.png" },
  { name: "GTA Liberty City", img: "https://ksdigital.shop/wp-content/uploads/2025/07/grand-theft-auto-liberty-city-stories-e1751394846496-1.jpg" },
  { name: "GTA Vice City", img: "https://ksdigital.shop/wp-content/uploads/2025/07/grand-theft-auto-vice-city-stories-e1752552384526.jpg" },
  { name: "Black + GoW 1", img: "https://ksdigital.shop/wp-content/uploads/2025/07/PT-BR.png" },
  { name: "Black Hack Edition", img: "https://ksdigital.shop/wp-content/uploads/2025/11/Black-Hack-Edition-Dublado-IA-PT-BR-212x300-1.jpg" },
  { name: "RE4 + GTA Vice City", img: "https://ksdigital.shop/wp-content/uploads/2025/07/ChatGPT-Image-1-de-jul.-de-2025-16_04_51.png" },
  { name: "Bully PT-BR", img: "https://ksdigital.shop/wp-content/uploads/2025/07/images-3.jpg" },
  { name: "Resident Evil 3", img: "https://ksdigital.shop/wp-content/uploads/2025/09/ResidentEvil3-NemesisUSA-image.jpg" },
  { name: "Silent Hill 3", img: "https://ksdigital.shop/wp-content/uploads/2025/09/SilentHill3USAEnJaFrDeEsItKo-image.jpg" },
  { name: "Battlefield 2", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Battlefield-2-Modern-Combat-scaled-1.jpg" },
  { name: "Call of Duty 3", img: "https://ksdigital.shop/wp-content/uploads/2025/09/CallofDuty3USA-image.jpg" },
  { name: "CoD World at War", img: "https://ksdigital.shop/wp-content/uploads/2025/09/CallofDuty-WorldatWar-FinalFrontsUSAEnFr-image.jpg" },
  { name: "Red Dead Revolver", img: "https://ksdigital.shop/wp-content/uploads/2025/09/MV5BNTU1MjY1OTkyNF5BMl5BanBnXkFtZTgwNzg5ODAyNTE@._V1_QL75_UX157_.jpg" },
  { name: "Sniper Elite", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Sniper-Elite-V2-Silver-Star-Edition-300x357-1.jpg" },
  { name: "Hitman Blood Money", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Hitman-BloodMoneyUSA-image.jpg" },
  { name: "Medal of Honor", img: "https://ksdigital.shop/wp-content/uploads/2025/09/MedalofHonor-FrontlineUSA-image.jpg" },
  { name: "MoH Vanguard", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Medal-of-Honor-Vanguard-2.jpg" },
  { name: "Metal Gear Solid 3", img: "https://ksdigital.shop/wp-content/uploads/2025/09/MetalGearSolid3-SnakeEaterUSA-image.jpg" },
  { name: "Shadow of Colossus", img: "https://ksdigital.shop/wp-content/uploads/2025/09/ShadowoftheColossusUSA-image.jpg" },
  { name: "Def Jam Fight", img: "https://ksdigital.shop/wp-content/uploads/2025/09/DEFJAMFIGHTFORNY.jpg" },
  { name: "Tekken 5", img: "https://ksdigital.shop/wp-content/uploads/2025/07/Tekken_5_capa.png" },
  { name: "Spider-Man 2", img: "https://ksdigital.shop/wp-content/uploads/2025/07/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.avif" },
  { name: "Spider-Man 3", img: "https://ksdigital.shop/wp-content/uploads/2025/07/604880f85fdfa4d069dd4dfabe163639-1-1.jpg" },
  { name: "Príncipe da Pérsia", img: "https://ksdigital.shop/wp-content/uploads/2025/07/prince-of-persia-the-two-thrones-e1751392952580.webp" },
  { name: "Marvel Ultimate Alliance", img: "https://ksdigital.shop/wp-content/uploads/2025/07/marvel-ultimate-alliance-2-e1752552624233.webp" },
  { name: "Inferno de Dante", img: "https://ksdigital.shop/wp-content/uploads/2025/07/dantes-inferno-e1751395418118.jpg" },
  { name: "Assassin's Creed", img: "https://ksdigital.shop/wp-content/uploads/2025/07/Assassins_Creed_Bloodlines_capa.png" },
  { name: "25 to Life", img: "https://ksdigital.shop/wp-content/uploads/2025/07/25tolife-1652399533972.jpg" },
  { name: "Soul Calibur", img: "https://ksdigital.shop/wp-content/uploads/2025/07/Soul-Calibur-Broken-Destiny-1-scaled-e1751349412484.jpg" },
  { name: "Daxter", img: "https://ksdigital.shop/wp-content/uploads/2025/07/upscalemedia-transformed-scaled-e1751392482643.jpeg" },
  { name: "Van Helsing", img: "https://ksdigital.shop/wp-content/uploads/2025/11/Captura-de-tela-2025-11-07-032711.png" },
  { name: "Urban Reign", img: "https://ksdigital.shop/wp-content/uploads/2025/11/51E7QES99ML._SY445_.jpg" },
  { name: "Darkwatch", img: "https://ksdigital.shop/wp-content/uploads/2025/11/Darkwatch.jpg" },
  { name: "Midnight Club 3", img: "https://ksdigital.shop/wp-content/uploads/2025/07/Midnight_Club_3_DUB_Edition_capa.jpg" },
  { name: "NFS Underground 2", img: "https://ksdigital.shop/wp-content/uploads/2025/07/Nfsu2_capa_pt.jpg" },
  { name: "NFS Underground", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Nfsu_capa_pt.jpg" },
  { name: "NFS Most Wanted", img: "https://ksdigital.shop/wp-content/uploads/2025/09/NFSMW_Boxart.webp" },
  { name: "Gran Turismo 4", img: "https://ksdigital.shop/wp-content/uploads/2025/09/gran-turismo-4.jpg" },
  { name: "NFS ProStreet", img: "https://ksdigital.shop/wp-content/uploads/2025/09/NeedforSpeed-ProStreetUSA-image.jpg" },
  { name: "Burnout 3", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Burnout3-TakedownUSA-image.jpg" },
  { name: "Vigilante 8", img: "https://ksdigital.shop/wp-content/uploads/2025/09/220px-Vigilante_8.jpg" },
  { name: "Midnight Club LA", img: "https://ksdigital.shop/wp-content/uploads/2025/07/ChatGPT-Image-1-de-jul.-de-2025-15_13_48-1.png" },
  { name: "NFS Carbon", img: "https://ksdigital.shop/wp-content/uploads/2025/07/71h324tjzmL.jpg" },
  { name: "MX vs ATV", img: "https://ksdigital.shop/wp-content/uploads/2025/07/mx-vs-atv-untamed-e1751393071211.webp" },
  { name: "Burnout Dominator", img: "https://ksdigital.shop/wp-content/uploads/2025/07/burnout-dominator-e1752551639342.jpg" },
  { name: "Downhill Domination", img: "https://ksdigital.shop/wp-content/uploads/2025/11/downhill-domination-button-1652747391683.jpg" },
  { name: "Driver 2", img: "https://ksdigital.shop/wp-content/uploads/2025/11/Driver_2_Coverart.jpg" },
  { name: "Naruto Shippuden 5", img: "https://ksdigital.shop/wp-content/uploads/2025/07/naruto-shippuden-ultimate-ninja-5-turns-15-years-old-today-v0-qpof6pn8l47a1.webp" },
  { name: "Guitar Hero III", img: "https://ksdigital.shop/wp-content/uploads/2025/09/GuitarHeroIII-LegendsofRockUSA-image.jpg" },
  { name: "Naruto Legends", img: "https://ksdigital.shop/wp-content/uploads/2025/07/naruto-shippuden-legends-akatsuki-rising-e1751395992521.webp" },
  { name: "Mortal Kombat Unchained", img: "https://ksdigital.shop/wp-content/uploads/2025/07/PT-BR-2.png" },
  { name: "Dragon Ball BT4", img: "https://ksdigital.shop/wp-content/uploads/2025/07/cover.png" },
  { name: "DBZ Shin Budokai", img: "https://ksdigital.shop/wp-content/uploads/2025/07/dragon-ball-z-shin-budokai-e1751395100715.jpg" },
  { name: "Jackie Chan", img: "https://ksdigital.shop/wp-content/uploads/2025/07/MV5BMjQ5YzZhYTUtM2FlOC00NDlkLTlmOTEtNDI1OGNmMTgwZTY4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { name: "Os Incríveis", img: "https://ksdigital.shop/wp-content/uploads/2025/07/Os_Incr3Fveis-scaled.webp" },
  { name: "MK Armageddon", img: "https://ksdigital.shop/wp-content/uploads/2025/07/favorite-cover-art-from-the-3d-era-v0-c54eu3fg1d8d1.webp" },
  { name: "Ben 10", img: "https://ksdigital.shop/wp-content/uploads/2025/07/Ben_10-_For3Fgena-scaled.webp" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Need for Speed Underground" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
        <div className="relative z-10 container text-center px-4 pb-16 pt-32">
          <span className="inline-block text-neon-green font-bold text-xs uppercase tracking-[0.2em] mb-4">
            🎮 Download gratuito
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-black leading-none text-glow mb-4 text-foreground">
            Need for Speed<br />
            <span className="text-primary">Underground</span>
          </h1>
          <p className="text-foreground/80 text-base sm:text-lg mb-8 max-w-md mx-auto">
            Jogue no seu celular agora mesmo. Grátis.
          </p>
          <button
            onClick={() => scrollToSection("download")}
            className="inline-flex items-center gap-3 bg-neon-gradient px-10 py-4 rounded-xl font-display font-bold text-primary-foreground text-base sm:text-lg box-glow-strong hover:scale-105 transition-transform duration-200"
          >
            <Download className="w-5 h-5" />
            Baixar grátis
          </button>
          <div className="mt-6 flex items-center justify-center gap-4 text-foreground/50 text-xs">
            <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Seguro</span>
            <span>•</span>
            <span>Android & iPhone</span>
            <span>•</span>
            <span>Sem cadastro</span>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="py-14 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <img src={screenshot1} alt="Gameplay NFS Underground" className="rounded-xl neon-border box-glow w-full" />
            <img src={screenshot2} alt="Customização NFS Underground" className="rounded-xl neon-border box-glow w-full" />
          </div>
          <p className="text-center text-foreground/60 text-sm mt-4">
            Reviva o clássico das corridas de rua no seu celular
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
            +80 jogos clássicos inclusos no pack
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-10">
            Todos esses jogos vêm prontos para instalar com 1 clique no celular
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
                { icon: Gift, text: "+80 jogos clássicos inclusos (GTA, God of War, NFS...)" },
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
                a: "Não. O pagamento é apenas para quem quiser a instalação automática e o pack com +80 jogos extras.",
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
