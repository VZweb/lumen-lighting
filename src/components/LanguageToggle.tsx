import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const isEn = i18n.language === "en";

  return (
    <button
      onClick={() => i18n.changeLanguage(isEn ? "gr" : "en")}
      className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
      aria-label="Toggle language"
    >
      <span className={isEn ? "text-amber font-bold" : ""}>EN</span>
      <span className="text-white/40">|</span>
      <span className={!isEn ? "text-amber font-bold" : ""}>GR</span>
    </button>
  );
}
