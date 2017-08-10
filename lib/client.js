const clc = require('cli-color')
const net = require('net')
const util = require('./util')

function getMessage() {
    let message = 'hello'

    return message
}

function run(serverInfo) {
    util.connectionInfo(serverInfo)

    let socket = net.createConnection(serverInfo.port, serverInfo.ip, function () {
        console.log(clc.red.underline('CONNECTED:'))

        let message = getMessage()

        socket.write(message)
        console.log(clc.red.underline('SENT:'), message)
    })

    socket.on('data', function (data) {
        console.log(clc.red.underline('RECEIVED:'), data.toString())
    })
}

!module.parent && run({ port: 10000 })

module.exports = {
    run
}