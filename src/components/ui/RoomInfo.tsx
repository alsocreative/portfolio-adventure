interface RoomInfoProps {
  roomName: string;
}

export const RoomInfo = ({ roomName }: RoomInfoProps) => {
  return (
    <div className="fixed top-4 left-4 bg-black bg-opacity-80 text-white px-4 py-2 rounded-lg pixel-font">
      <div className="text-sm font-bold">📍 {roomName}</div>
    </div>
  );
};
