const clc = require('cli-color')
const net = require('net')
const util = require('./util')

// server.run( p1 - object, p2 - function )
function run(serverInfo, readyMessage) {
    let socketServer = net.createServer(function (socket) {
        socket.on('data', function (data) {
            console.log(clc.green.underline('RECEIVED:'), data.toString('ascii'))
            socket.write(data)
            console.log(clc.green.underline('REPLY:'), data.toString('ascii'))
        })
    })

    socketServer.listen(serverInfo.port, function () {
        console.log('i\'m a server!!!')
    })

    readyMessage && readyMessage()
}

!module.parent && run({ port: 10000 })

module.exports = {
    run
}