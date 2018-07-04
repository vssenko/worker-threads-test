const { workerData, parentPort } = require('worker_threads');
const logger = require('./logger');

const id = workerData.id;

console.log(`Worker ${id} initializad.`);

while (true) {
  sendMessage();
}

function sendMessage() {
  logger.log(`Hello from worker number ${workerData.id}\r\n`);
}