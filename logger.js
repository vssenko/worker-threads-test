const fs = require('fs');

function log(message) {
  return fs.appendFileSync('./my-file.txt', message);
}

module.exports = {
  log
};