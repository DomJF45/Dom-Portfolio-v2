
export interface iLinkItem {
  title: string;
  newWindow?: boolean;
  path: string;
}

export const linkItems: iLinkItem[] = [ 
  {
    title: 'Projects',
    path: '/projects'
  },
  {
    title: 'Technology',
    path: '/tech'
  }, 
  {
    title: 'Resume',
    path: '/resume'
  },
  {
    title: 'Contact',
    newWindow: true,
    path: 'mailto: webdevbydom@gmail.com'
  },
]
