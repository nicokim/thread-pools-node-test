const { doReadFile, doRequest, doHash } = require('./testFunctions');

const test = (start)=>{
    doRequest(start);
    doHash(start);
    doHash(start);
    doHash(start);
    doHash(start);
    doReadFile(start);
};

module.exports = {
    test,
};