export interface NavdataProps {
    id: number;
    title: string;
    type: 'link' | 'button';
    href?: string;
  }
  
  export const navdata: Array<NavdataProps> = [
    {
      id: 1,
      title: 'HOME',
      type: 'link',
      href: '/',
    },
    {
      id: 2,
      title: 'ABOUT US',
      type: 'link',
      href: '#about',
    },
    {
      id: 3,
      title: 'PORTFOLIO',
      type: 'link',
      href: '/portfolio',
    },
    {
      id: 4,
      title: 'TESTIMONIAL',
      type: 'link',
      href: '/testimonial',
    },
    {
      id: 5,
      title: 'CONTACT',
      type: 'link',
      href: '/contact', 
    },
  ];