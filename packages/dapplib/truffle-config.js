require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space stomach regret pave punch hundred light army gas'; 
let testAccounts = [
"0x9eb8ce2124e3c86a1e1789ba3372791bd047c7ba7e945ecc53bb6d263f98fe09",
"0x645138b3487d2b52ef9d520efe9f70eaf46bd8813af3174d8a421b57e5dac01e",
"0x06a294a417b2995a99b8815059387b063221ccaa2a0fff16560eb60112704b7a",
"0x4e15a2a682c379063273363107bb8543ade56313cee708b45960bd71e53014df",
"0xc5b6380a25d703b90b5ca7ff8677148099638c45f5e0c37d60da201cff5ac22e",
"0x2bd6d8004047377e34b48eebf1db89a6c4d909b384d4fdb972e1d6d8f545ed2c",
"0xc3c000f3ef647fba0b78b0d8ff8aba978ce7d5d5a763397d4a755c9c1a1072ea",
"0xfba9b900f49aa786ab62aaa4c8674034569a107dba0fb98723d0fddeb49213e6",
"0xeaca7d5c3cbf904e5555e1f1d549cdc29e0c143607f1a0ef84f56c5b5b0653b0",
"0xd873c60140dd6a9f8ede7ebebbaea32fc36a8715594038cda0a156704f9a5d8c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

