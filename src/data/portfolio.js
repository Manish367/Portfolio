export const profile = {
  name: 'Monish Kumar Das',
  roles: [
    'Associate Salesforce Developer',
    'Full-Stack MERN Developer',
    'React.js Engineer',
    'Apex & LWC Developer'
  ],
  location: 'Mohali, Punjab, India',
  email: 'manishdas360@gmail.com',
  phone: '+91 87308 07180',
  github: 'https://github.com/Manish367',
  linkedin: 'https://www.linkedin.com/in/monish-kumar-das-07662b17b/',
  resume: '/MonishKumarDasResume.pdf',
  summary:
    'Associate Salesforce Developer with experience in Apex, SOQL, Lightning Web Components (LWC), Flows, and Salesforce CRM customization. Skilled in designing scalable business automation solutions, integrating third-party systems, and supporting production deployments — with a strong foundation in full-stack development across the MERN stack.'
};

export const skills = [
  {
    group: 'Salesforce',
    items: [
      'Apex',
      'SOQL',
      'Lightning Web Components',
      'Apex Triggers',
      'Flows',
      'Validation Rules',
      'Custom Objects',
      'Reports & Dashboards',
      'Profiles & Permission Sets',
      'CRM Customization'
    ]
  },
  {
    group: 'Frontend',
    items: ['React.js', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap']
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL', 'JWT Authentication']
  },
  {
    group: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Postman', 'Salesforce CLI', 'VS Code', 'Vercel', 'Render']
  },
  {
    group: 'Languages',
    items: ['Java', 'JavaScript', 'C++']
  }
];

export const experience = [
  {
    company: 'Growbiz Solutions',
    role: 'Associate Salesforce Developer',
    location: 'Chandigarh, India',
    period: 'November 2025 – Present',
    points: [
      'Developed Salesforce CRM solutions including custom objects, custom fields, validation rules, and business process automation using Flows.',
      'Built Lightning Web Components (LWC) to enhance user experience and streamline business operations.',
      'Developed Apex classes, Apex Triggers, and optimized SOQL queries to implement business logic and improve data processing efficiency.',
      'Created reports and dashboards to provide actionable business insights and support operational decision-making.'
    ],
    highlight: {
      title: 'Key Project — Piano Movers (Australia)',
      points: [
        'Built and maintained Salesforce solutions for a logistics/relocation platform — quote management, work orders, scheduling, pricing, and resource allocation.',
        'Implemented Apex Classes, LWC, Record-Triggered Flows, Validation Rules, and custom objects to automate workflows.',
        'Integrated Salesforce with OptimoRoute for job scheduling, route optimization, and workforce management across regions.',
        'Resolved production issues via debug log analysis, root-cause fixes, and Flow/Apex optimization.',
        'Executed deployments, UAT support, and releases across Sandbox/Production using Change Sets, Git, and CI/CD.'
      ]
    }
  },
  {
    company: 'A2IT Online Pvt. Ltd.',
    role: 'Full-Stack Web Development Intern',
    location: 'Mohali',
    period: 'Jan 2025 – June 2025',
    points: [
      'Built scalable, component-based MERN stack web applications with a React.js front-end and Node.js/Express.js backend.',
      'Implemented React modules with routing, state management, and reusable components, improving maintainability.',
      'Designed and optimized RESTful APIs and MongoDB queries, improving data access efficiency by 30%.',
      'Implemented role-based authentication and multi-user dashboards for stakeholder access control.'
    ]
  },
  {
    company: 'INFOTECHMON Pvt. Ltd.',
    role: 'Web Development Intern',
    location: 'Mohali',
    period: 'June 2023 – July 2023',
    points: [
      'Developed responsive web pages using HTML, CSS, JavaScript, and Bootstrap with cross-browser compatibility.',
      'Collaborated with senior developers in an Agile workflow, improving UI/UX consistency and reducing bugs.',
      'Gained experience with Git version control, deployment, and agile development practices.'
    ]
  }
];

export const projects = [
  {
    name: 'Crowdfunding & Charity Platform',
    repo: 'Crowdfunding',
    tagline: 'Full-stack MERN rebuild of a crowdfunding & charity template',
    description:
      'A complete crowdfunding platform with campaign browsing, donations, JWT auth, comments, and live stats — MongoDB Atlas backend on Render, React/Vite frontend on Vercel.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    live: 'https://crowdfunding-steel-phi.vercel.app/',
    github: 'https://github.com/Manish367/Crowdfunding'
  },
  {
    name: 'Stock Buy Sell',
    repo: 'STOCK_BUY_SELL',
    tagline: 'Zerodha-inspired trading platform',
    description:
      'Full-stack trading simulator with real-time simulated market data, secure JWT auth, and a portfolio/order management system tracking 1000+ simulated trades — 25% faster order processing, 20% faster API responses.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    live: 'https://stock-buy-sell-aprz.vercel.app/',
    github: 'https://github.com/Manish367/STOCK_BUY_SELL'
  },
  {
    name: 'WanderLust',
    repo: 'WanderLust',
    tagline: 'Property listing & booking platform',
    description:
      'Full-stack property booking system with 200+ mock listings, Mapbox location search, Cloudinary image uploads, CRUD listings/bookings, and responsive host/guest dashboards.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Mapbox', 'Cloudinary', 'Bootstrap'],
    live: 'https://wander-lust-bbs0.onrender.com/listings',
    github: 'https://github.com/Manish367/WanderLust'
  },
  {
    name: 'AI-Converse',
    repo: 'AIConverse-_-AI-Conversation-',
    tagline: 'AI conversation web app',
    description:
      'A full-stack AI chat application with a client/server architecture for real-time conversational interactions.',
    tech: ['React', 'Node.js', 'Express'],
    live: 'https://ai-converse-ai-conversation.vercel.app',
    github: 'https://github.com/Manish367/AIConverse-_-AI-Conversation-'
  },
  {
    name: 'NextGen Homes',
    repo: 'NextGen_Homes',
    tagline: 'Real estate property platform',
    description:
      'A property listing platform with a dedicated backend for managing real estate data, built for modern home search experiences.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://next-gen-homes.vercel.app/',
    github: 'https://github.com/Manish367/NextGen_Homes'
  },
  {
    name: 'Fairy Tale Feasts',
    repo: 'Fairy-Tale-Feasts',
    tagline: 'Catering & event services platform',
    description:
      'A full-stack catering service website with a client/backend split, built to showcase menus and handle event bookings.',
    tech: ['React', 'Node.js', 'Express'],
    live: 'https://fairy-tale-feasts.vercel.app',
    github: 'https://github.com/Manish367/Fairy-Tale-Feasts'
  }
];

export const education = {
  degree: 'B.Tech in Computer Science and Engineering (Lateral Entry)',
  school: 'Chandigarh Group of Colleges, Jhanjeri (Punjab Technical University)',
  period: 'Aug 2022 – Jun 2025',
  score: 'CGPA: 8.16 / 10'
};

export const certifications = [
  'Java Programming – NIIT (Core Java)',
  'Web Development Program – INFOTECHMON Pvt. Ltd. (HTML, CSS, JavaScript, React.js, Node.js, MongoDB)',
  'Hack-N-Win Hackathon 2024 – Certificate of Participation',
  'Microsoft Certified – Designing and Implementing a Microsoft Azure AI Solution'
];

export const achievements = [
  'Certificate of Merit – Nagaland Bhojpuri Samaj (80%+ in 10th Board Examination)',
  'Regional Science Olympiad – Appreciation Award for analytical and problem-solving skills'
];
