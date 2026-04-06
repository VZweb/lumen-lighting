import { useState, useEffect } from "react";
import Papa from "papaparse";
import {
  type CatalogueEntry,
  type CatalogueData,
  SHEET_CONFIG,
  FALLBACK_CATALOGUES,
} from "@/data/catalogues";

const CACHE_KEY = "lumen-catalogues";
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

interface CacheEntry {
  data: CatalogueData;
  timestamp: number;
}

function getCached(): CatalogueData | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached: CacheEntry = JSON.parse(raw);
    if (Date.now() - cached.timestamp > CACHE_DURATION) {
      sessionStorage.removeItem(CACHE_KEY);
      return null;
    }
    return cached.data;
  } catch {
    return null;
  }
}

function setCache(data: CatalogueData) {
  const entry: CacheEntry = { data, timestamp: Date.now() };
  sessionStorage.setItem(CACHE_KEY, JSON.stringify(entry));
}

async function fetchTab(csvUrl: string): Promise<CatalogueEntry[]> {
  if (!csvUrl) return [];
  const res = await fetch(csvUrl);
  const text = await res.text();
  const parsed = Papa.parse<Record<string, string>>(text, {
    header: true,
    skipEmptyLines: true,
  });
  return parsed.data
    .filter((row) => row.name && row.url)
    .map((row) => ({
      name: row.name.trim(),
      logo: (row.logo || "").trim(),
      url: row.url.trim(),
    }));
}

export function useCatalogues() {
  const [data, setData] = useState<CatalogueData>(FALLBACK_CATALOGUES);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const cached = getCached();
    if (cached) {
      setData(cached);
      setLoading(false);
      return;
    }

    const hasUrls = Object.values(SHEET_CONFIG).some((c) => c.url);
    if (!hasUrls) {
      setLoading(false);
      return;
    }

    Promise.all([
      fetchTab(SHEET_CONFIG.decorative.url),
      fetchTab(SHEET_CONFIG.architectural.url),
      fetchTab(SHEET_CONFIG.outdoor.url),
    ])
      .then(([decorative, architectural, outdoor]) => {
        const result: CatalogueData = {
          decorative: decorative.length ? decorative : FALLBACK_CATALOGUES.decorative,
          architectural: architectural.length ? architectural : FALLBACK_CATALOGUES.architectural,
          outdoor: outdoor.length ? outdoor : FALLBACK_CATALOGUES.outdoor,
        };
        setCache(result);
        setData(result);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
