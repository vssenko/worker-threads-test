const { parentPort } = require('worker_threads');


console.log('Orchestrator initialized.')

parentPort.on('message', (value) => {
  console.log('Orchestrator started.')
  const workerPorts = value.workerPorts;
});

