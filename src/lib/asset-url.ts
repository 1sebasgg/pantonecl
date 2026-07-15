// Assets live on Lovable's CDN at /__l5e/assets-v1/...
// When hosted outside Lovable (e.g. Vercel), that path 404s, so we
// resolve relative asset URLs against the Lovable app's absolute origin.
const LOVABLE_ORIGIN = "https://pantonecl.lovable.app";

export function assetUrl(url: string): string {
  if (/^https?:\/\//i.test(url)) return url;
  return `${LOVABLE_ORIGIN}${url}`;
}
