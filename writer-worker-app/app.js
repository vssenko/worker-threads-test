const { workerData, parentPort } = require('worker_threads');
const logger = require('./logger');
const messageBuilder = require('./message-builder');

const id = workerData.id;

console.log(`Worker ${id} initializad.`);

parentPort.on('message', value => {
  const orchestratorPort = value.orchestratorPort;
  orchestratorPort.on('message', data => {
    if (data.command == 'write') {
      console.log(`Worker ${id} received write command`);
      sendMessage();
      sendResult(orchestratorPort);
    }
  });
  console.log(`Worker ${id} started.`);
});


function sendMessage() {
  logger.log(messageBuilder.buildRandomLengthGreetingMessage(id));
}

function sendResult(port) {
  port.postMessage({ id, status: 'completed' });
}