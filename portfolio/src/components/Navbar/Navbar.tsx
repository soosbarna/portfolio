import { motion } from 'framer-motion';
import { NAVBAR_ITEMS } from './Navbar.const';
import './Navbar.css';
import { PROFILE_NAME, PROFILE_SURNAME } from '../NameTitle/NameTitle.const';
import { navbarStyles } from './Navbar.style';
import { useToggles } from '../../ToggleContext';
import { getDebugBorderStyle } from '../../pages/HomePage/HomePage.style';

type Section = 'home' | 'projects' | 'passions' | 'about' | 'contact' | 'behind';

function withoutPosition<T extends { position?: unknown }>(style: T): Omit<T, 'position'> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { position: _unused, ...rest } = style;
  return rest;
}

export function Navbar({ currentSection, onNavClick }: { currentSection: Section, onNavClick: (section: Section) => void }) {
  const { debugBorders } = useToggles();

  const handleNavItemClick = (sectionKey: Section) => {
    onNavClick(sectionKey);
  };

  const getSectionKey = (item: string): Section => {
    switch (item) {
      case 'PROJECTS':
        return 'projects';
      case 'PASSIONS':
        return 'passions';
      case 'ABOUT ME':
        return 'about';
      case 'CONTACT':
        return 'contact';
      case 'BEHIND THE PORTFOLIO':
        return 'behind';
      default:
        return 'home';
    }
  };

  const renderNavbarContent = () => {
    if (currentSection === 'home') {
      const centeredStyle = withoutPosition({ ...navbarStyles.navbarContent, ...navbarStyles.navbarContentCentered, ...getDebugBorderStyle(debugBorders, 'blue') });
      return (
        <motion.div
          style={centeredStyle}
        >
          <motion.ul
            className="links"
            style={{
              ...navbarStyles.navbarMenuItems,
              ...getDebugBorderStyle(debugBorders, 'green')
            }}
          >
            {NAVBAR_ITEMS.map((item) => {
              const sectionKey = getSectionKey(item);
              return (
                <li
                  key={item}
                  className="link"
                  onClick={() => onNavClick(sectionKey)}
                >
                  {item}
                  {currentSection === sectionKey && (
                    <motion.div
                      className="activeIndicator"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </li>
              );
            })}
          </motion.ul>
        </motion.div>
      );
    }

    const splitStyle = withoutPosition({ ...navbarStyles.navbarContent, ...navbarStyles.navbarContentSplit, ...getDebugBorderStyle(debugBorders, 'blue') });
    return (
      <motion.div
        style={splitStyle}
      >
        <motion.div
          style={navbarStyles.navbarName}
          onClick={() => handleNavItemClick('home')}
        >
          {PROFILE_SURNAME} {PROFILE_NAME}
        </motion.div>
        <motion.ul
          className="links"
          style={{
            ...navbarStyles.navbarMenuItems,
            ...getDebugBorderStyle(debugBorders, 'green')
          }}
        >
          {NAVBAR_ITEMS.map((item) => {
            const sectionKey = getSectionKey(item);
            return (
              <li
                key={item}
                className="link"
                onClick={() => onNavClick(sectionKey)}
              >
                {item}
                {currentSection === sectionKey && (
                  <motion.div
                    className="activeIndicator"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}
              </li>
            );
          })}
        </motion.ul>
      </motion.div>
    );
  };

  return (
    <nav style={{ ...navbarStyles.navbar, ...getDebugBorderStyle(debugBorders, 'red') }}>
      {renderNavbarContent()}
    </nav>
  );
}