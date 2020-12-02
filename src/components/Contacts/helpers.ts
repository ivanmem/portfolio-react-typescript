import github from '../../assets/icons/github.svg';
import vk from '../../assets/icons/vk.svg';
import telegram from '../../assets/icons/telegram.svg';
import { ContactType } from './ContactType';
import { Contact } from './Contact';

export const contacts: Contact[] = [
  {
    url: 'https://github.com/ivanmem',
    type: ContactType.Site,
    icon: github,
  },
  {
    url: 'https://vk.com/ivanmem',
    type: ContactType.Site,
    icon: vk,
  },
  {
    url: 'https://t.me/ivanmem',
    type: ContactType.Site,
    icon: telegram,
  },
];
