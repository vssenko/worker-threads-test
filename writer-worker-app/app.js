const { workerData, parentPort } = require('worker_threads');
const logger = require('./logger');

const id = workerData.id;

console.log(`Worker ${id} initializad.`);

process.on('message', value => {
  console.log(`Worker ${id} started.`);
});


function startWriting() {
  setInterval(() => {
    logger.log(`Hello from worker number ${workerData.id}\r\n`);
  }, 100);
}
