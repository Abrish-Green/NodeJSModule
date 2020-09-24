const os = require('os')

const USER = Array()

USER.push(`Return the Core ${os.cpus()[0].model}`)

USER.push(`Returns the string path of the current user's home directory. ${os.homedir()}`)

USER.push(`Returns the hostname of the operating system as a string. ${os.hostname()}`)

USER.push(`Return IP Address ${os.networkInterfaces().Ethernet[1].address}`)

USER.push(`Returns a string identifying the operating system platform. ${os.platform()}`)

USER.push(`Return Relase Name ${os.release()}`)

USER.push(`Return Syste_Type ${os.type()}`)


const getSystem = () => {
    console.log('+-------------------------------------------------------+')
    USER.forEach(function(item) {
        console.log(`|-${item}|`)
    })
    console.log('+-------------------------------------------------------+')
}
module.exports.get = getSystem;