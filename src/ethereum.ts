import { ethers } from 'ethers';

const apiKey = "658b776001284f2f9071184858fa87f5"
// Ethereum mainnet RPC endpoint
const ethereumRpcEndpoint = 'https://mainnet.infura.io/v3/658b776001284f2f9071184858fa87f5';

// USDT (Tether) contract address on Ethereum
const usdtContractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';

// Function to get the last block number of Ethereum mainnet
export async function getBlockNumber(): Promise<number> {
  const provider = new ethers.JsonRpcProvider(ethereumRpcEndpoint);
  const blockNumber = await provider.getBlockNumber();
  return blockNumber;
}