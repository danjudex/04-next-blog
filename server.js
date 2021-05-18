const express = require('express');
const { join } = require('path');
const { readFile, writeFile } = require('fs/promises');

const app = express();
const port = 3001;
const runtimeDir = __dirname + '/runtime';

const readJsonFile = async (filename) =>
  readFile(join(runtimeDir, `${filename}.json`));

const saveJsonFile = async (filename, data) =>
  writeFile(join(runtimeDir, `${filename}.json`), data);

app.get('/users', async (req, res) => {
  const users = await readJsonFile('users');

  res
    .append('Content-Type', 'application/json; charset=utf-8')
    .send(users.toString());
});

app.get('/users/:userId', async (req, res) => {
  const users = await readJsonFile('users').then((r) => JSON.parse(r));

  const { userId } = req.params;

  res.json(users.find((i) => i.id === Number(userId)) || {});
});

app.post('/users', async (req, res) => {
  const users = await readJsonFile('users').then((r) => JSON.parse(r));

  const user = { name: 'new' };

  users.push(user);

  await saveJsonFile('users', JSON.stringify(users));

  res.json(user);
});

app.put('/users/:userId', async (req, res) => {
  const users = await readJsonFile('users').then((r) => JSON.parse(r));

  const user = { name: 'new' };

  users.push(user);

  await saveJsonFile('users', JSON.stringify(users));

  res.json(user);
});

// app.delete('/users/:userId', async (req, res) => {
//   const users = await readJsonFile('users').then((r) => JSON.parse(r));

//   await saveJsonFile('users', JSON.stringify(users));

//   res.json(user);
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
