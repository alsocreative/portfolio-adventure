# 🎮 RPG Portfolio - Interactive 2D Adventure

Welcome to my **Retro 2D Pixel RPG Portfolio**! This unique interactive experience combines classic Nokia/Prince of Persia-style gameplay with modern web development to showcase my skills and projects in an engaging, game-like format.

## 🌟 Features

### 🎮 Game Mechanics
- **Retro 2D Movement**: Navigate using ARROW KEYS or WASD
- **Room-Based Exploration**: 7 interconnected rooms to discover
- **Collision Detection**: Realistic wall and object interactions
- **Interactive NPCs/Objects**: Click or approach objects to learn more
- **Mini-Map Navigation**: Real-time room tracking with visual map
- **Sound Effects**: Simulated retro game audio feedback

### 🗺️ World Map
```
   [Skills]  [Achievements]  [Secret]
      |          |            |
   [Projects] - [Home] - [Experience]
                 |
             [Contact]
```

### 🏰 Explorable Rooms

1. **🏠 Town Square (Home)** - Central hub with welcome message and navigation info
2. **🚀 Projects Gallery** - Interactive showcase of my development work
3. **💼 Experience Hall** - Professional journey and career achievements  
4. **📞 Contact Chamber** - Connection methods and social links
5. **⚔️ Skills Temple** - Technical abilities and expertise levels
6. **🏆 Achievements Library** - Awards, recognitions, and milestones
7. **🌟 Secret Sanctum** - Hidden room with easter eggs (find all 3!)

## 🛠️ Technical Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom pixel art styles
- **State Management**: React hooks with custom game state management
- **Architecture**: Modular component system with separation of concerns
- **Assets**: Emoji-based sprites with Sharp integration for custom pixel art

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alsocreative/portfolio-adventure rpg-portfolio
cd rpg-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### 🎨 Asset Generation (Optional)
```bash
npm run generate-sprites
```

## 🎮 How to Play

### Controls
- **Movement**: Use ARROW KEYS or WASD to move your wizard character
- **Interaction**: Walk into objects to trigger dialogues and information
- **Navigation**: Walk through door openings (gaps in walls) to travel between rooms
- **Map**: Check the mini-map in the top-right corner to see your location

### Game Objectives
- 🗺️ **Explore All Rooms**: Visit each of the 7 unique areas
- 💬 **Read All Content**: Interact with objects to learn about my skills and projects
- 🥚 **Find Easter Eggs**: Discover 3 hidden secrets throughout the world
- 🎯 **Complete Exploration**: Unlock the "Ultimate Explorer" achievement

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   └── page.tsx           # Main RPG game page
├── components/
│   ├── game/              # Core game components
│   │   ├── GameEngine.tsx # Main game controller
│   │   ├── Player.tsx     # Player character component
│   │   └── Room.tsx       # Room rendering and logic
│   └── ui/                # User interface components
│       ├── DialogBox.tsx  # Interaction dialogue system
│       ├── GameControls.tsx # Control instructions
│       ├── MiniMap.tsx    # Navigation map
│       ├── RoomInfo.tsx   # Room information display
│       ├── Sprite.tsx     # Emoji/pixel art sprite system
│       └── WelcomeScreen.tsx # Game introduction
├── data/
│   └── gameData.ts        # Room layouts, content, and portfolio data
├── hooks/
│   ├── useGameState.ts    # Game state management
│   └── useKeyboard.ts     # Keyboard input handling
├── types/
│   └── game.ts           # TypeScript type definitions
└── utils/
    └── pixelArtProcessor.ts # Image processing utilities
```

## 🎯 Key Features Showcase

### 🔧 Technical Excellence
- **Modular Architecture**: Clean separation of game logic, UI, and data
- **Type Safety**: Full TypeScript implementation with strict typing
- **Performance**: Optimized rendering with React best practices
- **Responsive Design**: Works on desktop and mobile devices
- **Extensible System**: Easy to add new rooms, interactions, and features

### 🎨 Creative Design
- **Pixel Art Aesthetic**: Retro gaming visual style
- **Interactive Storytelling**: Portfolio content delivered through gameplay
- **Easter Egg System**: Hidden surprises for thorough explorers
- **Dynamic UI**: Contextual information and real-time feedback

### 🚀 Modern Development
- **Next.js 15**: Latest web framework features
- **Custom Hooks**: Reusable game logic
- **Component Composition**: Flexible and maintainable UI architecture
- **Asset Pipeline**: Support for custom pixel art with Sharp processing

## 🏆 Achievements System

Discover these special achievements as you explore:

- 🥚 **Easter Egg Hunter**: Find your first hidden secret
- 🗺️ **Room Explorer**: Visit all main rooms  
- 🌟 **Ultimate Explorer**: Find all easter eggs and complete full exploration
- 🎮 **Retro Gamer**: Appreciate the nostalgic gaming experience

## 🤝 Contributing

This portfolio is a personal project, but I'm always open to feedback and suggestions! Feel free to:

- Report bugs or issues
- Suggest new features or rooms
- Share your own RPG portfolio implementations
- Discuss game development techniques

## 📞 Contact & Connect

Found this project interesting? Let's connect!

- 📧 **Email**: sh20raj@gmail.com
- 💼 **LinkedIn**: [linkedin.com/in/sh20raj](https://linkedin.com/in/sh20raj)
- 🐙 **GitHub**: [github.com/SH20RAJ](https://github.com/SH20RAJ)  
- 🌐 **Website**: [shaswat.live](https://shaswat.live)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️, ☕, and lots of late-night coding sessions!**

*P.S. - Make sure to find all the easter eggs! There's a special message waiting for true explorers... 🎉*
