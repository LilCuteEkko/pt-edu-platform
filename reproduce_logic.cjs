
const fs = require('fs');

// READ MUSCLES DATA
const filePath = 'src/data/muscles.js';
const fileContent = fs.readFileSync(filePath, 'utf8');
const contentWithoutImports = fileContent.replace(/import .* from .*/g, '');
const imageVars = [...fileContent.matchAll(/imageUrl: (\w+)/g)].map(m => m[1]);
const uniqueImageVars = [...new Set(imageVars)];
let scopeCode = '';
uniqueImageVars.forEach(v => {
    scopeCode += `const ${v} = "mock_img";\n`;
});
const mockExports = {};
const evalCode = contentWithoutImports.replace('export const muscles', 'mockExports.muscles');
console.log('Evaling data...');
eval(scopeCode + evalCode);
const musclesData = mockExports.muscles;
console.log(`Loaded ${musclesData.length} muscles.`);

// SIMULATE ANATOMYSECTION LOGIC
const activeTab = 'muscles';
const searchTerm = 'Piriformis'; // Search for it specifically
const selectedCategory = 'All';

// Determine currentData
let currentData;
if (activeTab === 'muscles') currentData = musclesData;
else currentData = [];

// Category Key
const categoryKey = activeTab === 'organs' ? 'system' : 'category';

// Filter
const filteredItems = currentData.filter(item => {
    const matchName = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const itemCategory = item[categoryKey] || 'General';
    const matchCategory = selectedCategory === 'All' || itemCategory === selectedCategory;
    return matchName && matchCategory;
});

console.log(`Filtered Items Length: ${filteredItems.length}`);
filteredItems.forEach((item, index) => {
    console.log(`${index}: ${item.name} (ID: ${item.id})`);
});
