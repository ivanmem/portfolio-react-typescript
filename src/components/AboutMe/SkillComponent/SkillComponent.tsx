import React from 'react';
import Skill from '../../../interfaces/Skill';
import './SkillComponent.scss';
import { showDefault } from '../../../common/toasters';
import { useLanguage } from '../../../localization/useLanguage';

interface Props {
  skill: Skill;
}

export default function SkillComponent({ skill }: Props) {
  const lang = useLanguage();
  return (
    <div className="skill" onClick={() => showDefault(skill.textDict[lang])}>
      {skill.icon && <skill.icon />}&nbsp;{skill.label}
    </div>
  );
}
