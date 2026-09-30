const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'dist', 'dataspire', 'browser', 'index.html');
const dest = path.join(__dirname, '..', 'dist', 'dataspire', 'browser', '404.html');

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log('✓ Successfully created 404.html for SPA routing fallback');
} else {
  console.warn('⚠️ Warning: dist/dataspire/browser/index.html not found to create 404.html');
}
