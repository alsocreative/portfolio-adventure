import { Room as RoomType } from '@/types/game';
import { Sprite } from '../ui/Sprite';

interface RoomProps {
  room: RoomType;
  useCustomSprites?: boolean;
}

export const Room = ({ room, useCustomSprites = false }: RoomProps) => {
  const tileSize = 64;
  
  const getTileEmoji = (x: number, y: number) => {
    // Check if it's a wall
    const isWall = room.walls.some(wall => wall.x === x && wall.y === y);
    if (isWall) return '🧱';
    
    // Check if it's an entrance
    const isEntrance = room.entrances.some(entrance => entrance.position.x === x && entrance.position.y === y);
    if (isEntrance) return '🚪';
    
    // Check if it's an interactable
    const interactable = room.interactables.find(item => item.position.x === x && item.position.y === y);
    if (interactable) {
      switch (interactable.type) {
        case 'project': return '💻';
        case 'experience': return '📋';
        case 'contact': return '📞';
        case 'easter-egg': return '🌟';
        default: return '❓';
      }
    }
    
    // Floor tile
    return '';
  };

  const getSpriteType = (x: number, y: number): 'wall' | 'door' | 'project' | 'experience' | 'contact' | 'easter-egg' | 'floor' => {
    // Check if it's a wall
    const isWall = room.walls.some(wall => wall.x === x && wall.y === y);
    if (isWall) return 'wall';
    
    // Check if it's an entrance
    const isEntrance = room.entrances.some(entrance => entrance.position.x === x && entrance.position.y === y);
    if (isEntrance) return 'door';
    
    // Check if it's an interactable
    const interactable = room.interactables.find(item => item.position.x === x && item.position.y === y);
    if (interactable) {
      return interactable.type as 'project' | 'experience' | 'contact' | 'easter-egg';
    }
    
    // Floor tile
    return 'floor';
  };

  return (
    <div 
      className="relative"
      style={{ 
        width: '640px', 
        height: '640px',
        backgroundColor: room.background 
      }}
    >
      {/* Render grid */}
      {Array.from({ length: 10 }, (_, y) =>
        Array.from({ length: 10 }, (_, x) => (
          <div
            key={`${x}-${y}`}
            className="absolute border border-gray-600 border-opacity-20 flex items-center justify-center"
            style={{
              left: x * tileSize + 'px',
              top: y * tileSize + 'px',
              width: tileSize + 'px',
              height: tileSize + 'px'
            }}
          >
            {useCustomSprites ? (
              <Sprite 
                type={getSpriteType(x, y)} 
                size={tileSize}
                useEmoji={false}
              />
            ) : (
              <div className="text-2xl">
                {getTileEmoji(x, y)}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};
