const fs = require('fs');
const xml = fs.readFileSync('d:/aradhy/web site/new/sanmati doc/about_journal_extracted/word/document.xml', 'utf8');
const text = xml.replace(/<w:p[^>]*>/g, '\n\n').replace(/<[^>]+>/g, '');
fs.writeFileSync('d:/aradhy/web site/new/sanmati doc/about_journal.txt', text.trim());
console.log("Extraction complete.");
