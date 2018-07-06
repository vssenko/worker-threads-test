function buildRandomLengthGreetingMessage(id) {
  let randomStringOfIds = '';
  for (let i = 0; i < Math.random() * 20; i++) {
    randomStringOfIds += id.toString() + '|';
  }

  return `${randomStringOfIds}_Hello from worker number ${id}\r\n`;
}

module.exports = {
  buildRandomLengthGreetingMessage
};