import { motion } from 'framer-motion';
import { NAVBAR_ITEMS } from './Navbar.const';
import './Navbar.css';
import { PROFILE_NAME, PROFILE_SURNAME } from '../NameTitle/NameTitle.const';
import { navbarStyles } from './Navbar.style';
import { useToggles } from '../../ToggleContext';
import { getDebugBorderStyle } from '../../pages/HomePage/HomePage.style';
import { useDynamicLayoutWidths } from '../../globalStyle';

type Section = 'home' | 'projects' | 'passions' | 'about' | 'contact' | 'behind';

function withoutPosition<T extends { position?: unknown }>(style: T): Omit<T, 'position'> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { position: _unused, ...rest } = style;
  return rest;
}

export function Navbar({ currentSection, onNavClick }: { currentSection: Section, onNavClick: (section: Section) => void }) {
  const { debugBorders } = useToggles();
  const widths = useDynamicLayoutWidths();

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
    const baseContentStyle = {
      ...navbarStyles.navbarContent,
      width: widths.center,
      marginLeft: widths.left,
      marginRight: widths.right,
    };
    if (currentSection === 'home') {
      const centeredStyle = withoutPosition({ ...baseContentStyle, ...navbarStyles.navbarContentCentered, ...getDebugBorderStyle(debugBorders, 'blue') });
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

    const splitStyle = withoutPosition({ ...baseContentStyle, ...navbarStyles.navbarContentSplit, ...getDebugBorderStyle(debugBorders, 'blue') });
    return (
      <motion.div style={splitStyle}>
        <motion.div
          style={navbarStyles.navbarName}
          className="navbarProfileName"
          onClick={() => handleNavItemClick('home')}
          initial={{ x: 80 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
          <div style={{ ...getDebugBorderStyle(debugBorders, 'green') }}  >
            {PROFILE_SURNAME} {PROFILE_NAME}
          </div>
        </motion.div>
        <motion.ul
          className="links"
          style={{
            ...navbarStyles.navbarMenuItems,
            ...getDebugBorderStyle(debugBorders, 'green')
          }}
          initial={{ x: -80 }}
          animate={{ x: 0 }}
          exit={{ x: 80 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
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