let ethers = require('ethers');

let privateKey =
  '0x93180051872467db2071fd841caeecac75650c8c7af063630f9568a44d29720f';

let wallet = new ethers.Wallet(privateKey);

console.log('Address: ' + wallet.address);
// Address: 0x1C68340bb2810BF5B0BEd3EDE256335cb51C53C7
