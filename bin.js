#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'node:path';
import url from 'node:url';

// Directory where the module is
const binURL = import.meta.url;
const binFilePath = url.fileURLToPath(binURL);
const binDirName = path.dirname(binFilePath);

const child = spawn('node', ['./server.js'], {
  cwd: binDirName,
});

child.stdout.on('data', (data) => {
  console.log(`${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`${data}`);
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
