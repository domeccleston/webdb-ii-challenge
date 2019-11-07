const express = require('express');

const server = require('./server');

const port = process.env.port || 3000;

server.listen(port, () => {
    console.log(`\n Server listening on port ${port}\n`)
})