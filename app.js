const { Worker } = require('worker_threads');
const path = require('path');

console.log('Hello from main!');

for (var i = 0; i < 100; i++) {
  const w = new Worker(path.join(__dirname, './worker-app/app.js'), { workerData: { id: i } });
}