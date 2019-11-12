'use strict'
const ethers = require('ethers')
const qwallet = require('qtumjs-wallet')
const bip39 = require('bip39')

function generateEthMnemonic () {
  var wallet = ethers.Wallet.createRandom()
  return {
    mnemonic: wallet.signingKey.mnemonic,
    address: wallet.address
  }
}

function generateQtumMnemonic (network) {
  var network = qwallet.networks[network]
  var mnemonic = bip39.generateMnemonic()
  var { address } = network.fromMnemonic(mnemonic)
  return {
    mnemonic,
    address
  }
}

module.exports = { generateEthMnemonic, generateQtumMnemonic }
