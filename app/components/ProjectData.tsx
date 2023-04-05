import InProgress from "./ProjectTags/InProgress";
import LangTag from "./ProjectTags/LangTag";
import React from 'react'

export interface iProjectData {
  name: string;
  bio: string;
  inProgress?: React.ReactNode;
  languages: string[];
  img: string;
  url: string;
}

export const ProjectData: iProjectData[] = [
  {
    name: 'MyACT',
    bio: 'An Acceptance and Commitment Therapy Worksheet app',
    img: 'https://ik.imagekit.io/wvlrlc0tr/Portfolio/MyACT.png?updatedAt=1680459349671',
    url: '/projects/myact/',
    inProgress: <InProgress />,
    languages: [
      "React",
      "Node.JS",
      "Typescript"
    ]
  },
  {
    name: 'TarotCake',
    bio: 'A daily tarot card generator',
    img: 'https://ik.imagekit.io/wvlrlc0tr/Portfolio/TarotCake.png?updatedAt=1680459350433',
    url: '/projects/tarotcake/',
    inProgress: <InProgress />,
    languages: [
      "React",
      "Node.JS",
      "Typescript",
    ]
  },
  {
    name: 'LabRats',
    bio: 'A task management tool aimed at Research Laboratories',
    img: 'https://ik.imagekit.io/wvlrlc0tr/Portfolio/labrats.png?updatedAt=1680449750578',
    url: '/projects/labrats/',
    languages: [
      "React",
      "Node.JS",
      "JavaScript",
    ]
  },
  {
    name: 'NEAARRD Lab',
    bio: 'A website for the NEAARRD Lab @ Kennesaw State University',
    img: 'https://ik.imagekit.io/wvlrlc0tr/Portfolio/neaarrdlab.png?updatedAt=1680449750578',
    url: 'https://www.neaarrdlab.org/',
    languages: [
      "React",
      "JavaScript",
      "CSS"
    ]
  },
  {
    name: 'Vaping Dependency Task',
    bio: 'A cognitive psychological task investigating executive functioning in adolescents addicted to vaping devices',
    img: 'https://ik.imagekit.io/wvlrlc0tr/Portfolio/vapDep.png?updatedAt=1680449761860',
    url: '',
    languages: [
      "JavaScript",
      "HTML",
      "CSS"
    ]
  }
]
