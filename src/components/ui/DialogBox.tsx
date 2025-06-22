import { Interactable } from '@/types/game';

interface DialogBoxProps {
  dialog: Interactable;
  onClose: () => void;
}

export const DialogBox = ({ dialog, onClose }: DialogBoxProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border-4 border-white rounded-lg max-w-md w-full p-6 relative pixel-font">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-300 text-xl font-bold"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">
          {dialog.title}
        </h2>

        {/* Content */}
        <div className="text-gray-300 mb-4 whitespace-pre-line text-sm leading-relaxed">
          {dialog.content}
        </div>

        {/* Links */}
        {dialog.links && dialog.links.length > 0 && (
          <div className="space-y-2">
            {dialog.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors duration-200"
              >
                {link.text}
              </a>
            ))}
          </div>
        )}

        {/* Instructions */}
        <div className="mt-4 pt-4 border-t border-gray-600 text-xs text-gray-500">
          Press ESC or click × to close
        </div>
      </div>
    </div>
  );
};
