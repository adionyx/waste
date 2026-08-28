export const INITIAL_COURSES = [
  {
    id: 'course-1',
    title: 'Full-Stack Modern Web Engineering',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '6 Weeks',
    rating: 4.9,
    studentsEnrolled: 2450,
    instructor: 'Dr. Sarah Lin',
    badgeName: 'Full-Stack Web Architect',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    description: 'Master React, Node.js, Express, REST APIs, and modern state management to build production-grade web applications.',
    modules: [
      { id: 'm1', title: 'React Hooks & State Architecture', duration: '45 mins', completed: true },
      { id: 'm2', title: 'Building RESTful APIs with Node & Express', duration: '60 mins', completed: true },
      { id: 'm3', title: 'Database Design with PostgreSQL & Prisma', duration: '50 mins', completed: false },
      { id: 'm4', title: 'Authentication, JWT & Security Best Practices', duration: '55 mins', completed: false },
      { id: 'm5', title: 'Deploying to Vercel & AWS Elastic Beanstalk', duration: '40 mins', completed: false },
    ]
  },
  {
    id: 'course-2',
    title: 'Applied AI & Neural Networks with Python',
    category: 'AI & Data Science',
    level: 'Advanced',
    duration: '8 Weeks',
    rating: 4.95,
    studentsEnrolled: 3120,
    instructor: 'Prof. Marcus Vance',
    badgeName: 'AI Systems Specialist',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80',
    description: 'Train deep learning models using PyTorch, build LLM wrappers, and deploy AI APIs for real-world automation.',
    modules: [
      { id: 'm1', title: 'Python for Data Science & Tensor Operations', duration: '50 mins', completed: true },
      { id: 'm2', title: 'Neural Networks Architecture from Scratch', duration: '75 mins', completed: true },
      { id: 'm3', title: 'Fine-Tuning Transformer LLMs & Embeddings', duration: '90 mins', completed: true },
      { id: 'm4', title: 'Model Evaluation & Optimization Pipelines', duration: '45 mins', completed: false },
    ]
  },
  {
    id: 'course-3',
    title: 'UI/UX Design Systems & Micro-Interactions',
    category: 'Design',
    level: 'Beginner to Intermediate',
    duration: '4 Weeks',
    rating: 4.88,
    studentsEnrolled: 1890,
    instructor: 'Elena Rostova',
    badgeName: 'Product Design Lead',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80',
    description: 'Craft high-converting user interfaces, wireframes, interactive Figma prototypes, and sleek design systems.',
    modules: [
      { id: 'm1', title: 'User Research & Wireframing Fundamentals', duration: '40 mins', completed: true },
      { id: 'm2', title: 'Figma Auto-Layout & Component Tokens', duration: '55 mins', completed: false },
      { id: 'm3', title: 'Design Systems & Accessibility (WCAG)', duration: '50 mins', completed: false },
    ]
  },
  {
    id: 'course-4',
    title: 'Cloud Infrastructure, Docker & Kubernetes',
    category: 'Cloud & DevOps',
    level: 'Intermediate',
    duration: '5 Weeks',
    rating: 4.92,
    studentsEnrolled: 1420,
    instructor: 'David Kim',
    badgeName: 'Cloud DevOps Associate',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=600&q=80',
    description: 'Containerize applications, orchestrate services with Kubernetes, and configure CI/CD deployment automation pipelines.',
    modules: [
      { id: 'm1', title: 'Docker Containers & Multi-stage Builds', duration: '45 mins', completed: true },
      { id: 'm2', title: 'Kubernetes Clusters & Ingress Controllers', duration: '65 mins', completed: false },
      { id: 'm3', title: 'GitHub Actions CI/CD Pipeline Automation', duration: '50 mins', completed: false },
    ]
  }
];

export const INITIAL_STUDENT_PROFILES = [
  {
    id: 'student-101',
    name: 'Alex Chen',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    university: 'Stanford University',
    degree: 'B.S. Computer Science',
    gpa: '3.9 / 4.0',
    gradYear: '2026',
    bio: 'Passionate full-stack developer with 2+ years of experience building modern React web apps & REST APIs. Seeking Summer 2026 Software Engineering Internships.',
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    badges: ['Full-Stack Web Architect', 'Verified Top 5% Coder'],
    availability: 'Open for Summer 2026 Internship',
    experience: 'Built 4 production web apps serving over 10,000 active monthly users.',
    projects: [
      { title: 'TaskFlow AI', link: 'https://github.com/example/taskflow', desc: 'AI-assisted task management platform built with React & FastAPI.' },
      { title: 'DevMetric Dashboard', link: 'https://github.com/example/devmetric', desc: 'Real-time analytics dashboard monitoring server health metrics.' }
    ],
    contactEmail: 'alex.chen@stanford.edu',
    status: 'Verified Candidate'
  },
  {
    id: 'student-102',
    name: 'Maya Sharma',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    university: 'MIT',
    degree: 'B.S. Artificial Intelligence & Data Science',
    gpa: '3.95 / 4.0',
    gradYear: '2026',
    bio: 'Specializing in computer vision and Large Language Models. Published student research in NLP optimization.',
    skills: ['Python', 'PyTorch', 'Scikit-Learn', 'FastAPI', 'Pandas', 'OpenCV'],
    badges: ['AI Systems Specialist', 'Dean List Scholar'],
    availability: 'Open for Fall 2026 Internship',
    experience: 'Research assistant at MIT Vision Lab focusing on neural model quantization.',
    projects: [
      { title: 'VisionGuard AI', link: 'https://github.com/example/visionguard', desc: 'Real-time object detection model running on edge devices.' },
      { title: 'DocSummarizer NLP', link: 'https://github.com/example/docsummarizer', desc: 'LLM pipeline for summarizing 100+ page medical research papers.' }
    ],
    contactEmail: 'msharma@mit.edu',
    status: 'Verified Candidate'
  },
  {
    id: 'student-103',
    name: 'Jordan Vance',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    university: 'UC Berkeley',
    degree: 'B.A. Cognitive Science & UI Design',
    gpa: '3.8 / 4.0',
    gradYear: '2027',
    bio: 'Product designer and frontend enthusiast who loves creating intuitive glassmorphic UIs and accessible user flows.',
    skills: ['Figma', 'React', 'CSS3 / Sass', 'Design Systems', 'User Research', 'Framer Motion'],
    badges: ['Product Design Lead', 'Figma Certified'],
    availability: 'Open for Immediate Remote Internship',
    experience: 'Designed design system token library used by 3 campus tech clubs.',
    projects: [
      { title: 'CampusConnect Design System', link: 'https://figma.com/example/campusconnect', desc: 'Accessible component UI library with 50+ re-usable elements.' }
    ],
    contactEmail: 'jordan.v@berkeley.edu',
    status: 'Verified Candidate'
  },
  {
    id: 'student-104',
    name: 'Priya Patel',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    university: 'Carnegie Mellon University',
    degree: 'B.S. Information Systems',
    gpa: '3.85 / 4.0',
    gradYear: '2026',
    bio: 'DevOps & Cloud architecture enthusiast. AWS Certified Cloud Practitioner passionate about automated CI/CD pipelines.',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions', 'Python'],
    badges: ['Cloud DevOps Associate', 'AWS Certified'],
    availability: 'Open for Summer 2026 Internship',
    experience: 'Managed Kubernetes staging environment for university cloud lab.',
    projects: [
      { title: 'KubeDeployer CLI', link: 'https://github.com/example/kubedeployer', desc: 'Automated cluster provisioning CLI tool.' }
    ],
    contactEmail: 'ppatel@cmu.edu',
    status: 'Verified Candidate'
  }
];

export const INITIAL_INTERNSHIPS = [
  {
    id: 'job-1',
    company: 'NexusTech Labs',
    logo: '⚡',
    title: 'Frontend Engineering Intern',
    location: 'Remote / San Francisco, CA',
    stipend: '$45 - $55 / hour',
    type: 'Full-Time Internship (Summer 2026)',
    skillsRequired: ['React', 'TypeScript', 'CSS3', 'REST APIs'],
    description: 'Join our core platform team building next-generation cloud analytics dashboards for enterprise clients.'
  },
  {
    id: 'job-2',
    company: 'Cognitive AI',
    logo: '🧠',
    title: 'Machine Learning Research Intern',
    location: 'Hybrid / Boston, MA',
    stipend: '$50 - $60 / hour',
    type: 'Part-Time / Full-Time Internship',
    skillsRequired: ['Python', 'PyTorch', 'LLMs', 'Transformers'],
    description: 'Work directly with PhD researchers to fine-tune open-weight AI models for autonomous agent tasks.'
  },
  {
    id: 'job-3',
    company: 'CloudVault Inc.',
    logo: '☁️',
    title: 'DevOps & Infrastructure Intern',
    location: 'Remote',
    stipend: '$40 - $50 / hour',
    type: 'Summer 2026 Internship',
    skillsRequired: ['Docker', 'Kubernetes', 'AWS', 'Linux'],
    description: 'Help automate multi-region deployment infrastructure and build observability dashboards.'
  }
];
