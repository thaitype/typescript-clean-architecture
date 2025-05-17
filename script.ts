import tinyGlob from 'tiny-glob';
import { readFile } from 'fs/promises';
import path from 'path';

async function listFilesWithContent() {
  const files = await tinyGlob('**', {
    filesOnly: true,
    cwd: 'thaitype-t3'
  });

  const results = await Promise.all(
    files.map(async (file) => ({
      path: file,
      content: await readFile(path.join('thaitype-t3', file), 'utf-8'),
    }))
  );

  return results;
}

// ตัวอย่างการใช้งาน
listFilesWithContent().then(files => {
  // files = [{ path: 'src/index.ts', content: '...' }, ...]
  files.forEach(f => {
    console.log('---\n// Path: ', f.path, '---');
    console.log(f.content);
  });
});
