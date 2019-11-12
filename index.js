'use strict'
const process = require('process')
var { generateEthMnemonic, generateQtumMnemonic } = require('./keygenerator.js')


function generateMnemoinic() {
    var chain = process.argv.slice(2)[0]
    var network = process.argv.slice(2)[1]
    if (chain === 'qtum') {
        if (!network) {
            throw new Error('Network required')
        } 
        var {mnemonic, address} = generateQtumMnemonic(network)
    } else {
        var {mnemonic, address} = generateEthMnemonic()
    }
    console.log('#### mnemonic   =    ', mnemonic)
    console.log('#### address    =    ', address)
}

generateMnemoinic()