'use client';

import { useState } from 'react';
import { GameEngine } from '@/components/game/GameEngine';
import { WelcomeScreen } from '@/components/ui/WelcomeScreen';

export default function PixelRPGPortfolio() {
  const [gameStarted, setGameStarted] = useState(false);

  if (!gameStarted) {
    return (
      <>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          
          .pixel-font {
            font-family: 'Press Start 2P', cursive;
            line-height: 1.6;
          }
        `}</style>
        
        <div className="pixel-font">
          <WelcomeScreen onStart={() => setGameStarted(true)} />
        </div>
      </>
    );
  }

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        .pixel-font {
          font-family: 'Press Start 2P', cursive;
          line-height: 1.6;
        }
        
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        
        /* Custom scrollbar for dialog */
        .dialog-content::-webkit-scrollbar {
          width: 8px;
        }
        
        .dialog-content::-webkit-scrollbar-track {
          background: #374151;
        }
        
        .dialog-content::-webkit-scrollbar-thumb {
          background: #6B7280;
          border-radius: 4px;
        }
        
        .dialog-content::-webkit-scrollbar-thumb:hover {
          background: #9CA3AF;
        }
        
        /* Pixel art styling */
        .pixelated {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
      `}</style>
      
      <div className="pixel-font">
        <GameEngine />
      </div>
    </>
  );
}
