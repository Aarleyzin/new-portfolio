export type ProductVisual = 'base90' | 'glico' | 'australia';

export const profile = {
  name: 'Arlindo Orsini',
  initials: 'AO',
  email: 'aarleyzin@gmail.com',
  github: 'https://github.com/Aarleyzin',
  linkedin: 'https://www.linkedin.com/in/aarleyzin/',
};

export const content = {
  menu: 'Open menu',
  closeMenu: 'Close menu',
  theme: 'Toggle color theme',
  nav: [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  resume: 'Resume',
  hero: {
    eyebrow: 'Software Engineer · Based in Brazil',
    titleStart: "Hi, I'm ",
    titleHighlight: 'Aarley.',
    supportingLines: ['Building projects that', 'people enjoy using.'],
    primary: 'View Projects',
  },
  products: {
    items: [
      {
        name: 'Base90',
        subtitle: 'Full-stack Restaurant & POS Management System',
        description:
          'Base90 is a full-stack web application built to manage restaurant and beverage operations. The project includes point of sale, online menu, cart flow, order management, inventory control, cash register, customers, sales history and business dashboards.',
        impact:
          'This project demonstrates my ability to build complete operational systems with real business rules, structured data, responsive interfaces and scalable backend architecture.',
        tech: ['Next.js', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'Docker', 'REST APIs'],
        features: ['Point of sale', 'Online menu', 'Order management', 'Inventory control', 'Cash register', 'Dashboard analytics'],
        image: '/projects/base90.png',
        imageAlt: 'Base90 POS and restaurant management dashboard screens',
        imageClass: 'base90',
      },
      {
        name: 'Glico AI',
        subtitle: 'Mobile-first Health Companion Concept',
        description:
          'Glico AI is a mobile-first health companion concept designed to help people with diabetes track glucose levels, meals, progress and personal health insights through a simple and friendly interface.',
        impact:
          'This project explores how mobile development and AI-assisted features can support better daily health tracking while keeping the experience accessible, responsible and easy to use.',
        tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'AI'],
        features: ['Glucose tracking', 'Meal journal', 'Progress dashboard', 'AI insights', 'Mobile-first UX', 'Health data organization'],
        image: '/projects/glico-ai.png',
        imageAlt: 'Glico AI mobile health companion screens',
        imageClass: 'glico',
      },
      {
        name: 'Partiu Australia',
        subtitle: 'AI-powered Immigration Planning Concept',
        description:
          'Partiu Australia is an AI-powered immigration planning platform concept built to help Brazilians organize their move to Australia through personalized roadmaps, checklists, visa guidance, curated resources and AI assistance.',
        impact:
          'This project demonstrates product thinking, user journey design, AI integration and the ability to organize complex information into a clear and practical digital experience.',
        tech: ['Next.js', 'TypeScript', 'Node.js', 'Supabase', 'AI', 'REST APIs'],
        features: ['Personalized roadmap', 'AI assistant', 'Visa guidance', 'Checklist system', 'Curated resources', 'Community layer'],
        image: '/projects/partiu-australia.png',
        imageAlt: 'Partiu Australia mobile app screens',
        imageClass: 'australia',
      },
    ],
  },
  about: {
    titleStart: 'About ',
    highlight: 'Me',
    role: 'Software Engineer',
    paragraphs: [
      "I'm a Software Engineer with over two years of hands-on experience building web, mobile and AI-powered products. Right now I'm studying Systems Analysis and Development at Estácio, while sharpening my engineering skills through Zero To Mastery Academy.",
      "I like turning ideas into things people actually use — software that works well, feels intuitive and holds up over time. Most of what I know today came from real projects, not just theory, and I'm still very much in that mode: building, breaking things, and figuring out better ways to do it.",
    ],
    cards: [
      {
        icon: 'Code2',
        title: 'Building',
        description:
          'Turning ideas into scalable web, mobile and AI-powered products with clean architecture and maintainable code.',
      },
      {
        icon: 'Brain',
        title: 'Product Thinking',
        description:
          "I enjoy solving real business problems by creating software that's simple, intuitive and built for people.",
      },
      {
        icon: 'Sprout',
        title: 'Continuous Growth',
        description:
          "I'm constantly learning through real projects, modern technologies and continuous education.",
      },
    ],
  },
  skills: {
    title: 'My Tech ',
    highlight: 'Stack',
    filters: ['All', 'Frontend', 'Backend', 'Mobile', 'Databases', 'Tools', 'AI'] as const,
    items: [
      { name: 'React', category: 'Frontend' },
      { name: 'Next.js', category: 'Frontend' },
      { name: 'TypeScript', category: 'Frontend' },
      { name: 'JavaScript', category: 'Frontend' },
      { name: 'Tailwind CSS', category: 'Frontend' },
      { name: 'HTML/CSS', category: 'Frontend' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'Prisma', category: 'Backend' },
      { name: 'REST APIs', category: 'Backend' },
      { name: 'React Native', category: 'Mobile' },
      { name: 'Expo', category: 'Mobile' },
      { name: 'PostgreSQL', category: 'Databases' },
      { name: 'MySQL', category: 'Databases' },
      { name: 'Supabase', category: 'Databases' },
      { name: 'Docker', category: 'Tools' },
      { name: 'Git/GitHub', category: 'Tools' },
      { name: 'Figma', category: 'Tools' },
      { name: 'VS Code', category: 'Tools' },
      { name: 'Generative AI', category: 'AI' },
      { name: 'LLM Integrations', category: 'AI' },
      { name: 'Workflow Automation', category: 'AI' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's build something meaningful.",
    description:
      'Available for remote opportunities, freelance projects, product collaborations and software engineering roles.',
    email: 'Email',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: {
    built: 'Built with Next.js.',
    credit: '© 2026 Aarley. All rights reserved.',
  },
} as const;
