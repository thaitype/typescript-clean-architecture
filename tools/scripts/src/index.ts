// export * from './lib/shared';
import { execa } from 'execa';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

// const command = 'eslint src --max-warnings 0';
let commands: string[] = [];

const filename = fileURLToPath(import.meta.url); // Like __filename in CommonJS
const dirname = path.dirname(fileURLToPath(import.meta.url)); // Like __dirname in CommonJS

const rootFile = path.resolve(dirname, '..');
const nodeModules = path.resolve(rootFile, 'node_modules');
const binDir = path.resolve(nodeModules, '.bin');

console.log(`Working on rootFile: ${rootFile} = ${binDir}`);

const commandMap: Record<string, string> = {
  "lint:check": "eslint src",
  "lint:fix": "eslint src --fix",
};

const arg = process.argv[2];
if (arg) {
  if (commandMap[arg]) {
    commands = (commandMap[arg].split(' '));
  } else {
    console.log(`Command ${arg} not found`);
    process.exit(1);
  }
} else {
  console.log(`Please provide a command`);
  process.exit(1);
}

(async () => {
  const subprocess = execa({ env: { FORCE_COLOR: 'true' }, stdout: 'pipe', preferLocal: true, localDir: binDir })`${[...commands]}`;
  subprocess.stdout.pipe(process.stdout);
  subprocess.stderr.pipe(process.stderr);
  await subprocess.catch((error) => {
    console.error(error);
    process.exit(1);
  });
})();