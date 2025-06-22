import { useGameState } from '@/hooks/useGameState';
import { useKeyboard } from '@/hooks/useKeyboard';
import { Player } from './Player';
import { Room } from './Room';
import { DialogBox } from '../ui/DialogBox';
import { GameControls } from '../ui/GameControls';
import { RoomInfo } from '../ui/RoomInfo';
import { MiniMap } from '../ui/MiniMap';

export const GameEngine = () => {
  const { gameState, movePlayer, interact, closeDialog } = useGameState();
  
  useKeyboard({
    onMove: movePlayer,
    onInteract: interact,
    onCloseDialog: closeDialog,
    disabled: gameState.showDialog
  });

  const currentRoom = gameState.rooms[gameState.currentRoom];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      {/* Game Container */}
      <div className="relative border-4 border-white rounded-lg overflow-hidden bg-black">
        {/* Room */}
        <Room room={currentRoom} />
        
        {/* Player */}
        <Player player={gameState.player} />
      </div>

      {/* UI Elements */}
      <RoomInfo roomName={currentRoom.name} />
      <GameControls />
      <MiniMap gameState={gameState} />

      {/* Dialog */}
      {gameState.showDialog && gameState.currentDialog && (
        <DialogBox 
          dialog={gameState.currentDialog} 
          onClose={closeDialog}
        />
      )}
    </div>
  );
};
