
const fs = require('fs');
const path = require('path');

const filePath = 'src/data/muscles.js';
const fileContent = fs.readFileSync(filePath, 'utf8');

// Replace imports
const contentWithoutImports = fileContent.replace(/import .* from .*/g, '');

// Mock images
const imageVars = [...fileContent.matchAll(/imageUrl: (\w+)/g)].map(m => m[1]);
const uniqueImageVars = [...new Set(imageVars)];

let scopeCode = '';
uniqueImageVars.forEach(v => {
    scopeCode += `const ${v} = "mock_img";\n`;
});

// Mock exports
const mockExports = {};
// We need to make sure 'muscles' is assigned to mockExports.muscles
// The file has 'export const muscles = ...'
// We replace 'export const muscles' with 'mockExports.muscles'
const evalCode = contentWithoutImports.replace('export const muscles', 'mockExports.muscles');

const fullCode = scopeCode + evalCode;

try {
    eval(fullCode);
    const muscles = mockExports.muscles;

    if (!muscles) {
        console.error("Could not find muscles array!");
        process.exit(1);
    }

    const piriformis = muscles.filter(m => m.id === 'piriformis' || m.name === 'Piriformis');
    console.log(`Total muscles: ${muscles.length}`);
    console.log(`Piriformis count: ${piriformis.length}`);

    if (piriformis.length > 1) {
        console.log("DUPLICATES FOUND!");
    } else {
        console.log("No duplicates found in data.");
    }

    // Check for ANY duplicate IDs
    const ids = muscles.map(m => m.id);
    const uniqueIds = new Set(ids);
    if (ids.length !== uniqueIds.size) {
        console.log(`Duplicate IDs found! Total: ${ids.length}, Unique: ${uniqueIds.size}`);
        const counts = {};
        ids.forEach(id => counts[id] = (counts[id] || 0) + 1);
        Object.entries(counts).filter(([id, count]) => count > 1).forEach(([id, count]) => {
            console.log(`Duplicate ID: ${id} (${count} times)`);
        });
    }

} catch (e) {
    console.error("Error executing code:", e);
    console.error(e.stack);
}
