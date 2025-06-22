export const GameControls = () => {
  return (
    <div className="fixed bottom-4 left-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs pixel-font">
      <div className="mb-2 font-bold">🎮 CONTROLS</div>
      <div className="space-y-1 text-gray-300">
        <div>🏃 Move: Arrow Keys / WASD</div>
        <div>💬 Interact: SPACE / ENTER</div>
        <div>❌ Close: ESC</div>
      </div>
    </div>
  );
};
