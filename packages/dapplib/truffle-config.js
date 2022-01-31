require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture strategy dash misery history hockey arctic metal gentle'; 
let testAccounts = [
"0xdd1a17d91ebdc02f368202c6d54bac8cb6e355d8a14a421f881048a921e5aea6",
"0x6d57499bc73ac1caa75521b9c3cb3c0caa429f9a5b50ff85e840f8514fb8202f",
"0x98c4bfe05b0ba0177bb6936c4ea648ef5a2cf33365ce76f3c9fd912fce750288",
"0xa8536c119eb61ad23cdbe21c1d717675fef8a4b413cae3adc7f8f0096fa63178",
"0xb312612be285321bfb38b319925d82978a9530d2578b7cbcbfff3822d57bb5ee",
"0x3d09360369203f4c4d32d336010e7c23e6822a51b86444d25c5c36d76a9828a4",
"0x5c54213a840f38edba11c8d4dbc071cbb4a8f1f2f5bd918489712f4cd7b62739",
"0x877043c9329404e29c5ac5645bb134d5b6c66f992859eed8fe233ec777e84cb1",
"0xb549459be67f7e0298c703ac5b77c007b283ce87eeca8ba4b1cfbc496e2120e0",
"0x9fc5c2f9c37485c4a585c719353f19717a818c99696ce90b478c7cf768441d98"
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

