const { parentPort } = require('worker_threads');

console.log('Orchestrator initialized.')

let workerPorts;

parentPort.on('message', (value) => {
  workerPorts = value.workerPorts;
  workerPorts.forEach(wp => wp.port.on('message', handleResponse));
  console.log('Orchestrator started.');
  sendCommand(workerPorts[0]);
});

function handleResponse(status) {
  const responseWorkerId = status.id;
  let nextWorker = workerPorts.find(wp => wp.id == responseWorkerId + 1);
  if (!nextWorker) {
    nextWorker = workerPorts[0];
  }
  sendCommand(nextWorker);
}

function sendCommand(worker) {
  worker.port.postMessage({ command: 'write' });
}

