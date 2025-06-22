import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

export class PixelArtProcessor {
  private assetsPath: string;

  constructor(assetsPath: string = 'public/assets/sprites') {
    this.assetsPath = assetsPath;
  }

  /**
   * Process and optimize pixel art images
   */
  async processPixelArt(inputPath: string, outputPath: string, options: {
    width?: number;
    height?: number;
    format?: 'png' | 'webp';
    quality?: number;
  } = {}) {
    const {
      width,
      height,
      format = 'png',
      quality = 100
    } = options;

    try {
      let pipeline = sharp(inputPath)
        .toFormat(format, { quality });

      if (width || height) {
        pipeline = pipeline.resize(width, height, {
          kernel: sharp.kernel.nearest,
          fit: 'contain'
        });
      }

      await pipeline.toFile(outputPath);
      console.log(`✅ Processed: ${inputPath} -> ${outputPath}`);
    } catch (error) {
      console.error(`❌ Error processing ${inputPath}:`, error);
    }
  }

  /**
   * Create sprite sheets from individual frames
   */
  async createSpriteSheet(frames: string[], outputPath: string, options: {
    columns: number;
    tileSize: number;
  }) {
    const { columns, tileSize } = options;
    const rows = Math.ceil(frames.length / columns);
    
    const spriteSheet = sharp({
      create: {
        width: columns * tileSize,
        height: rows * tileSize,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    }).png();

    const composite = [];

    for (let i = 0; i < frames.length; i++) {
      const col = i % columns;
      const row = Math.floor(i / columns);
      
      composite.push({
        input: frames[i],
        left: col * tileSize,
        top: row * tileSize
      });
    }

    await spriteSheet.composite(composite).toFile(outputPath);
    console.log(`✅ Created sprite sheet: ${outputPath}`);
  }

  /**
   * Generate placeholder pixel art if no assets provided
   */
  async generatePlaceholderSprites() {
    const publicDir = path.join(process.cwd(), 'public/assets/sprites');
    
    try {
      await fs.mkdir(publicDir, { recursive: true });
    } catch {
      // Directory might already exist
    }

    // Generate simple colored squares as placeholders
    const sprites = [
      { name: 'player', color: '#4ADE80' }, // Green
      { name: 'wall', color: '#78716C' },   // Gray
      { name: 'door', color: '#F59E0B' },   // Amber
      { name: 'project', color: '#3B82F6' }, // Blue
      { name: 'experience', color: '#8B5CF6' }, // Purple
      { name: 'contact', color: '#EF4444' }, // Red
      { name: 'easter-egg', color: '#F59E0B' } // Gold
    ];

    for (const sprite of sprites) {
      const buffer = await sharp({
        create: {
          width: 64,
          height: 64,
          channels: 4,
          background: sprite.color
        }
      })
      .png()
      .toBuffer();

      await fs.writeFile(
        path.join(publicDir, `${sprite.name}.png`),
        buffer
      );
    }

    console.log('✅ Generated placeholder sprites');
  }
}

export const pixelArtProcessor = new PixelArtProcessor();
