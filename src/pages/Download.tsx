import { useState } from "react";
import { Download, ShieldCheck, ExternalLink } from "lucide-react";

const DownloadPage = () => {
  const [platform, setPlatform] = useState<"android" | "ios">(() => {
    const ua = navigator.userAgent || "";
    return /iPhone|iPad|iPod/i.test(ua) ? "ios" : "android";
  });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* ─── HERO / CONFIRMAÇÃO ─── */}
      <section className="px-5 pt-10 pb-8 sm:pt-16 sm:pb-12">
        <div className="container max-w-lg mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            ✅ Download liberado
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight mb-3">
            Seu download está pronto 🎮
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base mb-6">
            Clique abaixo para baixar <span className="text-amber-400 font-semibold">Need for Speed Underground 2</span> e começar a jogar no celular.
          </p>

          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-base px-10 py-4 rounded-xl hover:brightness-110 transition-all"
          >
            <Download className="w-5 h-5" />
            Baixar Need for Speed Underground 2
          </a>
          <p className="text-muted-foreground text-[11px] mt-3 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3 h-3" /> Download seguro e gratuito.
          </p>
        </div>
      </section>

      {/* ─── TUTORIAL ─── */}
      <section className="px-5 py-10 bg-card">
        <div className="container max-w-lg mx-auto">
          <h2 className="text-lg font-bold text-foreground text-center mb-1">
            Como instalar o jogo no celular
          </h2>
          <p className="text-muted-foreground text-sm text-center mb-6">
            Assista ao vídeo abaixo para aprender como instalar corretamente no seu celular.
          </p>

          <div className="aspect-video rounded-2xl overflow-hidden bg-background border border-border mb-3">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Tutorial de instalação"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-muted-foreground text-xs text-center">
            ⚠️ O vídeo usa outro jogo como exemplo, mas o processo de instalação é o mesmo.
          </p>
        </div>
      </section>

      {/* ─── ARQUIVOS NECESSÁRIOS ─── */}
      <section className="px-5 py-10">
        <div className="container max-w-lg mx-auto">
          <h2 className="text-lg font-bold text-foreground text-center mb-1">
            Arquivos necessários para instalar
          </h2>
          <p className="text-muted-foreground text-sm text-center mb-6">
            Baixe todos os arquivos para o seu sistema.
          </p>

          {/* Platform Tabs */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => setPlatform("android")}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all border ${
                platform === "android"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary/50"
              }`}
            >
              <span className="text-xl">🤖</span> Android
            </button>
            <button
              onClick={() => setPlatform("ios")}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all border ${
                platform === "ios"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary/50"
              }`}
            >
              <span className="text-xl">🍎</span> iPhone
            </button>
          </div>

          {/* Android Files */}
          {platform === "android" && (
            <div className="space-y-3">
              {[
                { name: "NetherSX2", link: "#" },
                { name: "BIOS", link: "#" },
                { name: "Need for Speed Underground 2", link: "#" },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between bg-card border border-border rounded-xl p-4">
                  <span className="text-sm font-semibold text-foreground">{item.name}</span>
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-bold text-xs px-4 py-2 rounded-lg hover:brightness-110 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Baixar
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* iOS Files */}
          {platform === "ios" && (
            <div className="space-y-3">
              {[
                { name: "Tutorial", link: "#" },
                { name: "iRAR", link: "#" },
                { name: "PPSSPP", link: "#" },
                { name: "Need for Speed Underground 2", link: "#" },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between bg-card border border-border rounded-xl p-4">
                  <span className="text-sm font-semibold text-foreground">{item.name}</span>
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-bold text-xs px-4 py-2 rounded-lg hover:brightness-110 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Baixar
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── GRUPO VIP ─── */}
      <section className="px-5 py-10 bg-card">
        <div className="container max-w-lg mx-auto text-center">
          <h2 className="text-lg font-bold text-foreground mb-2">
            Receba novos jogos no celular
          </h2>
          <p className="text-muted-foreground text-sm mb-5 text-left">
            Entre na nossa comunidade e receba:
          </p>
          <ul className="text-left space-y-2.5 mb-6 max-w-sm mx-auto">
            {[
              "Novos jogos que rodam no celular",
              "Dicas para melhorar desempenho",
              "Packs exclusivos",
              "Promoções especiais",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
                <span className="text-primary mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/SEUNUMERO?text=Quero%20entrar%20no%20grupo%20VIP%20de%20jogos"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[hsl(142,72%,50%)] text-primary-foreground font-bold text-base py-4 rounded-xl hover:brightness-110 transition-all"
          >
            <ExternalLink className="w-5 h-5" />
            Solicitar acesso ao Grupo VIP
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="px-5 py-6 border-t border-border">
        <p className="text-center text-muted-foreground text-[10px]">
          JogosMobileClub — comunidade para quem gosta de jogos clássicos no celular.
        </p>
      </footer>
    </div>
  );
};

export default DownloadPage;
