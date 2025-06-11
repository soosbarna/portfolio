export const navbarStyles = {
  navbar: {
    width: '100%',
    height: '2rem',
    borderBottom: '2px solid #222',
    background: 'transparent',
    padding: '0.5rem 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Reddit Sans, Arial, sans-serif',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2.5rem',
    fontSize: '1.25rem',
    fontWeight: 600,
    margin: 0,
    padding: 0,
    color: '#111',
    letterSpacing: '0.02em',
  },
  link: {
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
} as const; 