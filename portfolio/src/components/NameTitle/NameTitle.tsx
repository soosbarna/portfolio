import { motion } from 'framer-motion';
import { PROFILE_NAME, PROFILE_SURNAME, PROFILE_TITLE } from './NameTitle.const';
import './NameTitle.css';

export function NameTitle({
  currentSection,
  onJumpHome,
}: {
  currentSection: string;
  onJumpHome?: () => void;
}) {
  const isProjects = currentSection === 'projects';
  const isHome = currentSection === 'home';

  return (
    <>
      <motion.div
        className="nameTitleContainer"
        style={{
          position: isProjects ? 'fixed' : 'static',
          top: isProjects ? 0 : undefined,
          left: isProjects ? 0 : undefined,
          width: isProjects ? 'auto' : undefined,
          zIndex: isProjects ? 200 : undefined,
          background: isProjects ? 'white' : undefined,
          padding: isProjects ? '0.5rem 1.5rem' : undefined,
          flexDirection: isProjects ? 'row' : 'column',
          fontSize: isProjects ? '1.5rem' : '5rem',
          fontWeight: 600,
          cursor: isProjects ? 'pointer' : 'default',
          transition: 'all 0.5s cubic-bezier(.4,2,.6,1)',
          opacity: isHome ? 1 : 0,
          scale: isHome ? 1 : 0.8,
        }}
        animate={{
          scale: isProjects ? 0.7 : isHome ? 1 : 0.8,
          x: 0,
          y: 0,
          opacity: isHome ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        onClick={isProjects && onJumpHome ? onJumpHome : undefined}
        tabIndex={isProjects ? 0 : -1}
        role={isProjects ? 'button' : undefined}
        aria-label={isProjects ? 'Jump to homepage' : undefined}
      >
        <span style={{
          borderBottom: isProjects ? 'none' : '4px solid #111',
          marginRight: isProjects ? 8 : 0,
          fontSize: isProjects ? '1.3rem' : '4rem',
          letterSpacing: '0.05em',
          color: '#111',
          display: 'inline-block',
          transition: 'all 0.5s cubic-bezier(.4,2,.6,1)',
        }}>
          {PROFILE_SURNAME}
        </span>
        <span style={{
          fontSize: isProjects ? '1.3rem' : '4rem',
          color: '#111',
          marginLeft: isProjects ? 8 : 0,
          display: 'inline-block',
          transition: 'all 0.5s cubic-bezier(.4,2,.6,1)',
        }}>
          {PROFILE_NAME}
        </span>
      </motion.div>
      <motion.div 
        className="profileTitle"
        animate={{
          opacity: isHome ? 1 : 0,
          y: isHome ? 0 : -20,
        }}
        transition={{ duration: 0.3 }}
      >
        {PROFILE_TITLE}
      </motion.div>
    </>
  );
} 