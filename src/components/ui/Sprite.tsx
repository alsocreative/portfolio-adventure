import Image from 'next/image';

interface SpriteProps {
  type: 'player' | 'wall' | 'door' | 'project' | 'experience' | 'contact' | 'easter-egg' | 'floor';
  size?: number;
  className?: string;
  useEmoji?: boolean;
}

const emojiMap = {
  player: '🧙‍♂️',
  wall: '🧱',
  door: '🚪',
  project: '💻',
  experience: '📋',
  contact: '📞',
  'easter-egg': '🌟',
  floor: ''
};

export const Sprite = ({ type, size = 64, className = '', useEmoji = true }: SpriteProps) => {
  if (useEmoji) {
    return (
      <div 
        className={`flex items-center justify-center text-2xl ${className}`}
        style={{ width: size, height: size }}
      >
        {emojiMap[type]}
      </div>
    );
  }

  // Use custom sprite images
  const spritePath = `/assets/sprites/${type}.png`;
  
  return (
    <Image
      src={spritePath}
      alt={type}
      width={size}
      height={size}
      className={`pixelated ${className}`}
      style={{
        imageRendering: 'pixelated'
      }}
      unoptimized // Disable Next.js optimization for pixel art
    />
  );
};
