import { getBlockNumber, getUsdtBalance } from './ethereum';

async function main() {
  try {
    const lastBlockNumber = await getBlockNumber();
    console.log('Last Block Number:', lastBlockNumber);

    const ethereumAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
    const usdtBalance = await getUsdtBalance(ethereumAddress);
    console.log('USDT Balance:', usdtBalance, 'USDT');
  } catch (error:any) {
    console.error('Error:', error.message);
  }
}

main();