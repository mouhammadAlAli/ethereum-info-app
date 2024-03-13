import { ethers } from 'ethers';

const apiKey = ""
// Ethereum mainnet RPC endpoint
const ethereumRpcEndpoint = 'https://mainnet.infura.io/v3/'+apiKey;

// USDT (Tether) contract address on Ethereum
const usdtContractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';

// Function to get the last block number of Ethereum mainnet
export async function getBlockNumber(): Promise<number> {
  const provider = new ethers.JsonRpcProvider(ethereumRpcEndpoint);
  const blockNumber = await provider.getBlockNumber();
  return blockNumber;
}

// Function to get the USDT balance of a provided Ethereum address
export async function getUsdtBalance(address: string): Promise<string> {
  const provider = new ethers.JsonRpcProvider(ethereumRpcEndpoint);
  const usdtContract = new ethers.Contract(usdtContractAddress, ['function balanceOf(address)'], provider);
  const balance = await usdtContract.balanceOf(address);
  return balance.toString();
}