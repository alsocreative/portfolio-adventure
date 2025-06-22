import { Room } from '@/types/game';

// Portfolio data for interactions
export const portfolioData = {
    projects: [
        {
            title: "Sh Portfolio",
            description: "A modern, interactive portfolio built with Next.js and creative animations",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vanta.js"],
            link: "https://shaswat.live",
            github: "https://github.com/sh20raj/portfolio"
        },
        {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with payment integration",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            link: "https://demo-shop.com",
            github: "https://github.com/sh20raj/ecommerce"
        },
        {
            title: "Task Management App",
            description: "Collaborative task management with real-time updates",
            tech: ["Vue.js", "Firebase", "Socket.io"],
            link: "https://task-app.com",
            github: "https://github.com/sh20raj/task-app"
        },
        {
            title: "RPG Portfolio Game",
            description: "This very portfolio! A retro 2D pixel RPG built with React",
            tech: ["React", "TypeScript", "Canvas API", "CSS Animations"],
            link: "https://portfolio.dev",
            github: "https://github.com/sh20raj/rpg-portfolio"
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
    skills: [
        {
            category: "Frontend",
            skills: ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS", "Three.js"],
            level: "Expert"
        },
        {
            category: "Backend",
            skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "Docker"],
            level: "Advanced"
        },
        {
            category: "Tools & Design",
            skills: ["Git", "Figma", "Photoshop", "Blender", "AWS", "Vercel"],
            level: "Proficient"
        }
    ],
    achievements: [
        {
            title: "🏆 Top 1% Developer",
            description: "Ranked in top 1% on Stack Overflow with 50k+ reputation",
            year: "2023",
            category: "Community"
        },
        {
            title: "🚀 Startup Success",
            description: "Helped build a SaaS platform from 0 to 10k+ users",
            year: "2023",
            category: "Professional"
        },
        {
            title: "🎨 Design Awards",
            description: "Won 3 UI/UX design competitions for creative portfolios",
            year: "2022",
            category: "Creative"
        },
        {
            title: "📚 Open Source Champion",
            description: "Contributed to 25+ open source projects with 1k+ stars",
            year: "2023",
            category: "Community"
        }
    ],
    contact: {
        email: "mail@shaswat.live",
        github: "https://github.com/sh20raj",
        linkedin: "https://linkedin.com/in/sh20raj",
        twitter: "https://twitter.com/sh20raj"
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
            { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
            { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 },
            // Bottom wall (entrance to south)  
            { x: 0, y: 9 }, { x: 1, y: 9 }, { x: 2, y: 9 }, { x: 3, y: 9 }, { x: 4, y: 9 },
            { x: 6, y: 9 }, { x: 7, y: 9 }, { x: 8, y: 9 }, { x: 9, y: 9 },
            // Left wall (entrance to west)
            { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 6 },
            { x: 0, y: 7 }, { x: 0, y: 8 },
            // Right wall (entrance to east)  
            { x: 9, y: 1 }, { x: 9, y: 2 }, { x: 9, y: 3 }, { x: 9, y: 4 }, { x: 9, y: 6 },
            { x: 9, y: 7 }, { x: 9, y: 8 }
        ],
        entrances: [
            { position: { x: 5, y: 0 }, targetRoom: 'skills', targetSpawn: { x: 5, y: 8 } },
            { position: { x: 5, y: 9 }, targetRoom: 'contact', targetSpawn: { x: 5, y: 1 } },
            { position: { x: 0, y: 5 }, targetRoom: 'projects', targetSpawn: { x: 8, y: 5 } },
            { position: { x: 9, y: 5 }, targetRoom: 'experience', targetSpawn: { x: 1, y: 5 } }
        ],
        interactables: [
            {
                position: { x: 5, y: 5 },
                type: 'welcome',
                title: '🏰 Welcome to the RPG Portfolio!',
                content: `Welcome, adventurer! You've entered my digital realm where code meets creativity.

🎮 CONTROLS:
• ARROW KEYS or WASD to move
• Walk into doors (gaps in walls) to travel
• Approach objects to interact

🗺️ EXPLORE THE REALM:
🏠 North: Skills Temple - Master my abilities
📧 South: Contact Chamber - Connect with me
🚀 West: Projects Gallery - See my creations  
💼 East: Experience Hall - Learn my journey

There are hidden secrets scattered throughout... 👀`
            },
            {
                position: { x: 2, y: 3 },
                type: 'info',
                title: '� Town Bulletin',
                content: `🏆 RECENT ACHIEVEMENTS:
• Built this RPG portfolio from scratch!
• Mastered React, TypeScript & Next.js
• Created 15+ amazing projects
• Helped startups scale to 10K+ users

🎯 CURRENT QUEST:
Looking for exciting opportunities to create amazing digital experiences!`
            }
        ],
        spawnPoint: { x: 5, y: 7 }
    },

    projects: {
        id: 'projects',
        name: '🚀 Projects Gallery',
        background: '#1a237e',
        walls: [
            // Top wall (entrance to skills)
            { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
            { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 },
            // Bottom wall
            { x: 0, y: 9 }, { x: 1, y: 9 }, { x: 2, y: 9 }, { x: 3, y: 9 }, { x: 4, y: 9 },
            { x: 5, y: 9 }, { x: 6, y: 9 }, { x: 7, y: 9 }, { x: 8, y: 9 }, { x: 9, y: 9 },
            // Left wall
            { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 },
            { x: 0, y: 6 }, { x: 0, y: 7 }, { x: 0, y: 8 },
            // Right wall (entrance to home)
            { x: 9, y: 1 }, { x: 9, y: 2 }, { x: 9, y: 3 }, { x: 9, y: 4 }, { x: 9, y: 6 },
            { x: 9, y: 7 }, { x: 9, y: 8 }
        ],
        entrances: [
            { position: { x: 9, y: 5 }, targetRoom: 'home', targetSpawn: { x: 1, y: 5 } },
            { position: { x: 5, y: 0 }, targetRoom: 'skills', targetSpawn: { x: 5, y: 8 } }
        ],
        interactables: [
            ...portfolioData.projects.map((project, index) => ({
                position: { x: 2 + (index % 2) * 4, y: 2 + Math.floor(index / 2) * 2 },
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
                position: { x: 1, y: 8 },
                type: 'info' as const,
                title: '🎨 Gallery Info',
                content: `This gallery showcases my best work spanning web development, creative coding, and digital experiences.

Each project represents hours of passionate development and problem-solving. Feel free to explore the live demos and source code!`
            }
        ],
        spawnPoint: { x: 8, y: 5 }
    },

    experience: {
        id: 'experience',
        name: '💼 Experience Hall',
        background: '#4a148c',
        walls: [
            // Top wall (entrance to achievements)
            { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
            { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 },
            // Bottom wall
            { x: 0, y: 9 }, { x: 1, y: 9 }, { x: 2, y: 9 }, { x: 3, y: 9 }, { x: 4, y: 9 },
            { x: 5, y: 9 }, { x: 6, y: 9 }, { x: 7, y: 9 }, { x: 8, y: 9 }, { x: 9, y: 9 },
            // Left wall (entrance to home)
            { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 6 },
            { x: 0, y: 7 }, { x: 0, y: 8 },
            // Right wall
            { x: 9, y: 1 }, { x: 9, y: 2 }, { x: 9, y: 3 }, { x: 9, y: 4 }, { x: 9, y: 5 },
            { x: 9, y: 6 }, { x: 9, y: 7 }, { x: 9, y: 8 }
        ],
        entrances: [
            { position: { x: 0, y: 5 }, targetRoom: 'home', targetSpawn: { x: 8, y: 5 } },
            { position: { x: 5, y: 0 }, targetRoom: 'achievements', targetSpawn: { x: 5, y: 8 } }
        ],
        interactables: [
            ...portfolioData.experience.map((exp, index) => ({
                position: { x: 3, y: 2 + (index * 3) },
                type: 'experience' as const,
                title: `🏢 ${exp.role}`,
                content: `🏢 ${exp.company}
📅 ${exp.period}

${exp.description}

🏆 Key Achievements:
${exp.achievements.map(achievement => `• ${achievement}`).join('\n')}`
            })),
            {
                position: { x: 7, y: 7 },
                type: 'info' as const,
                title: '📊 Career Stats',
                content: `🎯 PROFESSIONAL SUMMARY:
• 3+ years of professional development
• 20+ successful projects delivered
• 10K+ users impacted by my work
• 5+ technologies mastered

💡 Always learning, always growing!`
            }
        ],
        spawnPoint: { x: 1, y: 5 }
    },

    contact: {
        id: 'contact',
        name: '📞 Contact Chamber',
        background: '#bf360c',
        walls: [
            // Top wall (entrance to home)
            { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
            { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 },
            // Bottom wall
            { x: 0, y: 9 }, { x: 1, y: 9 }, { x: 2, y: 9 }, { x: 3, y: 9 }, { x: 4, y: 9 },
            { x: 5, y: 9 }, { x: 6, y: 9 }, { x: 7, y: 9 }, { x: 8, y: 9 }, { x: 9, y: 9 },
            // Left wall
            { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 },
            { x: 0, y: 6 }, { x: 0, y: 7 }, { x: 0, y: 8 },
            // Right wall
            { x: 9, y: 1 }, { x: 9, y: 2 }, { x: 9, y: 3 }, { x: 9, y: 4 }, { x: 9, y: 5 },
            { x: 9, y: 6 }, { x: 9, y: 7 }, { x: 9, y: 8 }
        ],
        entrances: [
            { position: { x: 5, y: 0 }, targetRoom: 'home', targetSpawn: { x: 5, y: 8 } }
        ],
        interactables: [
            {
                position: { x: 5, y: 4 },
                type: 'contact',
                title: '📞 Let\'s Connect!',
                content: `Ready to embark on a new adventure together? I'm always excited to collaborate on innovative projects!

📧 Email: ${portfolioData.contact.email}

🔗 Find me across the digital realm:`,
                links: [
                    { text: '💼 LinkedIn', url: portfolioData.contact.linkedin },
                    { text: '🐙 GitHub', url: portfolioData.contact.github },
                    { text: '🐦 Twitter', url: portfolioData.contact.twitter }
                ]
            },
            {
                position: { x: 2, y: 7 },
                type: 'info',
                title: '💬 Message Board',
                content: `📝 PREFERRED CONTACT METHODS:
• Email for business inquiries
• LinkedIn for professional networking  
• GitHub for code collaboration
• Twitter for casual tech discussions

⚡ Response time: Usually within 24 hours!`
            },
            {
                position: { x: 8, y: 2 },
                type: 'easter-egg',
                title: '🥚 Hidden Treasure!',
                content: `🎉 Congratulations, brave explorer! 

You've discovered the legendary Easter Egg of Curiosity! This secret chamber was hidden for those who dare to explore every corner.

🏆 Achievement Unlocked: "Thorough Explorer"

Your attention to detail and persistence are exactly the qualities that make great developers. 

Keep exploring, keep learning, keep building amazing things! 🚀✨`
            }
        ],
        spawnPoint: { x: 5, y: 1 }
    },

    skills: {
        id: 'skills',
        name: '⚔️ Skills Temple',
        background: '#1b5e20',
        walls: [
            // Top wall (entrance to secret)
            { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
            { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 },
            // Bottom wall (entrance to home)
            { x: 0, y: 9 }, { x: 1, y: 9 }, { x: 2, y: 9 }, { x: 3, y: 9 }, { x: 4, y: 9 },
            { x: 6, y: 9 }, { x: 7, y: 9 }, { x: 8, y: 9 }, { x: 9, y: 9 },
            // Left wall
            { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 },
            { x: 0, y: 6 }, { x: 0, y: 7 }, { x: 0, y: 8 },
            // Right wall (entrance to projects)
            { x: 9, y: 1 }, { x: 9, y: 2 }, { x: 9, y: 3 }, { x: 9, y: 4 }, { x: 9, y: 6 },
            { x: 9, y: 7 }, { x: 9, y: 8 }
        ],
        entrances: [
            { position: { x: 5, y: 9 }, targetRoom: 'home', targetSpawn: { x: 5, y: 1 } },
            { position: { x: 9, y: 5 }, targetRoom: 'projects', targetSpawn: { x: 1, y: 5 } },
            { position: { x: 5, y: 0 }, targetRoom: 'secret', targetSpawn: { x: 5, y: 8 } }
        ],
        interactables: [
            ...portfolioData.skills.map((skillGroup, index) => ({
                position: { x: 2 + (index * 3), y: 3 },
                type: 'skill' as const,
                title: `${skillGroup.category === 'Frontend' ? '🎨' : skillGroup.category === 'Backend' ? '⚙️' : '🛠️'} ${skillGroup.category}`,
                content: `Mastery Level: ${skillGroup.level}

🔧 Technologies:
${skillGroup.skills.map(skill => `• ${skill}`).join('\n')}

${skillGroup.level === 'Expert' ? '💎 Mastered through years of practice!' :
                        skillGroup.level === 'Advanced' ? '⭐ Solid experience with real projects!' :
                            '📚 Continuously learning and improving!'}`
            })),
            {
                position: { x: 5, y: 7 },
                type: 'info' as const,
                title: '🏛️ Temple Wisdom',
                content: `"The path of mastery is not a destination, but a journey of continuous learning."

🎯 CURRENT FOCUS:
• Advanced React patterns
• WebGL & Three.js
• AI/ML integration
• Performance optimization

💪 Always sharpening my skills!`
            }
        ],
        spawnPoint: { x: 5, y: 8 }
    },

    achievements: {
        id: 'achievements',
        name: '🏆 Achievements Library',
        background: '#e65100',
        walls: [
            // Top wall (entrance to secret)
            { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
            { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 },
            // Bottom wall (entrance to experience)
            { x: 0, y: 9 }, { x: 1, y: 9 }, { x: 2, y: 9 }, { x: 3, y: 9 }, { x: 4, y: 9 },
            { x: 6, y: 9 }, { x: 7, y: 9 }, { x: 8, y: 9 }, { x: 9, y: 9 },
            // Left wall
            { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 },
            { x: 0, y: 6 }, { x: 0, y: 7 }, { x: 0, y: 8 },
            // Right wall
            { x: 9, y: 1 }, { x: 9, y: 2 }, { x: 9, y: 3 }, { x: 9, y: 4 }, { x: 9, y: 5 },
            { x: 9, y: 6 }, { x: 9, y: 7 }, { x: 9, y: 8 }
        ],
        entrances: [
            { position: { x: 5, y: 9 }, targetRoom: 'experience', targetSpawn: { x: 5, y: 1 } },
            { position: { x: 5, y: 0 }, targetRoom: 'secret', targetSpawn: { x: 5, y: 8 } }
        ],
        interactables: [
            ...portfolioData.achievements.map((achievement, index) => ({
                position: { x: 2 + (index % 2) * 4, y: 2 + Math.floor(index / 2) * 2 },
                type: 'achievement' as const,
                title: achievement.title,
                content: `${achievement.description}

📅 Year: ${achievement.year}
🏷️ Category: ${achievement.category}

This achievement represents dedication, hard work, and continuous learning!`
            })),
            {
                position: { x: 5, y: 7 },
                type: 'info' as const,
                title: '📚 Hall of Fame',
                content: `Welcome to my personal Hall of Fame! Each trophy here represents a milestone in my journey as a developer.

🎯 ACHIEVEMENT STATS:
• 4 Major accomplishments
• 3 Different categories
• 2+ Years of recognition
• 1 Passionate developer

The journey continues... 🚀`
            }
        ],
        spawnPoint: { x: 5, y: 8 }
    },

    secret: {
        id: 'secret',
        name: '🌟 Secret Sanctum',
        background: '#4a148c',
        walls: [
            // Top wall
            { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
            { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 },
            // Bottom wall (entrance)
            { x: 0, y: 9 }, { x: 1, y: 9 }, { x: 2, y: 9 }, { x: 3, y: 9 }, { x: 4, y: 9 },
            { x: 6, y: 9 }, { x: 7, y: 9 }, { x: 8, y: 9 }, { x: 9, y: 9 },
            // Left wall
            { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 },
            { x: 0, y: 6 }, { x: 0, y: 7 }, { x: 0, y: 8 },
            // Right wall
            { x: 9, y: 1 }, { x: 9, y: 2 }, { x: 9, y: 3 }, { x: 9, y: 4 }, { x: 9, y: 5 },
            { x: 9, y: 6 }, { x: 9, y: 7 }, { x: 9, y: 8 }
        ],
        entrances: [
            { position: { x: 5, y: 9 }, targetRoom: 'skills', targetSpawn: { x: 5, y: 1 } }
        ],
        interactables: [
            {
                position: { x: 5, y: 3 },
                type: 'secret',
                title: '🌟 The Ultimate Secret',
                content: `🎊 CONGRATULATIONS, MASTER EXPLORER! 🎊

You have discovered the most hidden chamber in this digital realm! Only the most persistent and curious adventurers find their way here.

🔮 SECRET DEVELOPER INSIGHTS:
• This portfolio took 48 hours to build
• Contains 1,200+ lines of TypeScript
• Features 7 interconnected rooms
• Includes 3 hidden easter eggs (you found them all!)

🏆 ACHIEVEMENT UNLOCKED:
"Ultimate Explorer" - Found all secret areas

🎁 SPECIAL REWARD:
You've proven you have the curiosity and persistence that makes exceptional developers. I'd love to work with someone who explores every possibility!

✨ Thank you for taking the time to explore my world! ✨`
            },
            {
                position: { x: 2, y: 7 },
                type: 'info',
                title: '💎 Crystal of Wisdom',
                content: `This mystical crystal contains ancient developer wisdom:

"Code is poetry written for machines, but understood by humans."

"The best debugging tool is still careful thought, coupled with judiciously placed print statements."

"Programs must be written for people to read, and only incidentally for machines to execute."

Keep coding, keep learning, keep exploring! 🚀`
            },
            {
                position: { x: 8, y: 7 },
                type: 'easter-egg',
                title: '🎮 Developer Console',
                content: `> console.log("Welcome to the secret developer console!")
> 
> EASTER_EGG_COUNTER: 3/3 ✅
> EXPLORATION_LEVEL: MASTER 🎯
> CURIOSITY_POINTS: 9999 �
>
> // You've found all the secrets!
> // Ready to build amazing things together?
> 
> process.exit(0) // Thanks for playing! 🎉`
            }
        ],
        spawnPoint: { x: 5, y: 8 }
    }
};
