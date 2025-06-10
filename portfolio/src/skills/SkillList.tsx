import { mainSkills, secondarySkills } from './SkillList.const';
import { skillListStyles } from './SkillList.styles';


export function SkillList() {

  function renderMainSkills() {
    return mainSkills.map((skill) => (
      <span key={skill} style={skillListStyles.mainSkill}>{skill}</span>
    ));
  }
  
  function renderSecondarySkills() {
    return secondarySkills.map((skill, i) => (
      <span
        key={skill}
        style={i < 8 ? skillListStyles.secondarySkill60 : skillListStyles.secondarySkill40}
      >
        {skill}
      </span>
    ));
  }

  return (
    <section style={{ width: '100%' }}>
      <div style={skillListStyles.skillsBlock}>
        <div style={skillListStyles.mainSkills}>{renderMainSkills()}</div>
        <div style={skillListStyles.secondarySkills}>{renderSecondarySkills()}</div>
      </div>
    </section>
  );
} 