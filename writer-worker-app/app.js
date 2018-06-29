const { workerData, parentPort } = require('worker_threads');
const logger = require('./logger');

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
  logger.log(`Hello from worker number ${workerData.id}\r\n`);
}

function sendResult(port) {
  port.postMessage({ id, status: 'completed' });
}