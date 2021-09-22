# ERC20 token - Yearn coin (YRN)

ERC20 token built with hardhat/openzeppelin

## For future self

Start new hardhat project

`yarn add --dev hardhat`

`npx hardhat` => create new with empty config

Get other dev deps for testing

```
yarn add --dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```

Get quickstart on OpenZepplin template using the wizard

https://docs.openzeppelin.com/contracts/4.x/wizard

Paste contract into project @ `contracts/TOKEN_NAME.sol`

add OpenZepplin contracts to project

`yarn add @openzeppelin/contracts`

compile

`npx hardhat compile`

Secrets: need Alchemy key, etherscan API key, and MetaMask private key

Add alchemy key and metamask prviate key to hardhat config

write deploy script

run deploy script

`npx hardhat run scripts/deploy.js --network ropsten`

To verify, add etherscan plugin for hardhat

`yarn add --dev @nomiclabs/hardhat-etherscan`

verify to get contract source code to show up on etherscan

`npx hardhat verify --network ropsten <contract address>`
