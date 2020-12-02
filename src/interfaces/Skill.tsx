import { Language } from '../localization/i18n';

export default interface Skill {
  label: string;
  icon?: any;
  textDict: Record<Language, string>;
}
