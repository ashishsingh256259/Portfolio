const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const html = fs.readFileSync('index.html','utf8');
test('inline scripts compile', () => { const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]; assert.ok(scripts.length); for (const m of scripts) new vm.Script(m[1]); });
test('navigation section anchors resolve', () => {const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1])); for (const m of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(m[1]),m[1]);});
test('award and merged FORGE evidence present', () => {assert.match(html,/Diversity Champion Award/); assert.match(html,/₹25,000 team prize/); assert.match(html,/github\.com\/ashishsingh256259\/Mentor\/pull\/1/);});
test('project data and featured ordering', () => {const code=html.match(/const featuredProjects = \[[\s\S]*?const githubData =/)[0].replace(/const githubData =$/,'');const data=vm.runInNewContext(code+'\n;({ featuredProjects, additionalProjects })');assert.equal(data.featuredProjects.length,5);assert.equal(data.additionalProjects.length,3);assert.equal(data.featuredProjects.find(p=>p.number==='01').name,'UrbanPulse Guardian AI');for(const p of [...data.featuredProjects,...data.additionalProjects]){assert.ok(p.github.startsWith('https://github.com/'));assert.ok(p.live.startsWith('https://'));}});
