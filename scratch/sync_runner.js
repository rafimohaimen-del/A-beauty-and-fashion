const fs = require('fs');
const path = require('path');

const brainScratch = 'C:\\Users\\Rafi-pc\\.gemini\\antigravity\\brain\\8de3a8d9-c098-4196-8b2e-3d8ad5ff5106\\scratch';
const localVerify = 'scratch/verify_mobile_index_bn.js';

if (fs.existsSync(localVerify)) {
  fs.copyFileSync(localVerify, path.join(brainScratch, 'verify_mobile_index_bn.js'));
  console.log('Copied verify_mobile_index_bn.js to brain scratch!');
}

const runnerPath = path.join(brainScratch, 'run_all_regressions.js');
let runner = fs.readFileSync(runnerPath, 'utf8');

if (!runner.includes('verify_mobile_index_bn.js')) {
  runner = runner.replace("'verify_mobile_404.js',", "'verify_mobile_index_bn.js',\n  'verify_index_bn.js',\n  'verify_mobile_404.js',");
  runner = runner.replace(/\r?\n/g, '\r\n');
  fs.writeFileSync(runnerPath, runner, 'utf8');
  console.log('Updated run_all_regressions.js with verify_mobile_index_bn.js and verify_index_bn.js!');
}
