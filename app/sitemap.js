import { SITE } from "@/lib/kedai";

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/menu`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/tentang`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE}/acara`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/kontak`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
}
