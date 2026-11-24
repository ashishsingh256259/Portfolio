const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const data = import('../src/data.mjs');
test('eight unique projects and UrbanPulse first', async()=>{const {featuredProjects,additionalProjects}=await data;const all=[...featuredProjects,...additionalProjects];assert.equal(all.length,8);assert.equal(new Set(all.map(p=>p.name)).size,8);assert.equal(featuredProjects.find(p=>p.number==='01').name,'UrbanPulse Guardian AI');});
test('valid project links and evidence', async()=>{const {featuredProjects,additionalProjects}=await data;for(const p of [...featuredProjects,...additionalProjects]){assert.equal(new URL(p.github).hostname,'github.com');assert.equal(new URL(p.live).protocol,'https:');assert.ok(p.features.length&&p.stack.length);}assert.match(featuredProjects.find(p=>p.name==='FORGE').evidence,/Mentor\/pull\/1$/);});
test('award and React entry preserved',async()=>{const {achievements}=await data;assert.ok(achievements.some(a=>a.name.includes('Diversity Champion Award')&&a.org.includes('₹25,000')));assert.match(fs.readFileSync('index.html','utf8'),/src="\/src\/main.jsx"/);assert.ok(fs.existsSync('Ashish_Singh_Resume.pdf'));});
