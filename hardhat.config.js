require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/dslVM0L-zLC9vjYxUpQmgPrY3iebXB7-',
          accounts: ['a930951c6ddd49bebb08ced13c14b38bba90d3740920d45a30bd819ffea9b530']
    }
  }
}