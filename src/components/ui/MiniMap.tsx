import { useState, useEffect } from 'react';
import { GameState } from '@/types/game';

interface MiniMapProps {
  gameState: GameState;
  secretsRevealed?: string[];
}

export const MiniMap = ({ gameState, secretsRevealed = [] }: MiniMapProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Handle keyboard shortcuts for map
  useEffect(() => {
    const handleMapKeydown = (event: KeyboardEvent) => {
      if (event.code === 'KeyM' && !gameState.showDialog) {
        event.preventDefault();
        setIsFullscreen(true);
      } else if (event.code === 'Escape' && isFullscreen) {
        event.preventDefault();
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleMapKeydown);
    return () => window.removeEventListener('keydown', handleMapKeydown);
  }, [gameState.showDialog, isFullscreen]);

  const getRoomColor = (roomId: string) => {
    if (roomId === gameState.currentRoom) return 'bg-yellow-400 shadow-yellow-400/50';
    switch (roomId) {
      case 'home': return 'bg-green-600 shadow-green-600/50';
      case 'projects': return 'bg-blue-600 shadow-blue-600/50';
      case 'experience': return 'bg-purple-600 shadow-purple-600/50';
      case 'contact': return 'bg-red-600 shadow-red-600/50';
      case 'skills': return 'bg-emerald-600 shadow-emerald-600/50';
      case 'achievements': return 'bg-orange-600 shadow-orange-600/50';
      case 'secret': return 'bg-pink-600 shadow-pink-600/50';
      default: return 'bg-gray-600 shadow-gray-600/50';
    }
  };

  const getRoomIcon = (roomId: string) => {
    switch (roomId) {
      case 'home': return '🏠';
      case 'projects': return '🚀';
      case 'experience': return '💼';
      case 'contact': return '📞';
      case 'skills': return '⚔️';
      case 'achievements': return '🏆';
      case 'secret': return secretsRevealed.includes('secret') ? '🎉' : '❓';
      default: return secretsRevealed.includes(roomId) ? '✨' : '❓';
    }
  };

  const mapLayout = [
    ['skills', 'achievements', 'secret'],
    ['projects', 'home', 'experience'],
    ['', 'contact', '']
  ];

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-900 border-4 border-white rounded-lg max-w-4xl w-full p-8 pixel-font">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-white">🗺️ RPG REALM MAP</h1>
            <button
              onClick={() => setIsFullscreen(false)}
              className="text-white hover:text-gray-300 text-2xl font-bold"
              title="Press ESC to close"
            >
              ✕
            </button>
          </div>

          <div className="flex justify-center mb-6">
            <div className="grid grid-cols-3 gap-4">
              {mapLayout.flat().map((roomId, index) => (
                <div key={index} className="w-24 h-24 flex items-center justify-center">
                  {roomId && (
                    <div
                      className={`w-full h-full rounded-lg flex flex-col items-center justify-center transition-all duration-300 border-2 border-white/20 ${getRoomColor(roomId)} ${
                        roomId === gameState.currentRoom ? 'ring-4 ring-yellow-300 animate-pulse scale-110' : ''
                      }`}
                    >
                      <div className="text-3xl mb-1">{getRoomIcon(roomId)}</div>
                      <div className="text-xs text-center font-bold text-white/90">
                        {gameState.rooms[roomId]?.name.replace(/^[^\s]+ /, '')}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black bg-opacity-50 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-bold text-white mb-2">
              📍 Current: {gameState.rooms[gameState.currentRoom]?.name}
            </h2>
          </div>

          <div className="bg-black bg-opacity-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-white mb-3">⌨️ Controls</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
              <div><span className="text-blue-400">M</span> - Toggle Map</div>
              <div><span className="text-blue-400">ESC</span> - Close</div>
              <div><span className="text-blue-400">SPACE</span> - Interact</div>
              <div><span className="text-blue-400">WASD</span> - Move</div>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500 border-t border-gray-600 pt-4">
            Press ESC to close • Made with React & Next.js
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 bg-black bg-opacity-90 text-white p-3 rounded-lg pixel-font border-2 border-gray-600 shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs font-bold">🗺️ REALM MAP</div>
        <button
          onClick={() => setIsFullscreen(true)}
          className="text-xs text-blue-400 hover:text-blue-300"
          title="Press M for fullscreen"
        >
          📏
        </button>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {mapLayout.flat().map((roomId, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded flex items-center justify-center text-xs transition-all duration-200 ${
              roomId ? `${getRoomColor(roomId)} shadow-lg` : 'bg-transparent'
            } ${
              roomId === gameState.currentRoom ? 'ring-2 ring-white animate-pulse scale-110' : ''
            }`}
            title={roomId ? gameState.rooms[roomId]?.name : ''}
          >
            {roomId ? getRoomIcon(roomId) : ''}
          </div>
        ))}
      </div>
      <div className="text-xs mt-2 text-center opacity-70">
        {gameState.rooms[gameState.currentRoom]?.name}
      </div>
      <div className="text-xs text-center text-blue-400 opacity-50">
        Press M for details
      </div>
    </div>
  );
};
