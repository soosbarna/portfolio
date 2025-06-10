export const nameTitleStyles = {
  container: {
    textAlign: 'left',
    margin: '0 0 1.5rem 0',
    fontFamily: 'Reddit Sans, Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  surname: {
    fontSize: '3rem',
    fontWeight: 700,
    textDecoration: 'underline',
    letterSpacing: '0.05em',
    color: '#111',
    display: 'inline-block',
  },
  name: {
    fontSize: '2.7rem',
    fontWeight: 700,
    display: 'block',
    marginTop: '0.7rem',
    color: '#111',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 900,
    marginTop: '0.7rem',
    color: '#111',
  },
} as const; 