import type { CatalogueEntry } from "@/data/catalogues";

export default function BrandCard({ name, logo, url }: CatalogueEntry) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center p-4 bg-white rounded-xl border border-gray/10 hover:border-amber/40 hover:shadow-lg transition-all w-[calc(50%-0.5rem)] sm:w-52 h-28"
      title={name}
    >
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="max-h-40 max-w-[95%] object-contain"
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
