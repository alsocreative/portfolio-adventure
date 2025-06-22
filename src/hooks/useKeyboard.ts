import { useEffect, useCallback } from 'react';
import { Direction, KeyMap } from '@/types/game';

const keyMap: KeyMap = {
  'ArrowUp': 'up',
  'KeyW': 'up',
  'ArrowDown': 'down', 
  'KeyS': 'down',
  'ArrowLeft': 'left',
  'KeyA': 'left',
  'ArrowRight': 'right',
  'KeyD': 'right'
};

interface UseKeyboardProps {
  onMove: (direction: Direction) => void;
  onInteract: () => void;
  onCloseDialog: () => void;
  disabled?: boolean;
}

export const useKeyboard = ({ onMove, onInteract, onCloseDialog, disabled }: UseKeyboardProps) => {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (disabled) return;
    
    // Prevent default browser behavior for game keys
    if (keyMap[event.code] || event.code === 'Space' || event.code === 'Enter' || event.code === 'Escape') {
      event.preventDefault();
    }

    if (keyMap[event.code]) {
      onMove(keyMap[event.code]);
    } else if (event.code === 'Space' || event.code === 'Enter') {
      onInteract();
    } else if (event.code === 'Escape') {
      onCloseDialog();
    }
  }, [onMove, onInteract, onCloseDialog, disabled]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
};
