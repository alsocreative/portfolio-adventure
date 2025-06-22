import { useState, useCallback } from 'react';
import { GameState, Position, Direction, Interactable } from '@/types/game';
import { rooms } from '@/data/gameData';

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentRoom: 'home',
    player: {
      position: { x: 5, y: 7 },
      direction: 'down',
      isMoving: false,
      sprite: '🧙‍♂️'
    },
    showDialog: false,
    currentDialog: null,
    rooms
  });

  // Check if position has collision (wall)
  const hasCollision = useCallback((position: Position, roomId: string): boolean => {
    const room = rooms[roomId];
    return room.walls.some(wall => wall.x === position.x && wall.y === position.y);
  }, []);

  // Check if position is an entrance
  const checkEntrance = useCallback((position: Position, roomId: string) => {
    const room = rooms[roomId];
    return room.entrances.find(entrance => 
      entrance.position.x === position.x && entrance.position.y === position.y
    );
  }, []);

  // Check if position has an interactable
  const checkInteractable = useCallback((position: Position, roomId: string): Interactable | null => {
    const room = rooms[roomId];
    return room.interactables.find(item => 
      item.position.x === position.x && item.position.y === position.y
    ) || null;
  }, []);

  // Move player
  const movePlayer = useCallback((direction: Direction) => {
    setGameState(prev => {
      const newPosition = { ...prev.player.position };
      
      switch (direction) {
        case 'up':
          newPosition.y -= 1;
          break;
        case 'down':
          newPosition.y += 1;
          break;
        case 'left':
          newPosition.x -= 1;
          break;
        case 'right':
          newPosition.x += 1;
          break;
      }

      // Check boundaries
      if (newPosition.x < 0 || newPosition.x > 9 || newPosition.y < 0 || newPosition.y > 9) {
        return prev;
      }

      // Check collision
      if (hasCollision(newPosition, prev.currentRoom)) {
        return prev;
      }

      // Check entrance
      const entrance = checkEntrance(newPosition, prev.currentRoom);
      if (entrance) {
        // Play room transition sound (simulated)
        console.log('🚪 Room transition sound!');
        return {
          ...prev,
          currentRoom: entrance.targetRoom,
          player: {
            ...prev.player,
            position: entrance.targetSpawn,
            direction,
            isMoving: true
          }
        };
      }

      // Play step sound (simulated)
      console.log('👟 Step sound!');

      return {
        ...prev,
        player: {
          ...prev.player,
          position: newPosition,
          direction,
          isMoving: true
        }
      };
    });

    // Reset moving state after animation
    setTimeout(() => {
      setGameState(prev => ({
        ...prev,
        player: { ...prev.player, isMoving: false }
      }));
    }, 200);
  }, [hasCollision, checkEntrance]);

  // Interact with current position
  const interact = useCallback(() => {
    setGameState(prev => {
      const interactable = checkInteractable(prev.player.position, prev.currentRoom);
      if (interactable) {
        // Play interaction sound (simulated)
        console.log('💬 Dialog sound!');
        return {
          ...prev,
          showDialog: true,
          currentDialog: interactable
        };
      }
      return prev;
    });
  }, [checkInteractable]);

  // Close dialog
  const closeDialog = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      showDialog: false,
      currentDialog: null
    }));
  }, []);

  return {
    gameState,
    movePlayer,
    interact,
    closeDialog
  };
};
