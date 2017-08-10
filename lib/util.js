const clc = require('cli-color')

function connectionInfo(serverInfo = { ip: "0.0.0.0", port: "10000"}) {
    console.log(clc.green.underline("ip:"), serverInfo.ip)
    console.log(clc.green.underline("port:"), serverInfo.port)
}

module.exports = {
    connectionInfo
}