import { motion } from 'framer-motion';
import { NAVBAR_ITEMS } from './Navbar.const';
import { navbarStyles } from './Navbar.styles';

export function Navbar({ currentSection, onNavClick }: { currentSection: string, onNavClick: (section: 'home' | 'projects') => void }) {

  return (
    <nav style={navbarStyles.navbar}>
      <motion.ul
        style={navbarStyles.links}
        animate={{
          x: currentSection === 'projects' ? 300 : 0,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      >
        {NAVBAR_ITEMS.map((item) => {
          const sectionKey = item === 'PROJECTS' ? 'projects' : 'home';
          return (
            <li
              key={item}
              style={{
                ...navbarStyles.link,
                borderBottom:
                  currentSection === 'projects' && sectionKey === 'projects'
                    ? '2px solid #111'
                    : 'none',
              }}
              onClick={() => onNavClick(sectionKey as 'home' | 'projects')}
            >
              {item}
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
} 