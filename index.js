const config = require('./config')

const util = require('./lib/util')
const server = require('./lib/server')
const client = require('./lib/client')

// server.run( p1 - object, p2 - function )
server.run(config.serverInfo, function () {
    console.log('start server')
})

client.run(config.serverInfo)