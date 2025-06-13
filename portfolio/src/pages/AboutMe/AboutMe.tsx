import { aboutMeStyles } from './AboutMe.style';


export function AboutMePage() {
  return (
    <div style={aboutMeStyles.sectionStyles}>
      <div>
        <div style={aboutMeStyles.sectionTitleStyles}>Background</div>
        <div style={aboutMeStyles.sectionDescStyles}>
          I'm a passionate full-stack developer with a strong foundation in both front-end and back-end technologies. My journey in software development began during my university years, where I discovered my love for creating intuitive and efficient solutions.
        </div>
      </div>
      <div>
        <div style={aboutMeStyles.sectionTitleStyles}>Experience</div>
        <div style={aboutMeStyles.sectionDescStyles}>
          With experience in various projects ranging from web applications to data analysis tools, I've developed a comprehensive understanding of modern development practices and technologies. I'm particularly interested in creating user-friendly interfaces and robust backend systems.
        </div>
      </div>
      <div>
        <div style={aboutMeStyles.sectionTitleStyles}>Goals</div>
        <div style={aboutMeStyles.sectionDescStyles}>
          I'm constantly seeking to expand my knowledge and skills in software development. My goal is to contribute to meaningful projects that make a positive impact while growing as a developer and team member.
        </div>
      </div>
    </div>
  );
}