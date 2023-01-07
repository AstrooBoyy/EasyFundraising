import Web3 from "web3";
import {defaultChainId} from "./config";
export const web3Default = {
    56: {
        web3Default: new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/')),
        name: 'BSC Mainnet',
        explorer: 'https://bscscan.com/',
    },
    97: {
        web3Default: new Web3(
            new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s3.binance.org:8545/')
        ),
        name: 'BSC Testnet',
        explorer: 'https://testnet.bscscan.com/',
    },
};

export const web3List = (_chainId) => {
    return web3Default[_chainId];
};

export const networkDefault = (() => {
    const savedChainId = Number.parseInt(localStorage.getItem('chainId'));
    return savedChainId > 0 && web3Default[savedChainId] ? savedChainId : defaultChainId;
})();


