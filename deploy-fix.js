// deploy-fix.js - Jalankan ini SEBELUM deploy
const fs = require('fs');
const path = require('path');

// 1. Fix semua file HTML di htmlPage/
const htmlPageDir = './htmlPage';
const files = fs.readdirSync(htmlPageDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(htmlPageDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Ganti semua relative path untuk auth dan AdminPage
  content = content.replace(/href="\.\.\/auth\//g, 'href="/auth/');
  content = content.replace(/href="\.\.\/AdminPage\//g, 'href="/AdminPage/');
  content = content.replace(/src="\.\.\/auth\//g, 'src="/auth/');
  content = content.replace(/src="\.\.\/AdminPage\//g, 'src="/AdminPage/');
  
  fs.writeFileSync(filePath, content);
  console.log(`✓ Fixed: ${file}`);
});

// 2. Fix auth/login.html
const authLoginPath = './auth/login.html';
if (fs.existsSync(authLoginPath)) {
  let content = fs.readFileSync(authLoginPath, 'utf8');
  content = content.replace(/href="\.\.\/AdminPage\//g, 'href="/AdminPage/');
  content = content.replace(/href="\.\.\/htmlPage\//g, 'href="/htmlPage/');
  fs.writeFileSync(authLoginPath, content);
  console.log('✓ Fixed: auth/login.html');
}

console.log('\n✅ SEMUA FILE SUDAH DIFIX!');
console.log('Sekarang deploy ke Vercel...');