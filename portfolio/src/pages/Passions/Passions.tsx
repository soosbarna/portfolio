import { passionsStyles } from "./Passions.style";


export function PassionsPage() {
  return (
    <div style={passionsStyles.sectionStyles}>
      <div>
        <div style={passionsStyles.sectionTitleStyles}>Photography</div>
        <div style={passionsStyles.sectionDescStyles}>
          Capturing moments and landscapes through the lens, exploring different perspectives and techniques in photography.
        </div>
      </div>
      <div>
        <div style={passionsStyles.sectionTitleStyles}>Experience</div>
        <div style={passionsStyles.sectionDescStyles}>
          Exploring nature trails and mountains, finding peace in the great outdoors and challenging myself with new heights.
        </div>
      </div>
      <div>
        <div style={passionsStyles.sectionTitleStyles}>Goals</div>
        <div style={passionsStyles.sectionDescStyles}>
          Playing guitar and piano, composing music, and exploring different genres and styles.
        </div>
      </div>
    </div>
  );
} 