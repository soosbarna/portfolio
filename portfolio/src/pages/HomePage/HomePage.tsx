import { useEffect, useRef, useState } from 'react';
import { NameTitle } from '../../components/NameTitle/NameTitle';
import { Navbar } from '../../components/Navbar/Navbar';
import { ProjectsSection } from '../../components/ProjectsSection/ProjectsSection';
import { PassionsPage } from '../Passions/Passions';
import { AboutMePage } from '../AboutMe/AboutMe';
import { ContactPage } from '../Contact/Contact';
import { BehindPortfolioPage } from '../BehindThePortfolio/BehindThePortfolio';
import { SkillList } from '../../skills/SkillList';
import { homePageStyles, dynamicContentContainer, getBgAnimationStyle, getDebugBorderStyle } from './HomePage.style';
import { useDynamicLayoutWidths } from '../../globalStyle';
import { useToggles } from '../../ToggleContext';

export function HomePage() {
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const passionsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const behindPortfolioRef = useRef<HTMLDivElement>(null);
  const snapContainerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState<'home' | 'projects' | 'passions' | 'about' | 'contact' | 'behind'>('home');
  const widths = useDynamicLayoutWidths();
  const { reduceMotion, setReduceMotion, debugBorders, setDebugBorders } = useToggles();

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
        <div style={{
          ...homePageStyles.gradientBg,
          ...getBgAnimationStyle(reduceMotion),
          ...getDebugBorderStyle(debugBorders, 'magenta'),
        }} />
        <div ref={homeRef} id="home" style={homePageStyles.section}>
          <div style={{ ...homePageStyles.bg, ...getDebugBorderStyle(debugBorders, 'blue') }}>
            <div style={{ ...homePageStyles.content, ...getDebugBorderStyle(debugBorders, 'green') }}>
              <div style={{ ...dynamicContentContainer(widths), ...getDebugBorderStyle(debugBorders, 'orange') }}>
                <NameTitle />
                <SkillList />
              </div>
            </div>
          </div>
        </div>
        <div ref={projectsRef} id="projects" style={homePageStyles.section}>
          <div style={{ ...homePageStyles.bg, ...getDebugBorderStyle(debugBorders, 'blue') }}>
            <div style={{ ...homePageStyles.content, ...getDebugBorderStyle(debugBorders, 'green') }}>
              <div style={{ ...dynamicContentContainer(widths), ...getDebugBorderStyle(debugBorders, 'orange') }}>
                <ProjectsSection />
              </div>
            </div>
          </div>
        </div>
        <div ref={passionsRef} id="passions" style={homePageStyles.section}>
          <div style={{ ...homePageStyles.bg, ...getDebugBorderStyle(debugBorders, 'blue') }}>
            <div style={{ ...homePageStyles.content, ...getDebugBorderStyle(debugBorders, 'green') }}>
              <div style={{ ...dynamicContentContainer(widths), ...getDebugBorderStyle(debugBorders, 'orange') }}>
                <PassionsPage />
              </div>
            </div>
          </div>
        </div>
        <div ref={aboutMeRef} id="about" style={homePageStyles.section}>
          <div style={{ ...homePageStyles.bg, ...getDebugBorderStyle(debugBorders, 'blue') }}>
            <div style={{ ...homePageStyles.content, ...getDebugBorderStyle(debugBorders, 'green') }}>
              <div style={{ ...dynamicContentContainer(widths), ...getDebugBorderStyle(debugBorders, 'orange') }}>
                <AboutMePage />
              </div>
            </div>
          </div>
        </div>
        <div ref={contactRef} id="contact" style={homePageStyles.section}>
          <div style={{ ...homePageStyles.bg, ...getDebugBorderStyle(debugBorders, 'blue') }}>
            <div style={{ ...homePageStyles.content, ...getDebugBorderStyle(debugBorders, 'green') }}>
              <div style={{ ...dynamicContentContainer(widths), ...getDebugBorderStyle(debugBorders, 'orange') }}>
                <ContactPage />
              </div>
            </div>
          </div>
        </div>
        <div ref={behindPortfolioRef} id="behind" style={homePageStyles.section}>
          <div style={{ ...homePageStyles.bg, ...getDebugBorderStyle(debugBorders, 'blue') }}>
            <div style={{ ...homePageStyles.content, ...getDebugBorderStyle(debugBorders, 'green') }}>
              <div style={{ ...dynamicContentContainer(widths), ...getDebugBorderStyle(debugBorders, 'orange') }}>
                <BehindPortfolioPage />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1000, display: 'flex', gap: '1rem' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem' }}>
          <input
            type="checkbox"
            checked={reduceMotion}
            onChange={e => setReduceMotion(e.target.checked)}
          />
          Reduce Motion
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem' }}>
          <input
            type="checkbox"
            checked={debugBorders}
            onChange={e => setDebugBorders(e.target.checked)}
          />
          Debug Borders
        </label>
      </div>
    </div>
  );
} 