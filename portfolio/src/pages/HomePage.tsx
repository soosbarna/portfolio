import { useEffect, useRef, useState } from 'react';
import { NameTitle } from '../components/NameTitle/NameTitle';
import { Navbar } from '../components/Navbar/Navbar';
import { ProjectsSection } from '../components/ProjectsSection/ProjectsSection';
import { PassionsPage } from './PassionsPage';
import { AboutMePage } from './AboutMePage';
import { ContactPage } from './ContactPage';
import { BehindPortfolioPage } from './BehindPortfolioPage';
import { SkillList } from '../skills/SkillList';
import { homePageStyles } from './HomePage.styles';

export function HomePage() {
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const passionsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const behindPortfolioRef = useRef<HTMLDivElement>(null);
  const snapContainerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState<'home' | 'projects' | 'passions' | 'about' | 'contact' | 'behind'>('home');

  // Scroll handler for navbar
  function handleNavClick(section: 'home' | 'projects' | 'passions' | 'about' | 'contact' | 'behind') {
    const refs = {
      home: homeRef,
      projects: projectsRef,
      passions: passionsRef,
      about: aboutMeRef,
      contact: contactRef,
      behind: behindPortfolioRef,
    };
    refs[section].current?.scrollIntoView({ behavior: 'smooth' });
  }

  // Track which section is in view (50% rule) on snap container
  useEffect(() => {
    const snapContainer = snapContainerRef.current;
    if (!snapContainer) return;
    const handleScroll = () => {
      const refs = {
        home: homeRef,
        projects: projectsRef,
        passions: passionsRef,
        about: aboutMeRef,
        contact: contactRef,
        behind: behindPortfolioRef,
      };
      const viewportMiddle = window.innerHeight / 2;
      
      for (const [section, ref] of Object.entries(refs)) {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) continue;
        const isVisible = rect.top < viewportMiddle && rect.bottom > viewportMiddle;
        if (isVisible) {
          setCurrentSection(section as typeof currentSection);
          break;
        }
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
                    //currentSection={currentSection}
                    //onJumpHome={() => {
                      //homeRef.current?.scrollIntoView({ behavior: 'smooth' });
                    //}}
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
        <div ref={passionsRef} id="passions" style={homePageStyles.section}>
          <div style={homePageStyles.bg}>
            <div style={homePageStyles.content}>
              <div style={homePageStyles.content60}>
                <PassionsPage />
              </div>
            </div>
          </div>
        </div>
        <div ref={aboutMeRef} id="about" style={homePageStyles.section}>
          <div style={homePageStyles.bg}>
            <div style={homePageStyles.content}>
              <div style={homePageStyles.content60}>
                <AboutMePage />
              </div>
            </div>
          </div>
        </div>
        <div ref={contactRef} id="contact" style={homePageStyles.section}>
          <div style={homePageStyles.bg}>
            <div style={homePageStyles.content}>
              <div style={homePageStyles.content60}>
                <ContactPage />
              </div>
            </div>
          </div>
        </div>
        <div ref={behindPortfolioRef} id="behind" style={homePageStyles.section}>
          <div style={homePageStyles.bg}>
            <div style={homePageStyles.content}>
              <div style={homePageStyles.content60}>
                <BehindPortfolioPage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 