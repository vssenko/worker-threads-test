const { workerData, parentPort } = require('worker_threads');
const logger = require('./logger');
const messageBuilder = require('./message-builder');

const id = workerData.id;

console.log(`Worker ${id} initializad.`);

for (let i = 0; i < 1000; i++) {
  sendMessage();
}

process.exit();

function sendMessage() {
  logger.log(messageBuilder.buildRandomLengthGreetingMessage(id));
}