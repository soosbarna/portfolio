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

const sectionTitleStyles = {
  fontWeight: 700,
  fontSize: '1.2rem',
  marginBottom: '0.5rem',
  textTransform: 'uppercase' as const,
};

const sectionDescStyles = {
  fontWeight: 400,
  fontSize: '1rem',
  marginBottom: '0.5rem',
  maxWidth: 400,
  lineHeight: 1.6,
};

export function BehindPortfolioPage() {
  return (
    <div style={sectionStyles}>
      <div style={leftColStyles}>
        <div>
          <div style={sectionTitleStyles}>Technology Stack</div>
          <div style={sectionDescStyles}>
            This portfolio is built using React with TypeScript, leveraging modern web development practices. The UI is crafted with a focus on performance and user experience, using Framer Motion for smooth animations.
          </div>
        </div>
        <div>
          <div style={sectionTitleStyles}>Design Philosophy</div>
          <div style={sectionDescStyles}>
            The design emphasizes simplicity and clarity, with a clean layout that puts the content first. The color scheme and typography are chosen to ensure readability while maintaining visual appeal.
          </div>
        </div>
        <div>
          <div style={sectionTitleStyles}>Development Process</div>
          <div style={sectionDescStyles}>
            The development process followed an iterative approach, with continuous improvements based on testing and feedback. The code is structured for maintainability and scalability.
          </div>
        </div>
      </div>
      <div style={{ flex: 1 }}></div>
    </div>
  );
} 