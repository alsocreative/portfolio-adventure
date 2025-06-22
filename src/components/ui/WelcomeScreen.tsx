interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 pixel-font">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl text-white mb-4 leading-tight">
            🎮 Shade RPG
          </h1>
          <p className="text-lg text-gray-300 mb-2">
            Interactive Portfolio Adventure
          </p>
          <p className="text-sm text-gray-500">
            A pixel RPG experience built with React & Next.js
          </p>
        </div>

        <div className="bg-black bg-opacity-50 p-6 rounded-lg mb-8 text-left">
          <h2 className="text-white text-lg mb-4">🗺️ Your Quest:</h2>
          <div className="space-y-2 text-sm text-gray-300">
            <div>🏠 <strong>Home Room:</strong> Start your journey</div>
            <div>💻 <strong>Projects Room:</strong> Discover my work</div>
            <div>📋 <strong>Experience Room:</strong> View my background</div>
            <div>📞 <strong>Contact Room:</strong> Let&apos;s connect!</div>
            <div>🥚 <strong>Secret:</strong> Find the hidden easter egg</div>
          </div>
        </div>

        <div className="bg-black bg-opacity-50 p-4 rounded-lg mb-8 text-left">
          <h3 className="text-white text-sm mb-3">🎮 Controls:</h3>
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
            <div>↑↓←→ Move</div>
            <div>WASD Move</div>
            <div>SPACE Interact</div>
            <div>ESC Close</div>
          </div>
        </div>

        <button
          onClick={onStart}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 animate-pulse"
        >
          🚀 Start Adventure
        </button>
        
        <div className="mt-6 text-xs text-gray-500">
          Built with ❤️ by a pixel art enthusiast
        </div>
      </div>
    </div>
  );
};
