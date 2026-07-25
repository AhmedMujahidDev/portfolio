import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaBitbucket, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiRedux, SiFirebase, SiTailwindcss, SiFramer } from 'react-icons/si';
import { FaCode, FaPenRuler } from 'react-icons/fa6';

export const skillIconMap = {
  html5: { Icon: FaHtml5, color: '#e34f26' },
  css3: { Icon: FaCss3Alt, color: '#1572b6' },
  javascript: { Icon: FaJs, color: '#f7df1e' },
  react: { Icon: FaReact, color: '#61dafb' },
  nextjs: { Icon: SiNextdotjs, color: '#ffffff' },
  redux: { Icon: SiRedux, color: '#764abc' },
  firebase: { Icon: SiFirebase, color: '#ffca28' },
  tailwind: { Icon: SiTailwindcss, color: '#38bdf8' },
  framer: { Icon: SiFramer, color: '#7dd3fc' },
  git: { Icon: FaGitAlt, color: '#f05032' },
  bitbucket: { Icon: FaBitbucket, color: '#0052cc' },
  figma: { Icon: FaFigma, color: '#a259ff' },
};

export const serviceIconMap = {
  code: { Icon: FaCode, color: '#3da9fc' },
  design: { Icon: FaPenRuler, color: '#3ddc97' },
};
