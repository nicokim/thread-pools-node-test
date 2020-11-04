const https = require('https');
const fs = require('fs');
const crypto = require('crypto');

const doRequest = (start)=> {
    https.request('https://google.com',(res)=>{
        res.on('data', ()=>{});
        res.on('end', ()=>{
            console.log('req: ', Date.now()-start);
        });
    }).end();
};

const doReadFile = (start) => {
    fs.readFile('../index.js','utf-8', ()=>{
        console.log('fs: ', Date.now()-start);
    });
};

const doHash = (start) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=> {
        console.log('hash ', Date.now()-start);
    });
};

module.exports ={
    doRequest,
    doReadFile,
    doHash,
}