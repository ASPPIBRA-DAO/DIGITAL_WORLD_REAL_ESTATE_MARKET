require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
// require("./tasks");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

const INFURA = process.env.INFURA || "";
const ETHEREUM_API_KEY = process.env.ETHEREUM_API_KEY || "api-key";
const OPTIMISM_API_KEY = process.env.OPTIMISM_API_KEY || "api-key";
const BSC_API_KEY = process.env.BSC_API_KEY || "api-key";
const FANTOM_API_KEY = process.env.FANTOM_API_KEY || "api-key";
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "api-key";
const ARBITRUM_API_KEY = process.env.ARBITRUM_API_KEY || "api-key";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545",
        },
        ganache: {
            url: "http://127.0.0.1:7545",
        },
        fantomtestnet: {
            url: "https://rpc.testnet.fantom.network",
            accounts: [process.env.PRIVATEKEY],
        },
        bscTestnet: {
            url: `https://data-seed-prebsc-1-s1.bnbchain.org:8545`,
            accounts: [process.env.PRIVATEKEY],
        },
        ethereum: {
            url: "https://main-light.eth.linkpool.io/",
            accounts: [process.env.PRIVATEKEY],
        },
        ICICB: {
            url: "http://3.17.193.52/",
            accounts: [process.env.PRIVATEKEY],
        },
        ICICBtestnet: {
            url: "http://13.58.153.103/",
            accounts: [process.env.PRIVATEKEY],
        },
        bsc: {
            url: "https://bsc-dataseed1.ninicoin.io/",
            accounts: [process.env.PRIVATEKEY],
        },
        matic: {
            url: "https://rpc-mainnet.matic.quiknode.pro",
            accounts: [process.env.PRIVATEKEY],
        },
        fantom: {
            url: "https://rpc.ftm.tools/",
            accounts: [process.env.PRIVATEKEY],
        },
    },
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://etherscan.io/
        apiKey: {
            // Ethereum
            mainnet: ETHEREUM_API_KEY,
            sepolia: ETHEREUM_API_KEY,
            // Optimism
            optimisticEthereum: OPTIMISM_API_KEY,
            optimismSepolia: OPTIMISM_API_KEY,
            // polygon
            polygon: POLYGONSCAN_API_KEY,
            polygonMumbai: POLYGONSCAN_API_KEY,
            // Arbitrum
            arbitrumOne: ARBITRUM_API_KEY,
            arbitrumSepolia: ARBITRUM_API_KEY,
            // Bsc
            bsc: BSC_API_KEY,
            bscTestnet: BSC_API_KEY,
            // Fantom
            ftmTestnet: FANTOM_API_KEY,
            //
        },
    },
    solidity: {
        version: "0.8.25",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    mocha: {
        timeout: 20000000000,
    },
};
