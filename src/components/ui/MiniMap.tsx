import { GameState } from '@/types/game';

interface MiniMapProps {
  gameState: GameState;
}

export const MiniMap = ({ gameState }: MiniMapProps) => {
  const rooms = ['home', 'projects', 'experience', 'contact'];
  
  const getRoomColor = (roomId: string) => {
    if (roomId === gameState.currentRoom) return 'bg-yellow-400';
    switch (roomId) {
      case 'home': return 'bg-green-600';
      case 'projects': return 'bg-blue-600';
      case 'experience': return 'bg-purple-600';
      case 'contact': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  const getRoomIcon = (roomId: string) => {
    switch (roomId) {
      case 'home': return '🏠';
      case 'projects': return '💻';
      case 'experience': return '📋';
      case 'contact': return '📞';
      default: return '❓';
    }
  };

  return (
    <div className="fixed top-4 right-4 bg-black bg-opacity-80 text-white p-3 rounded-lg pixel-font">
      <div className="text-xs font-bold mb-2">🗺️ MAP</div>
      <div className="grid grid-cols-2 gap-1">
        {rooms.map(roomId => (
          <div
            key={roomId}
            className={`w-8 h-8 rounded flex items-center justify-center text-xs ${getRoomColor(roomId)} ${
              roomId === gameState.currentRoom ? 'ring-2 ring-white' : ''
            }`}
            title={gameState.rooms[roomId].name}
          >
            {getRoomIcon(roomId)}
          </div>
        ))}
      </div>
    </div>
  );
};
