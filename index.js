const [value] = process.argv.slice(2);

process.env.UV_THREADPOOL_SIZE = 4;

const selectedTest = new Map([
    ['1', require('./src/without-hashing')],
    ['2', require('./src/with-hashing')]
]);

selectedTest.get(value).test(Date.now());