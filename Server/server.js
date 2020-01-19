const os = require('os')
const fs = require('fs');
const path = require('path');
const dateFormat = require('dateformat');

const express = require('express');
const app = express();
const http = require('http').Server(app);

const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = lowdb(adapter);

const childProcess = require('child_process');

// logging helper
const morgan = require('morgan');

// constant variables
const serverPort = 3000;
const imageUploadDirectory = 'imgFolder';
const indexHtml = fs.readFileSync('./web/index.html');

var pythonExecutableName;
if (os.platform() === 'win32') {
    pythonExecutableName = 'python';
} else {
    pythonExecutableName = 'python3';
}

// initialize lowdb
db.defaults({
    records: []
}).write();
