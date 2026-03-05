import heroImage from "@/assets/hero-nfs.jpg";
import screenshot1 from "@/assets/screenshot-1.jpg";
import screenshot2 from "@/assets/screenshot-2.jpg";
import { Download, Zap, CheckCircle, Shield, Gift, RefreshCw, ChevronDown } from "lucide-react";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Need for Speed Underground - corrida noturna" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="relative z-10 container text-center px-4 py-20">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-glow mb-6 text-primary">
            Como baixar e instalar<br />Need for Speed Underground no PC
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 font-body">
            Baixe o jogo gratuitamente e aprenda a instalar em poucos minutos.
          </p>
          <button
            onClick={() => scrollToSection("download")}
            className="inline-flex items-center gap-3 bg-neon-gradient px-8 py-4 rounded-lg font-display font-bold text-primary-foreground text-lg box-glow-strong hover:scale-105 transition-transform duration-200"
          >
            <Download className="w-6 h-6" />
            Baixar jogo grátis
          </button>
        </div>
        <button
          onClick={() => scrollToSection("tutorial")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
          aria-label="Rolar para baixo"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* VIDEO TUTORIAL */}
      <section id="tutorial" className="py-20 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-glow mb-4">
            Tutorial completo de instalação
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Assista ao vídeo abaixo para aprender como instalar o jogo manualmente no seu computador.
          </p>
          <div className="aspect-video rounded-xl overflow-hidden neon-border box-glow bg-muted mb-8">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <p className="font-display text-sm">Insira o vídeo do YouTube aqui</p>
            </div>
          </div>
          <button
            onClick={() => scrollToSection("download")}
            className="inline-flex items-center gap-3 bg-neon-gradient px-8 py-4 rounded-lg font-display font-bold text-primary-foreground text-lg box-glow hover:scale-105 transition-transform duration-200"
          >
            <Download className="w-5 h-5" />
            Download do jogo
          </button>
        </div>
      </section>

      {/* DOWNLOAD GRATUITO */}
      <section id="download" className="py-20 px-4 bg-card-gradient">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-glow mb-4">
            Download gratuito
          </h2>
          <p className="text-foreground/80 text-lg mb-10">
            Aqui está o jogo Need for Speed Underground para você baixar.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-neon-gradient px-12 py-5 rounded-xl font-display font-black text-primary-foreground text-xl box-glow-strong hover:scale-105 transition-transform duration-200 animate-pulse-neon"
          >
            <Download className="w-7 h-7" />
            Baixar agora
          </a>
          <p className="mt-4 text-muted-foreground text-sm flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" /> Download seguro e gratuito.
          </p>
        </div>
      </section>

      {/* PROBLEMA / CONVENIÊNCIA */}
      <section className="py-20 px-4">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neon-magenta text-glow-magenta mb-6">
            Quer evitar instalação manual?
          </h2>
          <p className="text-foreground/80 text-lg leading-relaxed mb-4">
            A instalação manual pode levar alguns minutos e exigir vários passos.
          </p>
          <p className="text-foreground/80 text-lg leading-relaxed">
            Se preferir algo mais simples, você pode usar o <span className="text-primary font-semibold">instalador automático</span> que deixa tudo pronto para jogar.
          </p>
        </div>
      </section>

      {/* OFERTA PREMIUM */}
      <section className="py-20 px-4 bg-card-gradient">
        <div className="container max-w-lg mx-auto">
          <div className="rounded-2xl neon-border box-glow-strong p-8 sm:p-10 bg-muted/30 backdrop-blur text-center">
            <div className="inline-block bg-neon-gradient px-4 py-1 rounded-full font-display text-xs font-bold text-primary-foreground mb-6 uppercase tracking-wider">
              Oferta Premium
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary text-glow mb-8">
              Instalação automática + Pack de jogos
            </h2>
            <ul className="text-left space-y-4 mb-10">
              {[
                { icon: Zap, text: "Instalação automática em 1 clique" },
                { icon: CheckCircle, text: "Jogo já configurado para rodar" },
                { icon: Shield, text: "Sem erros ou arquivos faltando" },
                { icon: Gift, text: "Pack com outros jogos clássicos" },
                { icon: RefreshCw, text: "Atualizações futuras" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-foreground/90">
                  <Icon className="w-5 h-5 text-neon-green flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="mb-6">
              <span className="font-display text-4xl font-black text-primary text-glow">R$27</span>
            </div>
            <a
              href="#"
              className="block w-full bg-neon-gradient py-4 rounded-xl font-display font-bold text-primary-foreground text-lg hover:scale-[1.02] transition-transform duration-200 box-glow-strong"
            >
              Desbloquear versão automática
            </a>
          </div>
        </div>
      </section>

      {/* PROVA VISUAL */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary text-glow text-center mb-10">
            Screenshots do jogo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img
              src={screenshot1}
              alt="Gameplay Need for Speed Underground - corrida noturna"
              className="rounded-xl neon-border box-glow w-full"
            />
            <img
              src={screenshot2}
              alt="Need for Speed Underground - customização de carros"
              className="rounded-xl neon-border box-glow w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-card-gradient">
        <div className="container max-w-2xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary text-glow text-center mb-12">
            Perguntas frequentes
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "O download é gratuito?",
                a: "Sim, você pode baixar o jogo gratuitamente.",
              },
              {
                q: "Preciso pagar para jogar?",
                a: "Não. O pagamento é apenas para quem quiser a instalação automática e o pack de jogos.",
              },
              {
                q: "O instalador automático é seguro?",
                a: "Sim, ele apenas facilita o processo de instalação.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-xl bg-muted/30 neon-border p-6">
                <h3 className="font-display text-sm font-bold text-primary mb-2">{q}</h3>
                <p className="text-foreground/80">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-10 px-4 border-t border-border">
        <div className="container max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            Página criada para facilitar o acesso ao jogo e ajudar jogadores a instalarem sem dificuldades.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
