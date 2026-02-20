import fs from 'fs';
import path from 'path';

const REPLACEMENTS = [
    // Typography base adjustments
    { regex: /text-slate-800/g, replacement: 'text-navy-dark' },
    { regex: /text-slate-700/g, replacement: 'text-navy-dark/90' },
    { regex: /text-slate-600/g, replacement: 'text-navy-dark/80' },
    { regex: /text-slate-500/g, replacement: 'text-navy-dark/70' },

    // Background replacements
    { regex: /bg-slate-50/g, replacement: 'bg-pearlWhite' },
    { regex: /bg-navy-50/g, replacement: 'bg-pearlWhite' },

    // Navy replacements
    { regex: /navy-950/g, replacement: 'navy-dark' },
    { regex: /navy-900/g, replacement: 'navy-dark' },
    { regex: /navy-800/g, replacement: 'navy' },
    { regex: /navy-700/g, replacement: 'navy' },
    { regex: /navy-600/g, replacement: 'navy-light' },
    { regex: /navy-500/g, replacement: 'navy-light' },
    { regex: /navy-400/g, replacement: 'navy-light' },
    { regex: /navy-300/g, replacement: 'navy-light/70' },
    { regex: /navy-200/g, replacement: 'navy-light/50' },
    { regex: /navy-100/g, replacement: 'navy-light/20' },

    // Gold replacements
    { regex: /gold-600/g, replacement: 'gold-soft' },
    { regex: /gold-500/g, replacement: 'gold' },
    { regex: /gold-400/g, replacement: 'gold-light' },
    { regex: /gold-300/g, replacement: 'gold-light/90' },
    { regex: /gold-200/g, replacement: 'gold-light/50' },
    { regex: /gold-100/g, replacement: 'gold-light/20' },
    { regex: /gold-50/g, replacement: 'gold-light/10' },
];

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.resolve(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(fullPath));
        } else {
            if (['.tsx', '.ts', '.css'].includes(path.extname(fullPath))) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const files = walkDir('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    REPLACEMENTS.forEach(({ regex, replacement }) => {
        content = content.replace(regex, replacement);
    });

    if (content !== originalContent) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
});
