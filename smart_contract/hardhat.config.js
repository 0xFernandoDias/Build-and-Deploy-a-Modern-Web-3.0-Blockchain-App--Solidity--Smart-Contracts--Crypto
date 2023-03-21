require("@nomiclabs/hardhat-waffle")
require("dotenv").config()

module.exports = {
	solidity: "0.8.0",
	networks: {
		goerli: {
			url: "https://eth-goerli.g.alchemy.com/v2/svlGy4Z13hsNN_KXAKPUKsn_Zl5LfAA-",
			accounts: [`0x${PRIVATE_KEY}`],
		},
	},
}
