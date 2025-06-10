
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

const projectTitleStyles = {
  fontWeight: 700,
  fontSize: '1.2rem',
  marginBottom: '0.5rem',
  textTransform: 'uppercase' as const,
};

const projectDescStyles = {
  fontWeight: 400,
  fontSize: '1rem',
  marginBottom: '0.5rem',
  maxWidth: 400,
};

export function ProjectsSection() {
  return (
    <div style={sectionStyles}>
      <div style={leftColStyles}>
        <div>
          <div style={projectTitleStyles}>University Thesis Project</div>
          <div style={projectDescStyles}>
            developed a thesis project focused on storing and analyzing weather data to create an interactive website, utilizing web technologies and various datasets for accurate forecasting using react, typescript, nodejs, ...
          </div>
        </div>
        <div>
          <div style={projectTitleStyles}>University WPF Project</div>
          <div style={projectDescStyles}>
            WPF SIDES CROLLER GAME<br />KUKA
          </div>
        </div>
        <div>
          <div style={projectTitleStyles}>Legyen TreeJS</div>
        </div>
      </div>
      {/* Right column intentionally left empty to hide images */}
      <div style={{ flex: 1 }}></div>
    </div>
  );
} 