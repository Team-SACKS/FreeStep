var Tx = require('ethereumjs-tx')
const Web3 = require('web3')
const web3 = new Web3(Web3.givenProvider)

const account1 = '0x1234';
const account2 = '0x5678';

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex')

const constractAddress = '0x4CCfB3039b78d3938588157564c9AD559bAfAB94'
const contractABI = [{}]

var dapptokenContract = web3.eth.contract();

// Create the transaction object
const txObject = {
  name: web3.utils.toHex(Number('Keith')),
  id: web3.utils.toHex(800000),
  to: constractAddress,
  data:
}
// Sign the transaction
const tx = new Tx(txObject)
tx.sign(privateKey1)

// Broadcast the transaction
web3.eth.sendSignedTransaction(raw, (err, txHash) => {
  console.log('err:', err, 'txHash:', txHash)
})
