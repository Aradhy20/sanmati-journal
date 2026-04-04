export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

export const pageview = (url: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', GTM_ID, {
      page_path: url,
    });
  }
};

export const logPdfDownload = (article_doi: string, article_title: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'pdf_download', {
      article_doi,
      article_title,
    });
  }
};

export const logCitationCopied = (format: string, doi: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'citation_copied', {
      format,
      doi,
    });
  }
};

export const logSearchPerformed = (query: string, result_count: number) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'search_performed', {
      search_term: query,
      result_count,
    });
  }
};
