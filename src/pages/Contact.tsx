import { useTranslation } from "react-i18next";
import { CONTACT } from "@/data/contact";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      {/* Page Header */}
      <section className="bg-dark py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white">
            {t("contact.title")}
          </h1>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
          <div className="mt-4 w-16 h-1 bg-amber mx-auto rounded-full" />
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-lg font-semibold text-dark mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    {t("contact.address")}
                  </h3>
                  <p className="text-gray ml-7">{CONTACT.address}</p>
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold text-dark mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    {t("contact.phone")}
                  </h3>
                  <a href={`tel:${CONTACT.phone}`} className="text-gray ml-7 hover:text-amber transition-colors">
                    {CONTACT.phone}
                  </a>
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold text-dark mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    {t("contact.email")}
                  </h3>
                  <a href={`mailto:${CONTACT.email}`} className="text-gray ml-7 hover:text-amber transition-colors">
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="mt-12">
                <h2 className="font-display text-2xl font-semibold text-dark mb-6">
                  {t("contact.formTitle")}
                </h2>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark mb-1.5">
                      {t("contact.formName")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray/20 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-1.5">
                      {t("contact.formEmail")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray/20 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark mb-1.5">
                      {t("contact.formMessage")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray/20 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-all text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-amber text-dark font-semibold text-sm rounded-lg hover:bg-amber-light transition-colors cursor-pointer"
                  >
                    {t("contact.formSend")}
                  </button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-dark mb-6">
                {t("contact.mapTitle")}
              </h2>
              <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[500px]">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
