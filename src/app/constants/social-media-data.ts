import { StaticImageData } from 'next/image';

import iconEarth from '@/icons/SocialIcon.png';
import iconInstagram from '@/icons/SocialIG.png';
import iconLinkedin from '@/icons/SocialLink.png';

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
