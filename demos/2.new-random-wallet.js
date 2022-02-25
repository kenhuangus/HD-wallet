let ethers = require('ethers');

let wallet = ethers.Wallet.createRandom();
   let wordlist = wallet.mnemonic;
    console.log("the mnemonic is  \n"+ wordlist);
console.log('Address: ' + wallet.address);
