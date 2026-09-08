// ------------------------------------------------------------------
// All editable site content lives here. Update text, links and lists
// in this single file — the components just render it.
// ------------------------------------------------------------------

export const siteConfig = {
  name: 'Ahmed Mujahid',
  role: 'Software Engineer',
  url: 'https://ahmedmujahid.dev', // replace with your real deployed domain
  email: 'Ahmedmujahid2004@gmail.com',
  whatsapp: 'https://wa.me/AhmedMu14',
  cvPath: '/cv/Ahmed_Mujahid.pdf', // drop your CV file into /public with this exact name
  description:
    "Ahmed Mujahid is a software engineer who builds accessible, interactive, and high-performance websites with React, Next.js and modern frontend tooling.",
};

export const about = {
  eyebrow: '$ whoami',
  heading: 'Who am I',
  paragraphs: [
    "Hello! My name is Ahmed Mujahid, and I enjoy creating things that live on the internet. My interest in Software Engineering started back in 2023 when I decided to work on my first project. It turned out that putting together a simple website taught me a lot about HTML and CSS!",
    "Since then, I've had the opportunity to collaborate with talented professionals, which has sharpened my skills and accelerated my growth. These days, I'm passionate about building accessible and inclusive websites that make a difference.",
  ],
};

export const skills = {
  eyebrow: '$ ls skills/',
  heading: 'What I work with',
  items: [
    { name: 'HTML5', icon: 'html5' },
    { name: 'CSS3', icon: 'css3' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'React JS', icon: 'react' },
    { name: 'Next JS', icon: 'nextjs' },
    { name: 'Redux', icon: 'redux' },
    { name: 'Firebase', icon: 'firebase' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'Framer Motion', icon: 'framer' },
    { name: 'Git', icon: 'git' },
    { name: 'Bitbucket', icon: 'bitbucket' },
    { name: 'Figma', icon: 'figma' },
  ],
};

export const services = {
  eyebrow: '$ cat services.md',
  heading: 'What I can do',
  items: [
    {
      title: 'Web Development',
      description:
        'I use various web technologies to develop attractive, creative, interactive, responsive and functional website layouts.',
      icon: 'code',
    },
    {
      title: 'Frontend Design',
      description:
        'I use various frontend design tools to develop attractive, creative, interactive, responsive and functional website layouts.',
      icon: 'design',
    },
  ],
};

// Add / remove project cards freely — each needs a name and a link.
export const works = {
  eyebrow: '$ ls -la projects/',
  heading: 'I build real value',
  tabs: [
    {
      key: 'html-css',
      label: 'HTML / CSS',
      projects: [
        { name: 'Fitness Hub', link: 'https://fitness-hub-one.vercel.app/' },
        { name: 'Makeup City', link: 'https://makeup-city.vercel.app/' },
        { name: 'Fean Resturent', link: 'https://fean-website.vercel.app/' },
      ],
    },
    {
      key: 'javascript',
      label: 'JavaScript',
      projects: [
        { name: 'BMI Calculator', link: 'https://bmi-eta-taupe.vercel.app/' },
        { name: 'Mini Calculator', link: '#' },
        { name: 'TO Do App', link: 'https://to-do-list-virid-omega.vercel.app/' },
      ],
    },
    {
      key: 'react',
      label: 'React JS',
      projects: [
        { name: 'Itechvo', link: 'https://itechvo.vercel.app/' },
        { name: 'Weather App', link: 'https://weather-app-lime-six-44.vercel.app/' },
      ],
    },
  ],
};

export const experience = {
  eyebrow: '$ history | grep experience',
  heading: 'Where I worked',
  items: [
    {
      title: 'Frontend Development',
      company: 'Sofject',
      period: 'Aug 2025 - Sep 2026',
      description: [
        "Developed and maintained web components in React.js and JavaScript, collaborating with the design team to translate mockups into functional interfaces.",
        "Applied modern front-end frameworks.",
        "Participated in code reviews and version control workflows using Git, GitHub and Bitbucket."
      ]
    },
  ],
};

export const contact = {
  eyebrow: 'HIRE ME',
  heading: 'Get in Touch',
  description:
    "I'm interested in freelance opportunities — especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to use the form.",
  sayHello: 'Say Hello',
};
