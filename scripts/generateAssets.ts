import { pixelArtProcessor } from '@/utils/pixelArtProcessor';

async function generateAssets() {
  console.log('🎨 Generating placeholder pixel art sprites...');
  
  try {
    await pixelArtProcessor.generatePlaceholderSprites();
    console.log('✅ All sprites generated successfully!');
    console.log('📁 Sprites are located in: public/assets/sprites/');
    console.log('');
    console.log('🎮 You can now:');
    console.log('1. Replace placeholder sprites with your own pixel art');
    console.log('2. Update Room.tsx to use useEmoji={false} for custom sprites');
    console.log('3. Customize colors and designs in pixelArtProcessor.ts');
  } catch (error) {
    console.error('❌ Error generating sprites:', error);
  }
}

// Run if called directly
if (require.main === module) {
  generateAssets();
}

export { generateAssets };
