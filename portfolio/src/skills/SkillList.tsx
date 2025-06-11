import { primarySkills, secondarySkills, tertiarySkills } from './SkillList.const';
import { skillListStyles } from './SkillList.styles';

export function SkillList() {
  function renderSkills() {
    const skills = primarySkills.concat(secondarySkills).concat(tertiarySkills);
    return skills.map((skill, i) => {
      let style = {};
      if (i < primarySkills.length) {
        style = skillListStyles.mainSkills;
      } else if (i < primarySkills.length + secondarySkills.length) {
        style = skillListStyles.secondarySkills;
      } else {
        style = skillListStyles.tertiarySkill;
      }

      return (
        <span
          key={skill}
          style={{
            ...style,
            marginRight: i === skills.length - 1 ? 'auto' : undefined
          }}>
            {skill}
        </span>
      );
    });
  }

  return (
    <div style={skillListStyles.skillsBlock}>
      {renderSkills()}
    </div>
  );
}
