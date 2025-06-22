import { Room } from '@/types/game';

// Portfolio data for interactions - Based on real portfolio.md
export const portfolioData = {
  projects: [
    {
      title: "NotesFlow - Privacy-Focused Notes",
      description: "A privacy-focused note-taking application with beautiful interface, local storage, and offline functionality",
      tech: ["Next.js", "React", "LocalStorage", "PWA", "AES-256"],
      link: "https://notesflow.pages.dev",
      github: "https://github.com/SH20RAJ/notesflow"
    },
    {
      title: "SketchFlow - Collaborative Whiteboard",
      description: "A powerful collaborative whiteboard platform for real-time brainstorming and visual collaboration",
      tech: ["React", "Canvas API", "WebSockets", "Node.js", "MongoDB"],
      link: "https://sketchflow.space",
      github: "https://github.com/SH20RAJ/sketchflow"
    },
    {
      title: "CreoYT - YouTube Creator Tools",
      description: "All-in-one platform for YouTube creators with AI-powered tools for content optimization",
      tech: ["React", "Next.js", "YouTube API", "OpenAI", "MongoDB"],
      link: "https://creoyt.netlify.app/",
      github: "https://github.com/SH20RAJ/creoyt"
    },
    {
      title: "AayeChup - AI Voice Platform",
      description: "AI voice conversation platform enabling natural voice interactions with multiple AI personalities",
      tech: ["Next.js", "TypeScript", "OpenAI Whisper", "ElevenLabs", "TailwindCSS"],
      link: "https://aayechup.shade.cool",
      github: "https://github.com/SH20RAJ/aayechup"
    },
    {
      title: "TubeSonic - YouTube Downloader",
      description: "Lightning-fast desktop app for downloading YouTube videos and audio with beautiful UI",
      tech: ["Tauri", "React", "Rust", "yt-dlp"],
      link: "https://github.com/SH20RAJ/TubeSonic/releases",
      github: "https://github.com/SH20RAJ/TubeSonic"
    },
    {
      title: "This RPG Portfolio!",
      description: "The very game you're playing! A retro 2D pixel RPG built to showcase my portfolio creatively",
      tech: ["React", "Next.js", "TypeScript", "TailwindCSS", "Canvas API"],
      link: "https://shaswat.live",
      github: "https://github.com/SH20RAJ/portfolio"
    }
  ],
  experience: [
    {
      company: "Freelance & Contract Work",
      role: "Full Stack Developer",
      period: "2023 - Present",
      description: "Lead development of complex full-stack applications using Next.js, React, and Node.js. Architect scalable solutions handling 10K+ concurrent users and implement AI-powered features.",
      achievements: ["Delivered 15+ production applications with 99.9% uptime", "Mentored junior developers", "Implemented AI-powered features using OpenAI"]
    },
    {
      company: "Various Companies",
      role: "Full Stack Developer",
      period: "2021 - 2023", 
      description: "Developed responsive web applications using React, Vue.js, and Angular. Built robust backend APIs with Node.js, Express, and Laravel.",
      achievements: ["Delivered 15+ projects on time", "Increased client satisfaction by 25%", "Reduced deployment time by 60% through CI/CD"]
    },
    {
      company: "Tech Startups",
      role: "Frontend Developer",
      period: "2020 - 2021",
      description: "Created pixel-perfect, responsive user interfaces using React and TypeScript. Collaborated with UX/UI designers to implement modern design systems.",
      achievements: ["Improved user engagement by 35%", "Integrated third-party APIs", "Maintained cross-browser compatibility"]
    }
  ],
  skills: [
    {
      category: "Frontend",
      skills: ["React (95%)", "Next.js (95%)", "TypeScript (90%)", "TailwindCSS (95%)", "Vue.js (85%)", "Angular (75%)"],
      level: "Expert"
    },
    {
      category: "Backend",
      skills: ["Node.js (90%)", "Express.js (90%)", "Laravel (85%)", "Python (80%)", "PostgreSQL (85%)", "MongoDB (85%)"],
      level: "Advanced"
    },
    {
      category: "AI & Modern Tech",
      skills: ["OpenAI Integration (90%)", "WebRTC (85%)", "WebSockets (85%)", "PWA Development (90%)", "Docker (80%)"],
      level: "Advanced"
    },
    {
      category: "Tools & DevOps",
      skills: ["Git/GitHub (95%)", "VS Code (98%)", "AWS (75%)", "Cloudflare (80%)", "GitHub Actions (85%)"],
      level: "Proficient"
    }
  ],
  achievements: [
    {
      title: "🏆 GitHub Arctic Code Vault",
      description: "Code preserved for future generations in the Arctic Code Vault - a testament to lasting impact",
      year: "2023",
      category: "Open Source"
    },
    {
      title: "🚀 400+ Active Repositories",
      description: "Maintained and developed diverse range of projects with 1K+ combined GitHub stars",
      year: "2023",
      category: "Community"
    },
    {
      title: "🎯 Top 1% Developer",
      description: "Ranked in top 1% of developers in region with proven track record of scalable solutions",
      year: "2023",
      category: "Professional"
    },
    {
      title: "📚 50+ NPM Packages",
      description: "Published libraries used by developers worldwide, contributing to the open-source ecosystem",
      year: "2023",
      category: "Open Source"
    }
  ],
  contact: {
    email: "sh20raj@gmail.com",
    github: "https://github.com/SH20RAJ",
    linkedin: "https://linkedin.com/in/sh20raj",
    twitter: "https://twitter.com/sh20raj",
    website: "https://shaswat.live"
  }
};

// Room configurations - Expanded RPG World Map
// ASCII Map Layout:
//   [Skills]  [Achievements]  [Secret]
//      |          |            |
//   [Projects] - [Home] - [Experience]
//                 |
//             [Contact]

export const rooms: Record<string, Room> = {
  home: {
    id: 'home',
    name: '🏠 Town Square',
    background: '#2d5016',
    walls: [
      // Top wall (entrance to north)
      {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, 
      {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0}, {x: 9, y: 0},
      // Bottom wall (entrance to south)  
      {x: 0, y: 9}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, 
      {x: 6, y: 9}, {x: 7, y: 9}, {x: 8, y: 9}, {x: 9, y: 9},
      // Left wall (entrance to west)
      {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 6}, 
      {x: 0, y: 7}, {x: 0, y: 8},
      // Right wall (entrance to east)  
      {x: 9, y: 1}, {x: 9, y: 2}, {x: 9, y: 3}, {x: 9, y: 4}, {x: 9, y: 6}, 
      {x: 9, y: 7}, {x: 9, y: 8}
    ],
    entrances: [
      { position: {x: 5, y: 0}, targetRoom: 'skills', targetSpawn: {x: 5, y: 8} },
      { position: {x: 5, y: 9}, targetRoom: 'contact', targetSpawn: {x: 5, y: 1} },
      { position: {x: 0, y: 5}, targetRoom: 'projects', targetSpawn: {x: 8, y: 5} },
      { position: {x: 9, y: 5}, targetRoom: 'experience', targetSpawn: {x: 1, y: 5} }
    ],
    interactables: [
      {
        position: {x: 5, y: 5},
        type: 'welcome',
        title: '🏰 Welcome to Shaswat\'s RPG Portfolio!',
        content: `Welcome, adventurer! You've entered my digital realm where code meets creativity.

🎮 CONTROLS:
• ARROW KEYS or WASD to move
• Walk into doors (gaps in walls) to travel
• Approach objects to interact

🗺️ EXPLORE THE REALM:
⚔️ North: Skills Temple - Master my abilities
📧 South: Contact Chamber - Connect with me
🚀 West: Projects Gallery - See my creations  
💼 East: Experience Hall - Learn my journey

There are hidden secrets scattered throughout... 👀

🏆 Can you find all 3 easter eggs and become the Ultimate Explorer?`
      },
      {
        position: {x: 2, y: 3},
        type: 'info',
        title: '📜 Town Bulletin',
        content: `🏆 RECENT ACHIEVEMENTS:
• Built this RPG portfolio from scratch!
• 400+ GitHub repositories maintained
• 1K+ combined GitHub stars earned
• 50+ NPM packages published
• Arctic Code Vault contributor

🎯 CURRENT QUEST:
Looking for exciting opportunities to create amazing digital experiences and solve complex problems with code!

💡 Fun Fact: This entire game was built with Next.js, TypeScript, and lots of creativity!`
      }
    ],
    spawnPoint: {x: 5, y: 7}
  },

  projects: {
    id: 'projects',
    name: '🚀 Projects Gallery',
    background: '#1a237e',
    walls: [
      // Top wall (entrance to skills)
      {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, 
      {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0}, {x: 9, y: 0},
      // Bottom wall
      {x: 0, y: 9}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, 
      {x: 5, y: 9}, {x: 6, y: 9}, {x: 7, y: 9}, {x: 8, y: 9}, {x: 9, y: 9},
      // Left wall
      {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 5}, 
      {x: 0, y: 6}, {x: 0, y: 7}, {x: 0, y: 8},
      // Right wall (entrance to home)
      {x: 9, y: 1}, {x: 9, y: 2}, {x: 9, y: 3}, {x: 9, y: 4}, {x: 9, y: 6}, 
      {x: 9, y: 7}, {x: 9, y: 8}
    ],
    entrances: [
      { position: {x: 9, y: 5}, targetRoom: 'home', targetSpawn: {x: 1, y: 5} },
      { position: {x: 5, y: 0}, targetRoom: 'skills', targetSpawn: {x: 5, y: 8} }
    ],
    interactables: [
      ...portfolioData.projects.map((project, index) => ({
        position: {x: 1 + (index % 3) * 3, y: 2 + Math.floor(index / 3) * 2},
        type: 'project' as const,
        title: `💻 ${project.title}`,
        content: `${project.description}

🛠️ Tech Stack:
${project.tech.map(tech => `• ${tech}`).join('\n')}

Click the links below to explore!`,
        links: [
          { text: '🔗 View Live', url: project.link },
          { text: '📱 GitHub', url: project.github }
        ]
      })),
      {
        position: {x: 8, y: 8},
        type: 'info' as const,
        title: '🎨 Gallery Info',
        content: `This gallery showcases my best work spanning web development, creative coding, and digital experiences.

Each project represents hours of passionate development and problem-solving. From AI-powered applications to creative tools, these projects demonstrate my commitment to building meaningful solutions.

🌟 Special Highlight: You're currently playing the RPG Portfolio - a unique way to showcase technical skills through interactive gameplay!`
      }
    ],
    spawnPoint: {x: 8, y: 5}
  },

  experience: {
    id: 'experience',
    name: '💼 Experience Hall',
    background: '#4a148c',
    walls: [
      // Top wall (entrance to achievements)
      {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, 
      {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0}, {x: 9, y: 0},
      // Bottom wall
      {x: 0, y: 9}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, 
      {x: 5, y: 9}, {x: 6, y: 9}, {x: 7, y: 9}, {x: 8, y: 9}, {x: 9, y: 9},
      // Left wall (entrance to home)
      {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 6}, 
      {x: 0, y: 7}, {x: 0, y: 8},
      // Right wall
      {x: 9, y: 1}, {x: 9, y: 2}, {x: 9, y: 3}, {x: 9, y: 4}, {x: 9, y: 5}, 
      {x: 9, y: 6}, {x: 9, y: 7}, {x: 9, y: 8}
    ],
    entrances: [
      { position: {x: 0, y: 5}, targetRoom: 'home', targetSpawn: {x: 8, y: 5} },
      { position: {x: 5, y: 0}, targetRoom: 'achievements', targetSpawn: {x: 5, y: 8} }
    ],
    interactables: [
      ...portfolioData.experience.map((exp, index) => ({
        position: {x: 3, y: 2 + (index * 2)},
        type: 'experience' as const,
        title: `🏢 ${exp.role}`,
        content: `🏢 ${exp.company}
📅 ${exp.period}

${exp.description}

🏆 Key Achievements:
${exp.achievements.map(achievement => `• ${achievement}`).join('\n')}`
      })),
      {
        position: {x: 7, y: 7},
        type: 'info' as const,
        title: '📊 Career Stats',
        content: `🎯 PROFESSIONAL SUMMARY:
• 5+ years of professional development
• 15+ successful projects delivered
• 10K+ users impacted by my work
• Multiple technology stacks mastered

💡 Journey Highlights:
• Started as Frontend Developer
• Evolved into Full Stack expertise
• Now leading complex AI integrations
• Always learning, always growing!

🚀 Ready for the next challenge!`
      }
    ],
    spawnPoint: {x: 1, y: 5}
  },

  contact: {
    id: 'contact',
    name: '📞 Contact Chamber',
    background: '#bf360c',
    walls: [
      // Top wall (entrance to home)
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
      { position: {x: 5, y: 0}, targetRoom: 'home', targetSpawn: {x: 5, y: 8} }
    ],
    interactables: [
      {
        position: {x: 5, y: 4},
        type: 'contact',
        title: '📞 Let\'s Connect & Collaborate!',
        content: `Ready to embark on a new adventure together? I'm always excited to collaborate on innovative projects and solve complex problems!

📧 Email: ${portfolioData.contact.email}

🔗 Find me across the digital realm:
• Professional networking and opportunities
• Code collaboration and open source
• Casual tech discussions and sharing
• Portfolio website and blog

💬 I typically respond within 24 hours and love discussing new technologies, project ideas, and development challenges!`,
        links: [
          { text: '💼 LinkedIn', url: portfolioData.contact.linkedin },
          { text: '🐙 GitHub', url: portfolioData.contact.github },
          { text: '🌐 Website', url: portfolioData.contact.website },
          { text: '🐦 Twitter', url: portfolioData.contact.twitter }
        ]
      },
      {
        position: {x: 2, y: 7},
        type: 'info',
        title: '💬 Message Board',
        content: `📝 PREFERRED CONTACT METHODS:
• Email for business inquiries & collaboration
• LinkedIn for professional networking  
• GitHub for code collaboration & issues
• Twitter for casual tech discussions

⚡ Fun Fact: I love connecting with fellow developers and discussing everything from pixel art to AI integration!

🎮 Thanks for exploring my RPG portfolio!`
      },
      {
        position: {x: 8, y: 2},
        type: 'easter-egg',
        title: '🥚 Hidden Treasure Chest!',
        content: `🎉 Congratulations, brave explorer! 

You've discovered the legendary Easter Egg of Curiosity! This secret chamber was hidden for those who dare to explore every corner.

🏆 Achievement Unlocked: "Thorough Explorer"

Your attention to detail and persistence are exactly the qualities that make great developers. The fact that you took the time to interact with everything shows you have the curiosity and dedication I value in collaborators.

🔮 Secret Dev Insight: This contact room was actually the first room I designed when building this RPG portfolio!

Keep exploring, keep learning, keep building amazing things! 🚀✨`
      }
    ],
    spawnPoint: {x: 5, y: 1}
  },

  skills: {
    id: 'skills',
    name: '⚔️ Skills Temple',
    background: '#1b5e20',
    walls: [
      // Top wall (entrance to secret)
      {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, 
      {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0}, {x: 9, y: 0},
      // Bottom wall (entrance to home)
      {x: 0, y: 9}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, 
      {x: 6, y: 9}, {x: 7, y: 9}, {x: 8, y: 9}, {x: 9, y: 9},
      // Left wall
      {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 5}, 
      {x: 0, y: 6}, {x: 0, y: 7}, {x: 0, y: 8},
      // Right wall (entrance to projects)
      {x: 9, y: 1}, {x: 9, y: 2}, {x: 9, y: 3}, {x: 9, y: 4}, {x: 9, y: 6}, 
      {x: 9, y: 7}, {x: 9, y: 8}
    ],
    entrances: [
      { position: {x: 5, y: 9}, targetRoom: 'home', targetSpawn: {x: 5, y: 1} },
      { position: {x: 9, y: 5}, targetRoom: 'projects', targetSpawn: {x: 1, y: 5} },
      { position: {x: 5, y: 0}, targetRoom: 'secret', targetSpawn: {x: 5, y: 8} }
    ],
    interactables: [
      ...portfolioData.skills.map((skillGroup, index) => ({
        position: {x: 2 + (index % 2) * 5, y: 2 + Math.floor(index / 2) * 2},
        type: 'skill' as const,
        title: `${skillGroup.category === 'Frontend' ? '🎨' : skillGroup.category === 'Backend' ? '⚙️' : skillGroup.category === 'AI & Modern Tech' ? '🤖' : '🛠️'} ${skillGroup.category}`,
        content: `Mastery Level: ${skillGroup.level}

🔧 Technologies & Proficiency:
${skillGroup.skills.map(skill => `• ${skill}`).join('\n')}

${skillGroup.level === 'Expert' ? '💎 Mastered through years of practice and real-world projects!' : 
  skillGroup.level === 'Advanced' ? '⭐ Solid experience with production applications!' : 
  '📚 Continuously learning and improving!'}`
      })),
      {
        position: {x: 5, y: 7},
        type: 'info' as const,
        title: '🏛️ Temple Wisdom',
        content: `"The path of mastery is not a destination, but a journey of continuous learning and growth."

🎯 CURRENT FOCUS AREAS:
• Advanced React patterns & performance
• AI/ML integration in web applications
• WebGL & Three.js for 3D experiences
• Rust for system-level programming

💪 Philosophy: Always sharpening my skills and exploring new technologies. The day you stop learning is the day you stop growing as a developer!

🌟 Remember: Every expert was once a beginner!`
      }
    ],
    spawnPoint: {x: 5, y: 8}
  },

  achievements: {
    id: 'achievements',
    name: '🏆 Achievements Library',
    background: '#e65100',
    walls: [
      // Top wall (entrance to secret)
      {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, 
      {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0}, {x: 9, y: 0},
      // Bottom wall (entrance to experience)
      {x: 0, y: 9}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, 
      {x: 6, y: 9}, {x: 7, y: 9}, {x: 8, y: 9}, {x: 9, y: 9},
      // Left wall
      {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 5}, 
      {x: 0, y: 6}, {x: 0, y: 7}, {x: 0, y: 8},
      // Right wall
      {x: 9, y: 1}, {x: 9, y: 2}, {x: 9, y: 3}, {x: 9, y: 4}, {x: 9, y: 5}, 
      {x: 9, y: 6}, {x: 9, y: 7}, {x: 9, y: 8}
    ],
    entrances: [
      { position: {x: 5, y: 9}, targetRoom: 'experience', targetSpawn: {x: 5, y: 1} },
      { position: {x: 5, y: 0}, targetRoom: 'secret', targetSpawn: {x: 5, y: 8} }
    ],
    interactables: [
      ...portfolioData.achievements.map((achievement, index) => ({
        position: {x: 2 + (index % 2) * 4, y: 2 + Math.floor(index / 2) * 2},
        type: 'achievement' as const,
        title: achievement.title,
        content: `${achievement.description}

📅 Year: ${achievement.year}
🏷️ Category: ${achievement.category}

This achievement represents dedication, hard work, and continuous learning. Each milestone marks a significant step in my journey as a developer and contributor to the tech community.

💡 It's not just about the recognition - it's about the impact and value created along the way!`
      })),
      {
        position: {x: 5, y: 7},
        type: 'info' as const,
        title: '📚 Hall of Fame',
        content: `Welcome to my personal Hall of Fame! Each trophy here represents a milestone in my journey as a developer and open-source contributor.

🎯 ACHIEVEMENT STATS:
• 4 Major accomplishments showcased
• 3 Different categories of excellence
• 5+ Years of consistent contribution
• 1 Passionate developer on a mission

🚀 The Journey Continues...
These achievements aren't just endpoints - they're stepping stones to even greater challenges and contributions. Every line of code, every project, every collaboration brings new opportunities to learn and grow.

💫 Next goals: Reach 10K GitHub stars, launch a successful SaaS, speak at major conferences!`
      }
    ],
    spawnPoint: {x: 5, y: 8}
  },

  secret: {
    id: 'secret',
    name: '🌟 Secret Sanctum',
    background: '#4a148c',
    walls: [
      // Top wall
      {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, 
      {x: 5, y: 0}, {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0}, {x: 9, y: 0},
      // Bottom wall (entrance)
      {x: 0, y: 9}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, 
      {x: 6, y: 9}, {x: 7, y: 9}, {x: 8, y: 9}, {x: 9, y: 9},
      // Left wall
      {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 5}, 
      {x: 0, y: 6}, {x: 0, y: 7}, {x: 0, y: 8},
      // Right wall
      {x: 9, y: 1}, {x: 9, y: 2}, {x: 9, y: 3}, {x: 9, y: 4}, {x: 9, y: 5}, 
      {x: 9, y: 6}, {x: 9, y: 7}, {x: 9, y: 8}
    ],
    entrances: [
      { position: {x: 5, y: 9}, targetRoom: 'skills', targetSpawn: {x: 5, y: 1} }
    ],
    interactables: [
      {
        position: {x: 5, y: 3},
        type: 'secret',
        title: '🌟 The Ultimate Secret Chamber',
        content: `🎊 CONGRATULATIONS, MASTER EXPLORER! 🎊

You have discovered the most hidden chamber in this digital realm! Only the most persistent and curious adventurers find their way here through the Skills Temple.

🔮 SECRET DEVELOPER INSIGHTS:
• This RPG portfolio took 2 weeks to conceptualize and build
• Contains 1,500+ lines of TypeScript/React code
• Features 7 interconnected rooms with unique personalities
• Includes multiple easter eggs and secrets (you're finding them!)
• Built with Next.js 15, TypeScript, TailwindCSS, and lots of creativity

🏆 ACHIEVEMENT UNLOCKED:
"Ultimate Explorer" - Discovered the Secret Sanctum

🎁 SPECIAL REWARD FOR TRUE EXPLORERS:
You've proven you have the curiosity, persistence, and attention to detail that makes exceptional developers. These are exactly the qualities I bring to every project and team I work with.

✨ Thank you for taking the time to fully explore my digital world! ✨

🤝 Want to build something amazing together? Let's connect!`
      },
      {
        position: {x: 2, y: 7},
        type: 'info',
        title: '💎 Crystal of Ancient Wisdom',
        content: `This mystical crystal contains ancient developer wisdom passed down through generations of coders:

📜 "Code is poetry written for machines, but understood by humans."

📜 "The best debugging tool is still careful thought, coupled with judiciously placed console.logs."

📜 "Programs must be written for people to read, and only incidentally for machines to execute." - Harold Abelson

📜 "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler

💫 Keep coding, keep learning, keep exploring the infinite possibilities of technology! 🚀`
      },
      {
        position: {x: 8, y: 7},
        type: 'easter-egg',
        title: '🎮 Master Developer Console',
        content: `> console.log("Welcome to the ultimate secret developer console!")
> 
> GAME_STATS = {
>   rooms_explored: 7,
>   easter_eggs_found: 3,
>   exploration_level: "MASTER",
>   curiosity_points: 9999,
>   developer_appreciation: "MAXIMUM"
> }
>
> // Achievement System Status
> achievements.unlock("Ultimate Explorer");
> achievements.unlock("Easter Egg Master");
> achievements.unlock("Persistent Adventurer");
> 
> // Special Message for Code Enthusiasts
> if (player.foundAllSecrets) {
>   console.log("🎉 You've seen everything! Ready to build cool stuff together?");
> }
> 
> // Thanks for playing!
> process.exit(0); // 🚀 Until next time, keep coding!`
      }
    ],
    spawnPoint: {x: 5, y: 8}
  }
};
