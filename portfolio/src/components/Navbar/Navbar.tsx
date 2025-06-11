import { motion, AnimatePresence } from 'framer-motion';
import { NAVBAR_ITEMS } from './Navbar.const';
import { useState } from 'react';
import './Navbar.css';
import { PROFILE_NAME, PROFILE_SURNAME } from '../NameTitle/NameTitle.const';

type Section = 'home' | 'projects' | 'passions' | 'about' | 'contact' | 'behind';

export function Navbar({ currentSection, onNavClick }: { currentSection: Section, onNavClick: (section: Section) => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (sectionKey: Section) => {
    onNavClick(sectionKey);
    setIsMobileMenuOpen(false);
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

  const menuShift = currentSection === 'home' ? 0 : 40;
  const transition = { type: 'spring', stiffness: 200, damping: 25 };

  return (
    <nav className="navbar">
      <div className={`navbarContent ${currentSection === 'home' ? 'navbarContent--centered' : 'navbarContent--right'}`}>
        <motion.div
          className="navbarProfileName"
          onClick={() => handleNavItemClick('home')}
          animate={{
            opacity: currentSection === 'home' ? 0 : 1,
            x: currentSection === 'home' ? -20 : 0,
            width: currentSection === 'home' ? 0 : 'auto',
          }}
          transition={transition}
          style={{
            minWidth: currentSection === 'home' ? 0 : 'max-content',
            overflow: 'hidden',
            pointerEvents: currentSection === 'home' ? 'none' : 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          {PROFILE_SURNAME} {PROFILE_NAME}
        </motion.div>
        <motion.ul
          className="links"
          animate={{ x: menuShift }}
          transition={transition}
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
      </div>

      {/* Mobile Menu Button */}
      <div className="mobileMenuButton" onClick={toggleMobileMenu}>
        <div className="hamburgerLine" style={{
          transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
        }} />
        <div className="hamburgerLine" style={{
          opacity: isMobileMenuOpen ? 0 : 1
        }} />
        <div className="hamburgerLine" style={{
          transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
        }} />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="mobileMenu"
          >
            <div 
              className="mobileProfileName"
              onClick={() => handleNavItemClick('home')}
            >
              <span style={{ borderBottom: '4px solid #111' }}>{PROFILE_SURNAME}</span>
              <span>{PROFILE_NAME}</span>
            </div>
            <ul className="mobileLinks">
              {NAVBAR_ITEMS.map((item) => {
                const sectionKey = getSectionKey(item);
                return (
                  <motion.li
                    key={item}
                    className="mobileLink"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavItemClick(sectionKey)}
                  >
                    {item}
                    {currentSection === sectionKey && (
                      <motion.div
                        className="mobileActiveIndicator"
                        layoutId="mobileActiveSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30
                        }}
                      />
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}