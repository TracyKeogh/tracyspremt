// Simple script to help capture the promotional image
// You can use this with puppeteer or similar tools

const fs = require('fs');
const path = require('path');

console.log('📸 Promotional Image Generator');
console.log('===============================');
console.log('');
console.log('Your promotional image HTML has been created at: promo-image.html');
console.log('');
console.log('To capture as an image, you have several options:');
console.log('');
console.log('1. 🌐 Open in browser and screenshot:');
console.log('   - Open promo-image.html in your browser');
console.log('   - Use browser dev tools to set viewport to 1200x630');
console.log('   - Take a screenshot');
console.log('');
console.log('2. 🤖 Use online tools:');
console.log('   - Upload to htmlcsstoimage.com');
console.log('   - Use screenshot.rocks');
console.log('   - Try urltoimage.com');
console.log('');
console.log('3. 📱 Use browser extensions:');
console.log('   - Full Page Screen Capture');
console.log('   - Awesome Screenshot');
console.log('');
console.log('The image is designed at 1200x630px (perfect for social media)');
console.log('');

// Check if logo file exists
const logoPath = path.join(__dirname, 'public', 'SpremtLabs.png');
if (fs.existsSync(logoPath)) {
    console.log('✅ Spremt Labs logo found and will be included');
} else {
    console.log('⚠️  Logo not found at /public/SpremtLabs.png');
    console.log('   Make sure your logo file is in the public directory');
}