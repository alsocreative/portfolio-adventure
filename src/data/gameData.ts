import { Room } from '@/types/game';

// Portfolio data for interactions
export const portfolioData = {
  projects: [
    {
      title: "21st.dev Portfolio",
      description: "A modern, interactive portfolio built with Next.js and creative animations",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vanta.js"],
      link: "https://21st.dev",
      github: "https://github.com/username/portfolio"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://demo-shop.com",
      github: "https://github.com/username/ecommerce"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      tech: ["Vue.js", "Firebase", "Socket.io"],
      link: "https://task-app.com",
      github: "https://github.com/username/task-app"
    }
  ],
  experience: [
    {
      company: "Tech Startup Inc.",
      role: "Senior Frontend Developer",
      period: "2023 - Present",
      description: "Led development of user-facing features for a SaaS platform serving 10k+ users",
      achievements: ["Improved app performance by 40%", "Mentored 3 junior developers"]
    },
    {
      company: "Digital Agency",
      role: "Full Stack Developer",
      period: "2021 - 2023", 
      description: "Built custom web applications for various clients",
      achievements: ["Delivered 15+ projects on time", "Increased client satisfaction by 25%"]
    }
  ],
  contact: {
    email: "hello@21st.dev",
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username"
  }
};

// Room configurations
export const rooms: Record<string, Room> = {
  home: {
    id: 'home',
    name: 'Home',
    background: '#2d5016',
    walls: [
      // Top wall
      {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, 
      {x: 5, y: 0}, {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0}, {x: 9, y: 0},
      // Bottom wall
      {x: 0, y: 9}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, 
      {x: 5, y: 9}, {x: 6, y: 9}, {x: 7, y: 9}, {x: 8, y: 9}, {x: 9, y: 9},
      // Left wall
      {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 5}, 
      {x: 0, y: 6}, {x: 0, y: 7}, {x: 0, y: 8},
      // Right wall  
      {x: 9, y: 1}, {x: 9, y: 2}, {x: 9, y: 3}, {x: 9, y: 4}, {x: 9, y: 5}, 
      {x: 9, y: 6}, {x: 9, y: 7}, {x: 9, y: 8}
    ],
    entrances: [
      { position: {x: 5, y: 0}, targetRoom: 'projects', targetSpawn: {x: 5, y: 8} },
      { position: {x: 0, y: 5}, targetRoom: 'experience', targetSpawn: {x: 8, y: 5} },
      { position: {x: 9, y: 5}, targetRoom: 'contact', targetSpawn: {x: 1, y: 5} }
    ],
    interactables: [
      {
        position: {x: 5, y: 5},
        type: 'project',
        title: '👋 Welcome!',
        content: `Hi! I'm a passionate developer who loves creating amazing digital experiences.

🎮 Use ARROW KEYS or WASD to move around
🚪 Walk into doors to explore different rooms
💬 Walk into objects to interact with them

Explore my portfolio by visiting:
🏠 Projects Room (North)
💼 Experience Room (West) 
📞 Contact Room (East)

Find the hidden easter egg! 🥚`
      }
    ],
    spawnPoint: {x: 5, y: 7}
  },
  
  projects: {
    id: 'projects',
    name: 'Projects Room',
    background: '#1a237e',
    walls: [
      // Top wall (except entrance)
      {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, 
      {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0}, {x: 9, y: 0},
      // Bottom wall
      {x: 0, y: 9}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, 
      {x: 5, y: 9}, {x: 6, y: 9}, {x: 7, y: 9}, {x: 8, y: 9}, {x: 9, y: 9},
      // Left wall
      {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 5}, 
      {x: 0, y: 6}, {x: 0, y: 7}, {x: 0, y: 8},
      // Right wall
      {x: 9, y: 1}, {x: 9, y: 2}, {x: 9, y: 3}, {x: 9, y: 4}, {x: 9, y: 5}, 
      {x: 9, y: 6}, {x: 9, y: 7}, {x: 9, y: 8}
    ],
    entrances: [
      { position: {x: 5, y: 9}, targetRoom: 'home', targetSpawn: {x: 5, y: 1} }
    ],
    interactables: portfolioData.projects.map((project, index) => ({
      position: {x: 2 + (index * 3), y: 3},
      type: 'project' as const,
      title: project.title,
      content: `${project.description}

🛠️ Tech Stack: ${project.tech.join(', ')}`,
      links: [
        { text: '🔗 View Live', url: project.link },
        { text: '📱 GitHub', url: project.github }
      ]
    })),
    spawnPoint: {x: 5, y: 8}
  },

  experience: {
    id: 'experience',
    name: 'Experience Room',
    background: '#4a148c',
    walls: [
      // Top wall
      {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, 
      {x: 5, y: 0}, {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0}, {x: 9, y: 0},
      // Bottom wall
      {x: 0, y: 9}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, 
      {x: 5, y: 9}, {x: 6, y: 9}, {x: 7, y: 9}, {x: 8, y: 9}, {x: 9, y: 9},
      // Left wall
      {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 6}, 
      {x: 0, y: 7}, {x: 0, y: 8},
      // Right wall (except entrance)
      {x: 9, y: 1}, {x: 9, y: 2}, {x: 9, y: 3}, {x: 9, y: 4}, {x: 9, y: 6}, 
      {x: 9, y: 7}, {x: 9, y: 8}
    ],
    entrances: [
      { position: {x: 9, y: 5}, targetRoom: 'home', targetSpawn: {x: 1, y: 5} }
    ],
    interactables: portfolioData.experience.map((exp, index) => ({
      position: {x: 3, y: 2 + (index * 3)},
      type: 'experience' as const,
      title: `${exp.role} @ ${exp.company}`,
      content: `📅 ${exp.period}

${exp.description}

🏆 Key Achievements:
${exp.achievements.map(achievement => `• ${achievement}`).join('\n')}`
    })),
    spawnPoint: {x: 8, y: 5}
  },

  contact: {
    id: 'contact',
    name: 'Contact Room',
    background: '#bf360c',
    walls: [
      // Top wall
      {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, 
      {x: 5, y: 0}, {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0}, {x: 9, y: 0},
      // Bottom wall
      {x: 0, y: 9}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, 
      {x: 5, y: 9}, {x: 6, y: 9}, {x: 7, y: 9}, {x: 8, y: 9}, {x: 9, y: 9},
      // Left wall (except entrance)
      {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 6}, 
      {x: 0, y: 7}, {x: 0, y: 8},
      // Right wall
      {x: 9, y: 1}, {x: 9, y: 2}, {x: 9, y: 3}, {x: 9, y: 4}, {x: 9, y: 5}, 
      {x: 9, y: 6}, {x: 9, y: 7}, {x: 9, y: 8}
    ],
    entrances: [
      { position: {x: 0, y: 5}, targetRoom: 'home', targetSpawn: {x: 8, y: 5} }
    ],
    interactables: [
      {
        position: {x: 5, y: 4},
        type: 'contact',
        title: '📞 Let\'s Connect!',
        content: `Ready to work together or just want to chat?

📧 Email: ${portfolioData.contact.email}

🔗 Find me online:`,
        links: [
          { text: '💼 LinkedIn', url: portfolioData.contact.linkedin },
          { text: '🐙 GitHub', url: portfolioData.contact.github },
          { text: '🐦 Twitter', url: portfolioData.contact.twitter }
        ]
      },
      {
        position: {x: 8, y: 8},
        type: 'easter-egg',
        title: '🥚 Secret Discovery!',
        content: `Congratulations! You found the hidden easter egg! 🎉

You're clearly someone who pays attention to details - exactly the kind of person I'd love to work with!

Here's a secret: This entire portfolio was built with love, coffee ☕, and way too many late nights 🌙

Keep exploring, keep building, keep being awesome! 🚀`
      }
    ],
    spawnPoint: {x: 1, y: 5}
  }
};
