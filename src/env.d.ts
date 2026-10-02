/// <reference types="astro/client" />

declare const endpoint: string;
declare const analyticsProvider: string;
declare const analyticsId: string;

interface Window {
  plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
  doNotTrack?: string;
}
