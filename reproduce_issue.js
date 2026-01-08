
// Mock image imports to avoid errors
const mockImg = 'mock-image-path';
const require = () => mockImg;

// Since muscles.js uses ES modules properties like import/export, 
// and we are running in node, we might need to adjust or read/eval the file content.
// A simpler way: Read the file, replace imports with mocks, and eval it.

const fs = require('fs');
const path = require('path');

const filePath = 'src/data/muscles.js';
const fileContent = fs.readFileSync(filePath, 'utf8');

// Replace imports
const contentWithoutImports = fileContent.replace(/import .* from .*/g, '');

// Extract the muscles array
// We can use a regex or just eval the whole thing if we mock exports
const mockExports = {};
const evalCode = contentWithoutImports.replace('export const muscles', ('mockExports.muscles'));

// We need to handle the image variables that are used in the array
// In the file they are imported as variables e.g. pectoralisMajorImg.
// We should define them in the scope.
// Let's find all variable names used in 'imageUrl: variableName'
const imageVars = [...fileContent.matchAll(/imageUrl: (\w+)/g)].map(m => m[1]);
const uniqueImageVars = [...new Set(imageVars)];

let scopeCode = '';
uniqueImageVars.forEach(v => {
    scopeCode += `const ${v} = "mock_img";\n`;
});

const fullCode = scopeCode + evalCode;

try {
    eval(fullCode);
    const piriformis = mockExports.muscles.filter(m => m.id === 'piriformis' || m.name === 'Piriformis');
    console.log(`Total muscles: ${mockExports.muscles.length}`);
    console.log(`Piriformis count: ${piriformis.length}`);
    if (piriformis.length > 1) {
        console.log("DUPLICATES FOUND!");
    } else {
        console.log("No duplicates found in data.");
    }

    // Check for other potential duplicates
    const ids = mockExports.muscles.map(m => m.id);
    const uniqueIds = new Set(ids);
    if (ids.length !== uniqueIds.size) {
        console.log(`Duplicate IDs found! Total: ${ids.length}, Unique: ${uniqueIds.size}`);
        // Find them
        const counts = {};
        ids.forEach(id => counts[id] = (counts[id] || 0) + 1);
        Object.entries(counts).filter(([id, count]) => count > 1).forEach(([id, count]) => {
            console.log(`Duplicate ID: ${id} (${count} times)`);
        });
    }

} catch (e) {
    console.error("Error executing code:", e);
}
