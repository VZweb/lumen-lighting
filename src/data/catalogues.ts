export interface CatalogueEntry {
  name: string;
  logo: string;
  url: string;
}

export interface CatalogueData {
  decorative: CatalogueEntry[];
  architectural: CatalogueEntry[];
  outdoor: CatalogueEntry[];
}

export const SHEET_CONFIG = {
  decorative: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTFYWHgRMSAryFdLRJIdA6F8eue_Z7MCiaIG7w-NKIh9igrFYiB9JklVmwJyVAdzgtL23D533BH-Qas/pub?gid=0&single=true&output=csv",
    gid: "0",
  },
  architectural: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTFYWHgRMSAryFdLRJIdA6F8eue_Z7MCiaIG7w-NKIh9igrFYiB9JklVmwJyVAdzgtL23D533BH-Qas/pub?gid=2015219401&single=true&output=csv",
    gid: "2015219401",
  },
  outdoor: {
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTFYWHgRMSAryFdLRJIdA6F8eue_Z7MCiaIG7w-NKIh9igrFYiB9JklVmwJyVAdzgtL23D533BH-Qas/pub?gid=1810293789&single=true&output=csv",
    gid: "1810293789",
  },
};

export const FALLBACK_CATALOGUES: CatalogueData = {
  decorative: [
    { name: "Decor 1", logo: "/images/brands/decor-1.png", url: "https://novaluce.gr/" },
    { name: "Decor 2", logo: "/images/brands/decor-2.png", url: "http://www.viokef.com/" },
    { name: "Decor 3", logo: "/images/brands/decor-3.png", url: "https://www.zambelislights.gr/" },
    { name: "Decor 4", logo: "/images/brands/decor-4.png", url: "https://www.ideal-lux.com/" },
    { name: "Decor 5", logo: "/images/brands/decor-5.png", url: "http://www.maytoni.de/" },
    { name: "Decor 6", logo: "/images/brands/decor-6.png", url: "https://gealuce.com/" },
    { name: "Decor 7", logo: "/images/brands/decor-7.jpg", url: "https://faneurope.it/cataloghi/" },
    { name: "Decor 8", logo: "/images/brands/decor-8.png", url: "https://www.ondaluce-illuminazione.com/" },
    { name: "Decor 9", logo: "/images/brands/decor-9.png", url: "https://www.slamp.com/" },
    { name: "Decor 10", logo: "/images/brands/decor-10.png", url: "http://www.faro.es/" },
    { name: "Decor 11", logo: "/images/brands/decor-11.png", url: "https://www.bomma.cz/" },
    { name: "Decor 12", logo: "/images/brands/decor-12.png", url: "http://www.fabbian.com/" },
    { name: "Decor 13", logo: "/images/brands/decor-13.png", url: "https://www.bover.es/en" },
    { name: "Decor 14", logo: "/images/brands/decor-14.png", url: "https://perenz.it/" },
    { name: "Decor 15", logo: "/images/brands/decor-15.png", url: "https://www.ferroluce.it/" },
    { name: "Decor 16", logo: "/images/brands/decor-16.png", url: "https://umage.com/" },
    { name: "Decor 17", logo: "/images/brands/decor-17.png", url: "https://www.nordlux.com/" },
    { name: "Decor 17", logo: "/images/brands/decor-18.png", url: "https://kdln.it/" },
  ],
  architectural: [
    { name: "Arch 1", logo: "/images/brands/arch-1.png", url: "https://www.alphabetlights.com/" },
    { name: "Arch 2", logo: "/images/brands/arch-2.png", url: "https://www.petridis-lighting.gr/" },
    { name: "Arch 3", logo: "/images/brands/arch-3.png", url: "https://www.bright.gr/" },
    { name: "Arch 4", logo: "/images/brands/arch-4.png", url: "https://www.goccia.it/" },
    { name: "Arch 5", logo: "/images/brands/arch-5.png", url: "https://www.arcluce.it/" },
  ],
  outdoor: [
    { name: "Outdoor 1", logo: "/images/brands/outdoor-1.png", url: "http://www.landa.it/" },
    { name: "Outdoor 2", logo: "/images/brands/outdoor-2.png", url: "https://www.fumagalli.it/" },
    { name: "Outdoor 3", logo: "/images/brands/outdoor-3.png", url: "https://www.lidolights.com/" },
  ],
};
