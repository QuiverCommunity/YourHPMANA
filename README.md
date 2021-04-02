# YourHPMANA

## Installation
### 1. Download and install the most stable version of nodejs [here](https://nodejs.org/en/).
### 2. Open new terminal and run the command below to clone the repo.
```
git clone git@github.com:QuiverCommunity/YourHPMANA.git
```
### 3. Install node packages for both frontend and smart contracts
```
yarn install
...
cd frontend
yarn install
...
cd ../smart_contract
yarn install
```
## Run
### frontend
Open terminal and locate to the root directory of the project and run the command below
```
yarn start
```
## Test
### smart_contracts
```
cd smart_contract
npx hardhat test
```
We use hardhat, you can learn more about **hardhat** [here](https://hardhat.org/getting-started/#quick-start).

## Todo
We didn't set hardhat configs in this project yet, you should setup the config yourself. Please refer [hardhat documentations](https://hardhat.org/config/).
