const { BigNumberish } = require('ethers');
const { parseEther } = require('ethers/lib/utils')

const parseEth = (amount) => parseEther(amount.toString())

module.exports = parseEth