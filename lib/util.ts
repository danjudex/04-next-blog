import { normalize, join } from 'path';
import { readFile, writeFile } from 'fs/promises';

export const runtimeDir = normalize(__dirname + '/../runtime');

console.log({ runtimeDir });
console.log({ __dirname });

export const readJsonFile = async (filename: string) =>
  readFile(join(runtimeDir, `${filename}.json`));

export const saveJsonFile = async (filename: string, data: string) =>
  writeFile(join(runtimeDir, `${filename}.json`), data);
