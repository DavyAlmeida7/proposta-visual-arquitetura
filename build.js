import { execSync } from 'child_process';
import { cpSync, mkdirSync } from 'fs';

// Build do Vite
console.log('Building with Vite...');
execSync('vite build', { stdio: 'inherit' });

// Copiar dist/client para output (que a Vercel espera)
console.log('Copying to output directory...');
mkdirSync('output', { recursive: true });
cpSync('dist/client', 'output', { recursive: true });

console.log('Build completed! Output in ./output');
