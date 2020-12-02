import React from 'react';
import './MyProjects.scss';
import { useTranslation } from 'react-i18next';
import Game from '../Game/Game';

export default function MyProjects() {
  const { t } = useTranslation();

  return (
    <section className="my-projects">
      <dl>
        <dt>{t('my projects')}:</dt>
        <dd>
          <a href="https://vk.com/animecm" rel="noreferrer" target="_blank">
            {t('amadeus')}
          </a>
        </dd>
        <dd>
          <a
            href="https://vk.com/communitykeeper"
            rel="noreferrer"
            target="_blank"
          >
            {t('communitykeeper')}
          </a>
        </dd>
        <dd>
          <a
            href="https://github.com/ivanmem/portfolio-react-typescript"
            rel="noreferrer"
            target="_blank"
          >
            {t('current site')}
          </a>
        </dd>
        <dd>{t('other')}..</dd>
      </dl>
      <Game />
    </section>
  );
}
