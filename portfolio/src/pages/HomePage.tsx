import { useEffect, useRef, useState } from 'react';
import { NameTitle } from '../components/NameTitle/NameTitle';
import { Navbar } from '../components/Navbar/Navbar';
import { ProjectsSection } from '../components/ProjectsSection/ProjectsSection';
import { SkillList } from '../skills/SkillList';
import { homePageStyles } from './HomePage.styles';

export function HomePage() {
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const snapContainerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState<'home' | 'projects'>('home');

  // Scroll handler for navbar
  function handleNavClick(section: 'home' | 'projects') {
    const ref = section === 'home' ? homeRef : projectsRef;
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  // Track which section is in view (50% rule) on snap container
  useEffect(() => {
    const snapContainer = snapContainerRef.current;
    if (!snapContainer) return;
    const handleScroll = () => {
      const homeRect = homeRef.current?.getBoundingClientRect();
      const projectsRect = projectsRef.current?.getBoundingClientRect();
      if (!homeRect || !projectsRect) return;
      const viewportMiddle = window.innerHeight / 2;
      const homeVisible = homeRect.top < viewportMiddle && homeRect.bottom > viewportMiddle;
      const projectsVisible = projectsRect.top < viewportMiddle && projectsRect.bottom > viewportMiddle;
      if (projectsVisible) {
        setCurrentSection('projects');
      } else if (homeVisible) {
        setCurrentSection('home');
      }
    };
    snapContainer.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => snapContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div style={homePageStyles.navbar}>
        <Navbar currentSection={currentSection} onNavClick={handleNavClick} />
      </div>
      <div ref={snapContainerRef} style={homePageStyles.snapContainer}>
        <div style={homePageStyles.gradientBg} />
        <div ref={homeRef} id="home" style={homePageStyles.section}>
          <div style={homePageStyles.bg}>
            <div style={homePageStyles.content}>
              <div style={homePageStyles.content60}>
                <div style={{ marginBottom: '6rem' }}>
                  <NameTitle
                    currentSection={currentSection}
                    onJumpHome={() => {
                      homeRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  />
                </div>
                <div style={{ marginBottom: '6rem' }}>
                  <SkillList />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={projectsRef} id="projects" style={homePageStyles.section}>
          <div style={homePageStyles.bg}>
            <div style={homePageStyles.content}>
              <div style={homePageStyles.content60}>
                <ProjectsSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 