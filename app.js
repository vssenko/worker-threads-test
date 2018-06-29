const { Worker, MessageChannel } = require('worker_threads');
const path = require('path');

console.log('Main app initialized and started.');

const workersMeta = [];

for (var i = 0; i < 10; i++) {
  const channel = new MessageChannel();
  const worker = new Worker(path.join(__dirname, './writer-worker-app/app.js'), { workerData: { id: i } });
  workersMeta.push({ id: i, worker, channel })
}

workersMeta.forEach(({ worker, channel }) => {
  worker.postMessage({ orchestratorPort: channel.port1 }, [channel.port1]);
})

const orchestrator = new Worker(path.join(__dirname, './orchestrator-worker-app/app.js'));
const orchestratorData = workersMeta.map((meta) => ({ id: meta.id, workerPort: meta.channel.port2 }));
orchestrator.postMessage({ workerPorts: orchestratorData }, orchestratorData.map(w => w.workerPort));
