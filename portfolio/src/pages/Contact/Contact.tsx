import { color, motion, px, transform } from "framer-motion";
import { contactStyles } from "./Contact.style";


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





export function ContactPage() {
  return (
    <div style={contactStyles.sectionStyles}>
      <motion.a 
        href="#"
        style={contactStyles.underlinelink}
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        GitHub
        <motion.span
          style={contactStyles.underline}
          variants={{
            rest: { scaleX: 0 },
            hover: { scaleX: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.a>
    </div>
  );
}


/*export function ContactPage() {
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
} */







