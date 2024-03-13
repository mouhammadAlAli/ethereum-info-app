"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsdtBalance = exports.getBlockNumber = void 0;
const ethers_1 = require("ethers");
const apiKey = "658b776001284f2f9071184858fa87f5";
const ethereumRpcEndpoint = 'https://mainnet.infura.io/v3/658b776001284f2f9071184858fa87f5';
const usdtContractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';
function getBlockNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = new ethers_1.ethers.JsonRpcProvider(ethereumRpcEndpoint);
        const blockNumber = yield provider.getBlockNumber();
        return blockNumber;
    });
}
exports.getBlockNumber = getBlockNumber;
function getUsdtBalance(address) {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = new ethers_1.ethers.JsonRpcProvider(ethereumRpcEndpoint);
        const usdtContract = new ethers_1.ethers.Contract(usdtContractAddress, ['function balanceOf(address)'], provider);
        const balance = yield usdtContract.balanceOf(address);
        return balance.toString();
    });
}
exports.getUsdtBalance = getUsdtBalance;
//# sourceMappingURL=ethereum.js.map