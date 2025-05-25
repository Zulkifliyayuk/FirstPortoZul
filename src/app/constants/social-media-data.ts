import { StaticImageData } from 'next/image';

import iconEarth from '@/assets/icons/SocialIcon.png';
import iconInstagram from '@/assets/icons/SocialIG.png';
import iconLinkedin from '@/assets/icons/SocialLink.png';

type Icon = {
  href: string;
  src: StaticImageData;
  alt: string;
};

export const socialMediaData: Icon[] = [
  {
    href: 'https://www.earth.com/',
    src: iconEarth,
    alt: 'Earth',
  },
  {
    href: 'https://www.instagram.com/',
    src: iconInstagram,
    alt: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/',
    src: iconLinkedin,
    alt: 'LinkedIn',
  },
];
