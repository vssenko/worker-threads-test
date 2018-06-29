const { workerData } = require('worker_threads');

const logger = require('../logger');


setInterval(() => {
  logger.log(`Hello from worker number ${workerData.id}\r\n`);
}, 100);