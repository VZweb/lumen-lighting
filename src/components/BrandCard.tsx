import type { CatalogueEntry } from "@/data/catalogues";

export default function BrandCard({ name, logo, url }: CatalogueEntry) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center p-6 bg-white rounded-xl border border-gray/10 hover:border-amber/40 hover:shadow-lg transition-all aspect-[2/1]"
      title={name}
    >
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
          loading="lazy"
        />
      ) : (
        <span className="text-sm font-semibold text-dark/60 group-hover:text-dark transition-colors text-center">
          {name}
        </span>
      )}
    </a>
  );
}
