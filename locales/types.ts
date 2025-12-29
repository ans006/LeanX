export const locales = ["en", "fr", "es", "zh-CN", "ru", "pt", "hi", "kn"] as const;
export type Locale = (typeof locales)[number];
