import { useTranslation } from "react-i18next";
import { useCatalogues } from "@/hooks/useCatalogues";
import BrandCard from "@/components/BrandCard";
import type { CatalogueEntry } from "@/data/catalogues";

function CategorySection({
  title,
  items,
}: {
  title: string;
  items: CatalogueEntry[];
}) {
  if (items.length === 0) return null;

  return (
    <div className="mb-14 last:mb-0">
      <div className="flex items-center gap-4 mb-8">
        <h3 className="font-display text-2xl font-semibold text-dark whitespace-nowrap">
          {title}
        </h3>
        <div className="flex-1 h-px bg-gray/20" />
      </div>
      <div className="flex flex-wrap gap-4">
        {items.map((item) => (
          <BrandCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

function SkeletonGrid() {
  return (
    <div className="flex flex-wrap gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="w-52 h-28 rounded-xl bg-gray/10 animate-pulse"
        />
      ))}
    </div>
  );
}

export default function Catalogues() {
  const { t } = useTranslation();
  const { data, loading, error } = useCatalogues();

  return (
    <>
      {/* Page Header */}
      <section className="bg-dark py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white">
            {t("catalogues.title")}
          </h1>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            {t("catalogues.subtitle")}
          </p>
          <div className="mt-4 w-16 h-1 bg-amber mx-auto rounded-full" />
        </div>
      </section>

      {/* Catalogue Sections */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <p className="text-center text-amber bg-amber/10 rounded-lg py-3 px-4 mb-8 text-sm">
              {t("catalogues.error")}
            </p>
          )}

          {loading ? (
            <SkeletonGrid />
          ) : (
            <>
              <CategorySection
                title={t("catalogues.decorative")}
                items={data.decorative}
              />
              <CategorySection
                title={t("catalogues.architectural")}
                items={data.architectural}
              />
              <CategorySection
                title={t("catalogues.outdoor")}
                items={data.outdoor}
              />
            </>
          )}
        </div>
      </section>
    </>
  );
}
