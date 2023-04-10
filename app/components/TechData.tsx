import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3, FaJava, FaPython, FaRust } from 'react-icons/fa'
import { SiMysql, SiTypescript, SiMongodb, SiNeovim, SiExpress, SiCplusplus, SiRubyonrails, SiGraphql } from 'react-icons/si'
import { BsGit } from 'react-icons/bs'
import { TbBrandVscode } from 'react-icons/tb'
import React from 'react';

const iconSize = 30;

const proficient = '#c19996';
const ides = '#4F5E50';
const some = '#A2BACE';
const learning = '#5b5b71';

const colorSchemeLight = {
  proficient: '#C1A7A5',
  ides: '#A2B5A3',
  some: '#BBC8D3',
  learning: '#9E9EB1',
}

const colorSchemeDark = {
  proficient: '#c19996',
  ides: '#4F5E50',
  some: '#A2BACE',
  learning: '#5b5b71',
}

interface iTechData {
  name: string;
  icon: React.ReactNode;
  level: 'Proficient' | 'Some' | 'Learning' | 'IDEs',
  lightColor: string;
  darkColor: string;
}

export const techData: iTechData[] = [
  {
    name: 'React',
    icon: <FaReact size={iconSize} />,
    level: 'Proficient',
    lightColor: colorSchemeLight.proficient,
    darkColor: colorSchemeDark.proficient
  },
  {
    name: 'Node.JS',
    icon: <FaNodeJs size={iconSize} />,
    level: 'Proficient',
    lightColor: colorSchemeLight.proficient,
    darkColor: colorSchemeDark.proficient  
  },
  {
    name: 'Express.JS',
    icon: <SiExpress size={iconSize} />,
    level: 'Proficient',
    lightColor: colorSchemeLight.proficient,
    darkColor: colorSchemeDark.proficient
  },
  {
    name: 'Typescript',
    icon: <SiTypescript size={iconSize} />,
    level: 'Proficient',
    lightColor: colorSchemeLight.proficient,
    darkColor: colorSchemeDark.proficient    
  },
  {
    name: 'JavaScript',
    icon: <FaJs size={iconSize}/>,
    level: 'Proficient',
    lightColor: colorSchemeLight.proficient,
    darkColor: colorSchemeDark.proficient  
  },
  {
    name: 'SQL',
    icon: <SiMysql size={iconSize} />,
    level: 'Some',
    lightColor: colorSchemeLight.some,
    darkColor: colorSchemeDark.some    
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb size={iconSize} />,
    level: 'Proficient',
    lightColor: colorSchemeLight.proficient,
    darkColor: colorSchemeDark.proficient
  },
  {
    name: 'HTML',
    icon: <FaHtml5 size={iconSize}/>,
    level: 'Proficient',
    lightColor: colorSchemeLight.proficient,
    darkColor: colorSchemeDark.proficient
    
  },
  {
    name: 'CSS',
    icon: <FaCss3 size={iconSize}/>,
    level: 'Proficient',
    lightColor: colorSchemeLight.proficient,
    darkColor: colorSchemeDark.proficient  
  },
  {
    name: 'NeoVim',
    icon: <SiNeovim size={iconSize} />,
    level: 'IDEs',
    lightColor: colorSchemeLight.ides,
    darkColor: colorSchemeDark.ides
  },
  {
    name: 'VS Code',
    icon: <TbBrandVscode size={iconSize} />,
    level: 'IDEs',
    lightColor: colorSchemeLight.ides,
    darkColor: colorSchemeDark.ides  
  }, 
  {
    name: 'Java',
    icon: <FaJava size={iconSize} />,
    level: 'Some',
    lightColor: colorSchemeLight.some,
    darkColor: colorSchemeDark.some 
  },
  {
    name: 'C++',
    icon: <SiCplusplus size={iconSize} />,
    level: 'Some',
    lightColor: colorSchemeLight.some,
    darkColor: colorSchemeDark.some  
  },
  {
    name: 'Python',
    icon: <FaPython size={iconSize} />,
    level: 'Some',
    lightColor: colorSchemeLight.some,
    darkColor: colorSchemeDark.some
  },
  {
    name: 'Git',
    icon: <BsGit size={iconSize} />,
    level: 'Some',
    lightColor: colorSchemeLight.some,
    darkColor: colorSchemeDark.some  
  },
  {
    name: 'Rust',
    icon: <FaRust size={iconSize} />,
    level: 'Learning',
    lightColor: colorSchemeLight.learning,
    darkColor: colorSchemeDark.learning
  },
  {
    name: 'React Native',
    icon: <FaReact size={iconSize} />,
    level: 'Learning',
    lightColor: colorSchemeLight.learning,
    darkColor: colorSchemeDark.learning
  },
  {
    name: 'Ruby on Rails',
    icon: <SiRubyonrails size={iconSize} />,
    level: 'Learning',
    lightColor: colorSchemeLight.learning,
    darkColor: colorSchemeDark.learning
  },
  {
    name: 'GraphQL',
    icon: <SiGraphql size={iconSize} />,
    level: 'Learning',
    lightColor: colorSchemeLight.learning,
    darkColor: colorSchemeDark.learning
  }
]

