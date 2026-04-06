import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-dark overflow-hidden">
      {/* Ambient glow effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-center">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
          {t("hero.title")}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          {t("hero.subtitle")}
        </p>
        <Link
          to="/catalogues"
          className="inline-block mt-10 px-8 py-3.5 bg-amber text-dark font-semibold text-sm tracking-wide rounded-lg hover:bg-amber-light transition-colors"
        >
          {t("hero.cta")}
        </Link>
      </div>
    </section>
  );
}
