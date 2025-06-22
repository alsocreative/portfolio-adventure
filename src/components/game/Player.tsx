import { Player as PlayerType } from '@/types/game';

interface PlayerProps {
  player: PlayerType;
}

export const Player = ({ player }: PlayerProps) => {
  const tileSize = 64;
  
  return (
    <div
      className={`absolute transition-all duration-200 ease-in-out flex items-center justify-center text-4xl ${
        player.isMoving ? 'scale-110' : 'scale-100'
      }`}
      style={{
        left: player.position.x * tileSize + 'px',
        top: player.position.y * tileSize + 'px',
        width: tileSize + 'px',
        height: tileSize + 'px',
        transform: `scale(${player.isMoving ? 1.1 : 1})`,
        zIndex: 10
      }}
    >
      {player.sprite}
    </div>
  );
};
