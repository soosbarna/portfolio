import { motion } from 'framer-motion';

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

const passionTitleStyles = {
  fontWeight: 700,
  fontSize: '1.2rem',
  marginBottom: '0.5rem',
  textTransform: 'uppercase' as const,
};

const passionDescStyles = {
  fontWeight: 400,
  fontSize: '1rem',
  marginBottom: '0.5rem',
  maxWidth: 400,
};

export function PassionsPage() {
  return (
    <div style={sectionStyles}>
      <div style={leftColStyles}>
        <div>
          <div style={passionTitleStyles}>Photography</div>
          <div style={passionDescStyles}>
            Capturing moments and landscapes through the lens, exploring different perspectives and techniques in photography.
          </div>
        </div>
        <div>
          <div style={passionTitleStyles}>Hiking</div>
          <div style={passionDescStyles}>
            Exploring nature trails and mountains, finding peace in the great outdoors and challenging myself with new heights.
          </div>
        </div>
        <div>
          <div style={passionTitleStyles}>Music</div>
          <div style={passionDescStyles}>
            Playing guitar and piano, composing music, and exploring different genres and styles.
          </div>
        </div>
      </div>
      <div style={{ flex: 1 }}></div>
    </div>
  );
} 