const { doReadFile, doRequest } = require('./testFunctions');

const test = (start) => {
    doReadFile(start);
    doRequest(start);
};

module.exports = {
    test
};