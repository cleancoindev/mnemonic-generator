
const ethers = require('ethers')

var wallet =  ethers.Wallet.createRandom()
console.log('address', wallet.signingKey.address)
console.log('mnemonic', wallet.signingKey.mnemonic)
