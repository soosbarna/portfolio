const sectionStyles = {
  display: 'flex',
  flexDirection: 'row' as const,
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
  margin: '2rem 0',
  gap: '2rem',
};

const leftColStyles = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '3rem',
};

const contactTitleStyles = {
  fontWeight: 700,
  fontSize: '1.2rem',
  marginBottom: '0.5rem',
  textTransform: 'uppercase' as const,
};

const contactInfoStyles = {
  fontWeight: 400,
  fontSize: '1rem',
  marginBottom: '0.5rem',
  maxWidth: 400,
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '1rem',
};

const contactLinkStyles = {
  color: '#111',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  transition: 'opacity 0.2s',
  ':hover': {
    opacity: 0.8,
  },
};

export function ContactPage() {
  return (
    <div style={sectionStyles}>
      <div style={leftColStyles}>
        <div>
          <div style={contactTitleStyles}>Get in Touch</div>
          <div style={contactInfoStyles}>
            <a href="mailto:your.email@example.com" style={contactLinkStyles}>
              <span>📧</span> your.email@example.com
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={contactLinkStyles}>
              <span>💼</span> LinkedIn
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={contactLinkStyles}>
              <span>👨‍💻</span> GitHub
            </a>
          </div>
        </div>
        <div>
          <div style={contactTitleStyles}>Location</div>
          <div style={contactInfoStyles}>
            <div>📍 Budapest, Hungary</div>
            <div>Available for remote work worldwide</div>
          </div>
        </div>
      </div>
      <div style={{ flex: 1 }}></div>
    </div>
  );
} 