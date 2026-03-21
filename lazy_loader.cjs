const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(filePath));
        } else if (filePath.endsWith('.jsx')) {
            results.push(filePath);
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'resources', 'js'));
const skipFiles = ['Hero.jsx', 'Navbar.jsx', 'Preloader.jsx'];

files.forEach(file => {
    if (skipFiles.some(skip => file.endsWith(skip))) return;
    
    let content = fs.readFileSync(file, 'utf-8');
    // Inject loading="lazy" if it doesn't already exist on the img tag
    const newContent = content.replace(/<img(?![^>]*loading="lazy")/g, '<img loading="lazy"');
    
    if (content !== newContent) {
        fs.writeFileSync(file, newContent);
        console.log(`Optimization: Added lazy loading to ${path.basename(file)}`);
    }
});
