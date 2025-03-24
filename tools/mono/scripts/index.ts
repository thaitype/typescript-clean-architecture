import { execa } from 'execa';

let commands: string[] = [];

const commandMap: Record<string, string> = {
  "lint:check": "eslint src",
  "lint:fix": "eslint src --fix",
  "test": "vitest run",
  "test:watch": "vitest watch",
  "format:check": "prettier -c src",
  "format:fix": "prettier --write src",
  "build": "esbuild ./src/index.ts --bundle --minify --platform=node --outfile=dist/index.js",
  "dev": "tsx watch ./src/index.ts",
  "start": "tsx ./src/index.ts",
  "check-types": "tsc --noEmit",
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
  const subprocess = execa({ env: { FORCE_COLOR: 'true' }, stdout: 'pipe' })`${[...commands]}`;
  subprocess.stdout.pipe(process.stdout);
  subprocess.stderr.pipe(process.stderr);
  await subprocess.catch((error) => {
    console.error(error);
    process.exit(1);
  });
})();