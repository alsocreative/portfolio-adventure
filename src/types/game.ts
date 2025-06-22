export interface Position {
  x: number;
  y: number;
}

export interface Player {
  position: Position;
  direction: 'up' | 'down' | 'left' | 'right';
  isMoving: boolean;
  sprite: string;
}

export interface Room {
  id: string;
  name: string;
  background: string;
  walls: Position[];
  entrances: RoomEntrance[];
  interactables: Interactable[];
  spawnPoint: Position;
}

export interface RoomEntrance {
  position: Position;
  targetRoom: string;
  targetSpawn: Position;
}

export interface Interactable {
  position: Position;
  type: 'project' | 'experience' | 'contact' | 'easter-egg' | 'skill' | 'achievement' | 'secret' | 'info' | 'welcome';
  title: string;
  content: string;
  image?: string;
  links?: { text: string; url: string }[];
}

export interface GameState {
  currentRoom: string;
  player: Player;
  showDialog: boolean;
  currentDialog: Interactable | null;
  rooms: Record<string, Room>;
}

export type Direction = 'up' | 'down' | 'left' | 'right';
export type KeyMap = Record<string, Direction>;
