declare global {
  interface Window {
    gtag: (...args: [string, string, Record<string, any>?]) => void
  }
}

export const GA_MEASUREMENT_ID = 'G-8R0B7DFPJ4'

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}