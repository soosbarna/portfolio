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

export function AboutMePage() {
  return (
    <div style={sectionStyles}>
      <div style={leftColStyles}>
        <div>
          <div style={sectionTitleStyles}>Background</div>
          <div style={sectionDescStyles}>
            I'm a passionate full-stack developer with a strong foundation in both front-end and back-end technologies. My journey in software development began during my university years, where I discovered my love for creating intuitive and efficient solutions.
          </div>
        </div>
        <div>
          <div style={sectionTitleStyles}>Experience</div>
          <div style={sectionDescStyles}>
            With experience in various projects ranging from web applications to data analysis tools, I've developed a comprehensive understanding of modern development practices and technologies. I'm particularly interested in creating user-friendly interfaces and robust backend systems.
          </div>
        </div>
        <div>
          <div style={sectionTitleStyles}>Goals</div>
          <div style={sectionDescStyles}>
            I'm constantly seeking to expand my knowledge and skills in software development. My goal is to contribute to meaningful projects that make a positive impact while growing as a developer and team member.
          </div>
        </div>
      </div>
      <div style={{ flex: 1 }}></div>
    </div>
  );
} 