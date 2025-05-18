export const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#6c757d',
    accent: '#ff4500',
    background: '#f9f9f9',
    text: '#333333',
    textLight: '#767676',
    border: '#e1e1e1',
    error: '#ff0033',
    success: '#00cc66',
  },
  fonts: {
    heading: "'Noto Sans KR', sans-serif",
    body: "'Noto Sans KR', sans-serif",
  },
  fontSizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    xxl: '1.5rem', // 24px
    xxxl: '2rem', // 32px
  },
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    xxl: '3rem', // 48px
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    laptop: '992px',
    desktop: '1200px',
  },
  shadows: {
    small: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    medium: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
    large: '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
  },
};

export type Theme = typeof theme;

export default theme;
