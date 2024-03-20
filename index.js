const w3nectar_integrator = require('w3nectar-integrator');
const w3nectar_gatherer = require('w3nectar-gatherer');
const body_parser = require('body-parser');
const react_redux = require('react-redux');
const passport = require('passport');
const pg = require('pg');
const ejs = require('ejs');
const firebase = require('firebase');

const dns = require('dns');
dns.lookup('example.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});

const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('customEvent', (message) => {
  console.log(`Received: ${message}`);
});
emitter.emit('customEvent', 'Hello World with Event Emitter');

// Get the number of transactions for an address by block number
web3.eth.getTransactionCount('0xaddress', blockNumber).then(count => {
  console.log('Transaction count by block number:', count);
}).catch(err => {
  console.error('Error getting transaction count by block number:', err);
});

// Interact with a deployed smart contract
const contractInstance = new web3.eth.Contract(contractJson.abi, '0xcontractAddress');
contractInstance.methods.someMethod().call().then(result => {
  console.log('Method result:', result);
}).catch(err => {
  console.error('Error calling method:', err);
});