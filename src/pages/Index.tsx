import nfsCover from "@/assets/nfs-cover.png";
import { Download, ChevronDown, Check, X, Smartphone, ShieldCheck, Zap, Gift, Star } from "lucide-react";

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const games = [
  { name: "GTA V", img: "https://ksdigital.shop/wp-content/uploads/2025/09/LEGACY.png" },
  { name: "GTA San Andreas", img: "https://ksdigital.shop/wp-content/uploads/2025/07/9ff343a1a37c543ff9bc59c574cbea10.jpg" },
  { name: "God of War 2", img: "https://ksdigital.shop/wp-content/uploads/2025/07/6cf9f1c447f889b021b25214731d6bfa-Copia.webp" },
  { name: "God of War 1", img: "https://ksdigital.shop/wp-content/uploads/2025/07/PT-BR-1-2.png" },
  { name: "GoW Ghost of Sparta", img: "https://ksdigital.shop/wp-content/uploads/2025/07/PT-BR-1-1.png" },
  { name: "GoW Chains of Olympus", img: "https://ksdigital.shop/wp-content/uploads/2025/07/PT-BR-3.png" },
  { name: "NFS Underground", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Nfsu_capa_pt.jpg" },
  { name: "NFS Underground 2", img: "https://ksdigital.shop/wp-content/uploads/2025/07/Nfsu2_capa_pt.jpg" },
  { name: "NFS Most Wanted", img: "https://ksdigital.shop/wp-content/uploads/2025/09/NFSMW_Boxart.webp" },
  { name: "NFS Carbon", img: "https://ksdigital.shop/wp-content/uploads/2025/07/71h324tjzmL.jpg" },
  { name: "Midnight Club 3", img: "https://ksdigital.shop/wp-content/uploads/2025/07/Midnight_Club_3_DUB_Edition_capa.jpg" },
  { name: "Spider-Man 3", img: "https://ksdigital.shop/wp-content/uploads/2025/07/604880f85fdfa4d069dd4dfabe163639-1-1.jpg" },
  { name: "Bully PT-BR", img: "https://ksdigital.shop/wp-content/uploads/2025/07/images-3.jpg" },
  { name: "Dragon Ball BT4", img: "https://ksdigital.shop/wp-content/uploads/2025/07/cover.png" },
  { name: "Naruto Shippuden 5", img: "https://ksdigital.shop/wp-content/uploads/2025/07/naruto-shippuden-ultimate-ninja-5-turns-15-years-old-today-v0-qpof6pn8l47a1.webp" },
  { name: "Tekken 5", img: "https://ksdigital.shop/wp-content/uploads/2025/07/Tekken_5_capa.png" },
  { name: "Burnout 3", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Burnout3-TakedownUSA-image.jpg" },
  { name: "MK Armageddon", img: "https://ksdigital.shop/wp-content/uploads/2025/07/favorite-cover-art-from-the-3d-era-v0-c54eu3fg1d8d1.webp" },
  { name: "Assassin's Creed", img: "https://ksdigital.shop/wp-content/uploads/2025/07/Assassins_Creed_Bloodlines_capa.png" },
  { name: "Resident Evil 3", img: "https://ksdigital.shop/wp-content/uploads/2025/09/ResidentEvil3-NemesisUSA-image.jpg" },
  { name: "Metal Gear Solid 3", img: "https://ksdigital.shop/wp-content/uploads/2025/09/MetalGearSolid3-SnakeEaterUSA-image.jpg" },
  { name: "GTA Brasil", img: "https://ksdigital.shop/wp-content/uploads/2025/07/ChatGPT-Image-16-de-jul.-de-2025-23_26_39.png" },
  { name: "GTA Liberty City", img: "https://ksdigital.shop/wp-content/uploads/2025/07/grand-theft-auto-liberty-city-stories-e1751394846496-1.jpg" },
  { name: "GTA Vice City", img: "https://ksdigital.shop/wp-content/uploads/2025/07/grand-theft-auto-vice-city-stories-e1752552384526.jpg" },
  { name: "Gran Turismo 4", img: "https://ksdigital.shop/wp-content/uploads/2025/09/gran-turismo-4.jpg" },
  { name: "Midnight Club LA", img: "https://ksdigital.shop/wp-content/uploads/2025/07/ChatGPT-Image-1-de-jul.-de-2025-15_13_48-1.png" },
  { name: "Inferno de Dante", img: "https://ksdigital.shop/wp-content/uploads/2025/07/dantes-inferno-e1751395418118.jpg" },
  { name: "Príncipe da Pérsia", img: "https://ksdigital.shop/wp-content/uploads/2025/07/prince-of-persia-the-two-thrones-e1751392952580.webp" },
  { name: "Shadow of Colossus", img: "https://ksdigital.shop/wp-content/uploads/2025/09/ShadowoftheColossusUSA-image.jpg" },
  { name: "Call of Duty 3", img: "https://ksdigital.shop/wp-content/uploads/2025/09/CallofDuty3USA-image.jpg" },
  { name: "Guitar Hero III", img: "https://ksdigital.shop/wp-content/uploads/2025/09/GuitarHeroIII-LegendsofRockUSA-image.jpg" },
  { name: "Red Dead Revolver", img: "https://ksdigital.shop/wp-content/uploads/2025/09/MV5BNTU1MjY1OTkyNF5BMl5BanBnXkFtZTgwNzg5ODAyNTE@._V1_QL75_UX157_.jpg" },
  { name: "Hitman Blood Money", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Hitman-BloodMoneyUSA-image.jpg" },
  { name: "Def Jam Fight", img: "https://ksdigital.shop/wp-content/uploads/2025/09/DEFJAMFIGHTFORNY.jpg" },
  { name: "Spider-Man 2", img: "https://ksdigital.shop/wp-content/uploads/2025/07/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.avif" },
  { name: "Silent Hill 3", img: "https://ksdigital.shop/wp-content/uploads/2025/09/SilentHill3USAEnJaFrDeEsItKo-image.jpg" },
  { name: "Battlefield 2", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Battlefield-2-Modern-Combat-scaled-1.jpg" },
  { name: "Sniper Elite", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Sniper-Elite-V2-Silver-Star-Edition-300x357-1.jpg" },
  { name: "Soul Calibur", img: "https://ksdigital.shop/wp-content/uploads/2025/07/Soul-Calibur-Broken-Destiny-1-scaled-e1751349412484.jpg" },
  { name: "Marvel Ultimate Alliance", img: "https://ksdigital.shop/wp-content/uploads/2025/07/marvel-ultimate-alliance-2-e1752552624233.webp" },
  { name: "Daxter", img: "https://ksdigital.shop/wp-content/uploads/2025/07/upscalemedia-transformed-scaled-e1751392482643.jpeg" },
  { name: "Darkwatch", img: "https://ksdigital.shop/wp-content/uploads/2025/11/Darkwatch.jpg" },
  { name: "PES 2026", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Captura-de-tela-2025-09-29-185922.png" },
  { name: "Bomba Patch 2025", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Captura-de-tela-2025-09-29-192312.png" },
  { name: "DFL26 Mobile", img: "https://ksdigital.shop/wp-content/uploads/2025/10/2026.png" },
  { name: "DBZ Shin Budokai", img: "https://ksdigital.shop/wp-content/uploads/2025/07/dragon-ball-z-shin-budokai-e1751395100715.jpg" },
  { name: "Ben 10", img: "https://ksdigital.shop/wp-content/uploads/2025/07/Ben_10-_For3Fgena-scaled.webp" },
  { name: "Jackie Chan", img: "https://ksdigital.shop/wp-content/uploads/2025/07/MV5BMjQ5YzZhYTUtM2FlOC00NDlkLTlmOTEtNDI1OGNmMTgwZTY4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { name: "Burnout Dominator", img: "https://ksdigital.shop/wp-content/uploads/2025/07/burnout-dominator-e1752551639342.jpg" },
  { name: "NFS ProStreet", img: "https://ksdigital.shop/wp-content/uploads/2025/09/NeedforSpeed-ProStreetUSA-image.jpg" },
  { name: "Van Helsing", img: "https://ksdigital.shop/wp-content/uploads/2025/11/Captura-de-tela-2025-11-07-032711.png" },
  { name: "Urban Reign", img: "https://ksdigital.shop/wp-content/uploads/2025/11/51E7QES99ML._SY445_.jpg" },
  { name: "Driver 2", img: "https://ksdigital.shop/wp-content/uploads/2025/11/Driver_2_Coverart.jpg" },
  { name: "Downhill Domination", img: "https://ksdigital.shop/wp-content/uploads/2025/11/downhill-domination-button-1652747391683.jpg" },
  { name: "25 to Life", img: "https://ksdigital.shop/wp-content/uploads/2025/07/25tolife-1652399533972.jpg" },
  { name: "Os Incríveis", img: "https://ksdigital.shop/wp-content/uploads/2025/07/Os_Incr3Fveis-scaled.webp" },
  { name: "MoH Vanguard", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Medal-of-Honor-Vanguard-2.jpg" },
  { name: "Vigilante 8", img: "https://ksdigital.shop/wp-content/uploads/2025/09/220px-Vigilante_8.jpg" },
  { name: "CoD World at War", img: "https://ksdigital.shop/wp-content/uploads/2025/09/CallofDuty-WorldatWar-FinalFrontsUSAEnFr-image.jpg" },
  { name: "Mortal Kombat Unchained", img: "https://ksdigital.shop/wp-content/uploads/2025/07/PT-BR-2.png" },
  { name: "Naruto Legends", img: "https://ksdigital.shop/wp-content/uploads/2025/07/naruto-shippuden-legends-akatsuki-rising-e1751395992521.webp" },
  { name: "Black Hack Edition", img: "https://ksdigital.shop/wp-content/uploads/2025/11/Black-Hack-Edition-Dublado-IA-PT-BR-212x300-1.jpg" },
  { name: "MX vs ATV", img: "https://ksdigital.shop/wp-content/uploads/2025/07/mx-vs-atv-untamed-e1751393071211.webp" },
  { name: "Medal of Honor", img: "https://ksdigital.shop/wp-content/uploads/2025/09/MedalofHonor-FrontlineUSA-image.jpg" },
  { name: "GTA SA Definitive", img: "https://ksdigital.shop/wp-content/uploads/2025/07/cover-1.png" },
  { name: "PES 2017", img: "https://ksdigital.shop/wp-content/uploads/2025/08/pes-2017-mobile-scaled.webp" },
  { name: "PES 25", img: "https://ksdigital.shop/wp-content/uploads/2025/07/images-39.jpg" },
  { name: "FC 25", img: "https://ksdigital.shop/wp-content/uploads/2025/07/images-41.jpg" },
  { name: "Bomba Patch 2026", img: "https://ksdigital.shop/wp-content/uploads/2025/09/Celular-Super_Bomba_Patch_2026_V01.fw_.webp" },
  { name: "RE4 + Vice City", img: "https://ksdigital.shop/wp-content/uploads/2025/07/ChatGPT-Image-1-de-jul.-de-2025-16_04_51.png" },
  { name: "Black + GoW 1", img: "https://ksdigital.shop/wp-content/uploads/2025/07/PT-BR.png" },
  { name: "Bomba Patch 2007", img: "https://ksdigital.shop/wp-content/uploads/2025/07/D_NQ_NP_665172-MLB83879911947_042025-O-e1752550275311.webp" },
  { name: "PES 2012", img: "https://ksdigital.shop/wp-content/uploads/2025/09/PROEVOLUTIONSOCCER2012.jpg" },
  { name: "PES 2013", img: "https://ksdigital.shop/wp-content/uploads/2025/09/PROEVOLUTIONSOCCER2013.jpg" },
  { name: "PES 2014", img: "https://ksdigital.shop/wp-content/uploads/2025/07/81HK0XmqEfL._UF8941000_QL80_.jpg" },
  { name: "eFootball 2024", img: "https://ksdigital.shop/wp-content/uploads/2025/09/eFootball-2024.jpg" },
  { name: "Bomba Patch Cazé TV", img: "https://ksdigital.shop/wp-content/uploads/2025/07/download-2.jpg" },
  { name: "Pack 8 Jogos", img: "https://ksdigital.shop/wp-content/uploads/2025/10/Design-sem-nome-3.png" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="px-5 pt-10 pb-8 sm:pt-16 sm:pb-12">
        <div className="container max-w-lg mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-6">
            <Smartphone className="w-3.5 h-3.5" />
            Android & iPhone
          </div>

          {/* Cover */}
          <div className="w-40 sm:w-48 mx-auto mb-6">
            <img
              src={nfsCover}
              alt="Need for Speed Underground"
              className="w-full rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]"
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight mb-2">
            Need for Speed Underground
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base mb-6">
            Baixe grátis e jogue no celular agora.
          </p>

          {/* CTA */}
          <button
            onClick={() => scrollTo("download")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-8 py-3.5 rounded-xl hover:brightness-110 transition-all"
          >
            <Download className="w-4 h-4" />
            Baixar grátis
          </button>

          {/* Trust */}
          <div className="flex items-center justify-center gap-4 mt-4 text-muted-foreground text-[11px]">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Seguro</span>
            <span>•</span>
            <span>Sem cadastro</span>
            <span>•</span>
            <span>Grátis</span>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}
      <section className="px-5 pb-8">
        <div className="container max-w-lg mx-auto">
          <div className="flex items-center justify-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-center text-muted-foreground text-xs">
            <span className="text-foreground font-semibold">4.9/5</span> • Mais de 2.800 downloads essa semana
          </p>
        </div>
      </section>

      {/* ─── VIDEO ─── */}
      <section id="tutorial" className="px-5 pb-10">
        <div className="container max-w-lg mx-auto">
          <h2 className="text-lg font-bold text-foreground text-center mb-4">
            Como instalar
          </h2>
          <div className="aspect-video rounded-2xl overflow-hidden bg-card border border-border">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              Insira o vídeo do YouTube aqui
            </div>
          </div>
        </div>
      </section>

      {/* ─── DOWNLOAD ─── */}
      <section id="download" className="px-5 py-10 bg-card">
        <div className="container max-w-lg mx-auto text-center">
          <h2 className="text-lg font-bold text-foreground mb-2">
            Download gratuito
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Clique abaixo para baixar o jogo.
          </p>
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-base px-10 py-4 rounded-xl hover:brightness-110 transition-all"
          >
            <Download className="w-5 h-5" />
            Baixar agora
          </a>
          <p className="text-muted-foreground text-[11px] mt-3 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3 h-3" /> Download seguro e gratuito
          </p>
        </div>
      </section>

      {/* ─── COMPARAÇÃO ─── */}
      <section className="px-5 py-10">
        <div className="container max-w-lg mx-auto">
          <h2 className="text-lg font-bold text-foreground text-center mb-2">
            Manual vs Automático
          </h2>
          <p className="text-muted-foreground text-xs text-center mb-6">
            Não quer instalar manualmente? Compare:
          </p>

          <div className="rounded-2xl border border-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-2">
              <div className="bg-card p-3 text-center border-b border-r border-border">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Manual</span>
              </div>
              <div className="bg-primary/5 p-3 text-center border-b border-border">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Automático</span>
              </div>
            </div>

            {/* Rows */}
            {[
              ["Instalação demorada", "1 clique"],
              ["Configuração manual", "Jogo pronto"],
              ["Apenas 1 jogo", "Pack completo"],
            ].map(([manual, auto], i) => (
              <div key={i} className="grid grid-cols-2">
                <div className="bg-card/50 border-b border-r border-border p-3 flex items-center gap-2">
                  <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                  <span className="text-muted-foreground text-xs">{manual}</span>
                </div>
                <div className="bg-primary/5 border-b border-border p-3 flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-xs font-medium">{auto}</span>
                </div>
              </div>
            ))}

            {/* Price */}
            <div className="grid grid-cols-2">
              <div className="bg-card/50 border-r border-border p-3 text-center">
                <span className="text-sm font-bold text-primary">Grátis</span>
              </div>
              <div className="bg-primary/5 p-3 text-center">
                <span className="text-[10px] text-muted-foreground line-through block">R$47</span>
                <span className="text-sm font-bold text-primary">R$27</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => scrollTo("premium")}
            className="w-full mt-5 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-xl hover:brightness-110 transition-all"
          >
            <Zap className="w-4 h-4" />
            Quero a versão automática
          </button>
        </div>
      </section>

      {/* ─── JOGOS DO PACK ─── */}
      <section className="px-5 py-10 bg-card">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-lg font-bold text-foreground text-center mb-1">
            +80 jogos inclusos no pack
          </h2>
          <p className="text-muted-foreground text-xs text-center mb-6">
            Todos prontos para jogar no celular
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5 sm:gap-2">
            {games.map((g) => (
              <div key={g.name} className="group">
                <div className="aspect-[3/4] rounded-lg overflow-hidden border border-border/50 group-hover:border-primary/40 transition-colors">
                  <img src={g.img} alt={g.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <p className="text-[9px] sm:text-[10px] text-muted-foreground text-center mt-1 truncate leading-tight">{g.name}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-[10px] text-center mt-4">
            E mais jogos adicionados toda semana!
          </p>
        </div>
      </section>

      {/* ─── PREMIUM ─── */}
      <section id="premium" className="px-5 py-10">
        <div className="container max-w-md mx-auto">
          <div className="rounded-2xl border border-primary/30 bg-card p-6 sm:p-8 text-center relative">
            {/* Top bar */}
            <div className="absolute top-0 inset-x-0 h-0.5 bg-primary rounded-t-2xl" />

            <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
              🔥 Mais vendido
            </span>

            <h2 className="text-xl font-bold text-foreground mb-1">
              Versão Automática + Pack
            </h2>
            <p className="text-muted-foreground text-xs mb-6">
              Tudo pronto, sem dor de cabeça
            </p>

            <ul className="text-left space-y-2.5 mb-6">
              {[
                "Instalação automática em 1 clique",
                "Jogo configurado e pronto",
                "Sem erros ou arquivos faltando",
                "+80 jogos clássicos inclusos",
                "Atualizações e novos jogos grátis",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mb-1">
              <span className="text-muted-foreground text-xs line-through mr-1.5">R$47</span>
              <span className="text-3xl font-extrabold text-foreground">R$27</span>
            </div>
            <p className="text-muted-foreground text-[10px] mb-5">Pagamento único • Acesso imediato</p>

            <a
              href="#"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm py-3.5 rounded-xl hover:brightness-110 transition-all"
            >
              Desbloquear por R$27
            </a>
            <p className="text-muted-foreground text-[10px] mt-2 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Compra segura • Entrega imediata
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-5 py-10 bg-card">
        <div className="container max-w-lg mx-auto">
          <h2 className="text-lg font-bold text-foreground text-center mb-6">
            Dúvidas frequentes
          </h2>
          <div className="space-y-3">
            {[
              { q: "O download é gratuito?", a: "Sim, você pode baixar e instalar o jogo gratuitamente." },
              { q: "Preciso pagar para jogar?", a: "Não. O pagamento é só para quem quer instalação automática e o pack com +80 jogos." },
              { q: "O instalador automático é seguro?", a: "Sim, ele apenas automatiza a instalação para facilitar." },
              { q: "Quais jogos vêm no pack?", a: "GTA, God of War, NFS, Dragon Ball, Naruto, Spider-Man, Tekken, e muitos outros clássicos." },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-xl bg-background border border-border p-4">
                <h3 className="text-sm font-semibold text-foreground mb-1">{q}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="px-5 py-6 border-t border-border">
        <p className="text-center text-muted-foreground text-[10px]">
          Página criada para facilitar o acesso ao jogo e ajudar jogadores a instalarem sem dificuldades.
        </p>
      </footer>
    </div>
  );
};

export default Index;
