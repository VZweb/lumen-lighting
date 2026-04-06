import { useTranslation } from "react-i18next";
import { CONTACT } from "@/data/contact";
import { HOURS } from "@/data/hours";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Google Map */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-lg font-semibold text-amber mb-4">
              {t("footer.findUs")}
            </h3>
            <div className="rounded-lg overflow-hidden aspect-[4/3]">
              <iframe
                src={CONTACT.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lumen Lighting Location"
              />
            </div>
            <a
              href={CONTACT.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-amber hover:text-amber-light transition-colors"
            >
              {t("footer.findUs")} →
            </a>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-display text-lg font-semibold text-amber mb-4">
              {t("footer.hours")}
            </h3>
            <dl className="space-y-3 text-sm text-white/80">
              {HOURS.map((entry) => (
                <div key={entry.dayKey} className="flex justify-between gap-4">
                  <dt>{t(`footer.${entry.dayKey}`)}</dt>
                  <dd className={`font-medium text-right ${entry.hours ? "text-white" : "text-white/50"}`}>
                    {entry.hours ?? t("footer.closed")}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Contact Info */}
            <div className="mt-8 space-y-3 text-sm text-white/80">
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {CONTACT.address}
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a href={`tel:${CONTACT.phone}`} className="hover:text-amber transition-colors">
                  {CONTACT.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-amber transition-colors">
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </div>

          {/* Brand + Social */}
          <div className="flex flex-col justify-between">
            <div>
              <img
                src="/images/logo.png"
                alt="Lumen Lighting"
                className="h-16 w-auto mb-4"
              />
              <p className="text-sm text-white/60 leading-relaxed">
                Premium lighting solutions for your home and business. Decorative, architectural, and outdoor lighting from top brands.
              </p>
            </div>
            <div className="mt-6">
              <SocialIcons className="mb-4" />
              <p className="text-xs text-white/40">
                © {new Date().getFullYear()} Lumen Lighting. {t("footer.rights")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
