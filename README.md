# ICO Smart Contract
An initial coin offering (ICO) is an unregulated way for a new cryptocurrency venture to raise capital. Interested investors might purchase a new cryptocurrency token through an initial coin offering.
## Description
The user of the given ICO contract can purchase "TestTokens." The ICO has three stages: presale, seedsale, and finalsale.
The coins have a total supply of 100 million tokens and its prices vary depending on the number of tokens left in the ICO.
For example, the 0.15$ presale round has ended with the sale of 30 million tokens. The price rises to $0.20 per token, kicking off the seedsale round.
## How to Install and Run the Project
* Step 1: Use remix, truffle, or Hardhat to deploy ERC20.sol. This adds 100 million TestTokens to your wallet.
* Step 2: Using the tools indicated in step 1, deploy ICO.sol using the ERC20.sol contract address and the wallet address (the address where the funds gets collected).
* Step 3: Using ERC20.sol's "transfer" method, send the total number of tokens to the ICO contract.
* Step 4: Use the "tokenPrice" function in the ICO.sol contract to check the current price of the token.
* Step 5: To acquire tokens, use the "purchase" function using the beneficiary's address.
* Step 6:- (Optional) Call the "balanceOf" method in the ERC20.sol contract to check for the allocated tokens for the supplied address.
### Installing Hardhat
Follow this link for detailed steps to install Hardhat:-
https://hardhat.org/getting-started/#installation

### For Remix
Use this link to deploy and test the contract.
https://remix.ethereum.org/

### Installing Truffle
Follow this link for detailed steps to install Truffle:-
https://trufflesuite.com/docs/truffle/getting-started/installation/

This project is a small demonstration for deploying and testing ICO contract and understand its basic functionalities.
