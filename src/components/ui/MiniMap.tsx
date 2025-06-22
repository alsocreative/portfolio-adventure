import { GameState } from '@/types/game';

interface MiniMapProps {
  gameState: GameState;
}

export const MiniMap = ({ gameState }: MiniMapProps) => {
  const getRoomColor = (roomId: string) => {
    if (roomId === gameState.currentRoom) return 'bg-yellow-400';
    switch (roomId) {
      case 'home': return 'bg-green-600';
      case 'projects': return 'bg-blue-600';
      case 'experience': return 'bg-purple-600';
      case 'contact': return 'bg-red-600';
      case 'skills': return 'bg-emerald-600';
      case 'achievements': return 'bg-orange-600';
      case 'secret': return 'bg-pink-600';
      default: return 'bg-gray-600';
    }
  };

  const getRoomIcon = (roomId: string) => {
    switch (roomId) {
      case 'home': return '🏠';
      case 'projects': return '�';
      case 'experience': return '�';
      case 'contact': return '📞';
      case 'skills': return '⚔️';
      case 'achievements': return '🏆';
      case 'secret': return '🌟';
      default: return '❓';
    }
  };

  // Map layout matching the ASCII map:
  // [Skills]  [Achievements]  [Secret]
  //    |          |            |
  // [Projects] - [Home] - [Experience]
  //               |
  //            [Contact]
  const mapLayout = [
    ['skills', 'achievements', 'secret'],
    ['projects', 'home', 'experience'],
    ['', 'contact', '']
  ];

  return (
    <div className="fixed top-4 right-4 bg-black bg-opacity-80 text-white p-3 rounded-lg pixel-font">
      <div className="text-xs font-bold mb-2">🗺️ RPG MAP</div>
      <div className="grid grid-cols-3 gap-1">
        {mapLayout.flat().map((roomId, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded flex items-center justify-center text-xs ${
              roomId ? getRoomColor(roomId) : 'bg-transparent'
            } ${
              roomId === gameState.currentRoom ? 'ring-2 ring-white animate-pulse' : ''
            }`}
            title={roomId ? gameState.rooms[roomId]?.name : ''}
          >
            {roomId ? getRoomIcon(roomId) : ''}
          </div>
        ))}
      </div>
      <div className="text-xs mt-2 text-center opacity-70">
        Current: {gameState.rooms[gameState.currentRoom]?.name}
      </div>
    </div>
  );
};
