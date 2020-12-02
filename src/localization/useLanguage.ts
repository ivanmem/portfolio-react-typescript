import { useTranslation } from 'react-i18next';
import { Language } from './i18n';

export function useLanguage() {
  return useTranslation().i18n.language as Language;
}
