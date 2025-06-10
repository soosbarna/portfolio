import { motion } from 'framer-motion';
import { PROFILE_NAME, PROFILE_SURNAME } from './NameTitle.const';
import { nameTitleStyles } from './NameTitle.styles';

export function NameTitle({
  currentSection,
  onJumpHome,
}: {
  currentSection: string;
  onJumpHome?: () => void;
}) {
  const isProjects = currentSection === 'projects';

  return (
    <motion.div
      style={{
        ...nameTitleStyles.container,
        position: isProjects ? 'fixed' : 'static',
        top: isProjects ? 0 : undefined,
        left: isProjects ? 0 : undefined,
        width: isProjects ? 'auto' : undefined,
        zIndex: isProjects ? 200 : undefined,
        background: isProjects ? 'white' : undefined,
        padding: isProjects ? '0.5rem 1.5rem' : undefined,
        display: 'flex',
        alignItems: 'center',
        justifyContent: isProjects ? 'flex-start' : 'flex-start',
        flexDirection: isProjects ? 'row' : 'column',
        fontSize: isProjects ? '1.3rem' : '3rem',
        fontWeight: 700,
        textDecoration: isProjects ? 'none' : 'underline',
        cursor: isProjects ? 'pointer' : 'default',
        transition: 'all 0.5s cubic-bezier(.4,2,.6,1)',
      }}
      animate={{
        scale: isProjects ? 0.7 : 1,
        x: 0,
        y: 0,
      }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      onClick={isProjects && onJumpHome ? onJumpHome : undefined}
      tabIndex={isProjects ? 0 : -1}
      role={isProjects ? 'button' : undefined}
      aria-label={isProjects ? 'Jump to homepage' : undefined}
    >
      <span style={{
        fontWeight: 700,
        textDecoration: isProjects ? 'none' : 'underline',
        marginRight: isProjects ? 8 : 0,
        fontSize: isProjects ? '1.3rem' : '3rem',
        letterSpacing: '0.05em',
        color: '#111',
        display: 'inline-block',
        transition: 'all 0.5s cubic-bezier(.4,2,.6,1)',
      }}>
        {PROFILE_SURNAME}
      </span>
      <span style={{
        fontWeight: 700,
        fontSize: isProjects ? '1.3rem' : '2.7rem',
        color: '#111',
        marginLeft: isProjects ? 8 : 0,
        display: 'inline-block',
        transition: 'all 0.5s cubic-bezier(.4,2,.6,1)',
      }}>
        {PROFILE_NAME}
      </span>
    </motion.div>
  );
} 