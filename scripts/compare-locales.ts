import en from "../locales/en";
import hi from "../locales/hi";
import kn from "../locales/kn";

function flatten(obj: any, prefix = "") {
  const res: Record<string, any> = {};
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (val && typeof val === "object" && !Array.isArray(val)) {
      Object.assign(res, flatten(val, newKey));
    } else {
      res[newKey] = val;
    }
  }
  return res;
}

const enFlat = flatten((en as any).default ?? en);
const hiFlat = flatten((hi as any).default ?? hi);
const knFlat = flatten((kn as any).default ?? kn);

function missingKeys(base: Record<string, any>, other: Record<string, any>) {
  const missing: string[] = [];
  for (const k of Object.keys(base)) {
    if (!(k in other)) missing.push(k);
  }
  return missing;
}

function untranslatedKeys(base: Record<string, any>, other: Record<string, any>) {
  const untranslated: string[] = [];
  for (const k of Object.keys(base)) {
    if (k in other) {
      const a = String(base[k]).trim();
      const b = String(other[k]).trim();
      if (a === b) untranslated.push(k);
    }
  }
  return untranslated;
}

console.log("Comparing locales to en.ts\n");

const hiMissing = missingKeys(enFlat, hiFlat);
const knMissing = missingKeys(enFlat, knFlat);

const hiUntranslated = untranslatedKeys(enFlat, hiFlat);
const knUntranslated = untranslatedKeys(enFlat, knFlat);

console.log("hi - missing keys:", hiMissing.length);
console.log(hiMissing.slice(0, 50));
console.log("hi - untranslated (same string as en):", hiUntranslated.length);
console.log(hiUntranslated.slice(0, 50));

console.log('\nkn - missing keys:', knMissing.length);
console.log(knMissing.slice(0, 50));
console.log('kn - untranslated (same string as en):', knUntranslated.length);
console.log(knUntranslated.slice(0, 50));

process.exit(0);
