import React from 'react';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import './Skills.scss';
import { useTranslation } from 'react-i18next';
import SkillComponent from '../SkillComponent/SkillComponent';
import Skill from '../../../interfaces/Skill';

const mySkills: Skill[] = [
  {
    label: 'C#',
    textDict: {
      'ru-RU': 'C его помощью пишу Амадеуса начиная с 2019 года',
      'en-US': 'With his help, I am writing Amadeus starting in 2019',
    },
  },
  {
    label: 'TypeScript',
    icon: TagFacesIcon,
    textDict: {
      'ru-RU': 'Основной язык, который использую на работе по сей день',
      'en-US': 'The main language I use at work to this day',
    },
  },
  {
    label: 'JavaScript',
    textDict: {
      'ru-RU': 'Из-за использования TypeScript его знаю тоже',
      'en-US': 'Because of the use of TypeScript, I know him too',
    },
  },
  {
    label: 'React',
    textDict: {
      'ru-RU':
        'На последней работе его не используем, но я поддерживаю знания по последним обновлениям библиотеки',
      'en-US':
        "We don't use it at the last job, but I maintain knowledge of the latest library updates",
    },
  },
  {
    label: 'Vue 3',
    textDict: {
      'ru-RU': 'Последнее время использую этот фреймворк',
      'en-US': "I've been using this framework lately",
    },
  },
];

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section className="skills">
      <div>
        <h2>{t('skills title')}</h2>
        <div className="skills__list">
          {mySkills.map((data) => (
            <SkillComponent key={data.label} skill={data} />
          ))}
        </div>
      </div>
    </section>
  );
}
