import { getBlockNumber, getUsdtBalance } from './ethereum';

async function main() {
  try {
    const lastBlockNumber = await getBlockNumber();
    console.log('Last Block Number:', lastBlockNumber);
    const ethereumAddress = 'adress';

    const usdtBalance = await getUsdtBalance(ethereumAddress);
    console.log('USDT Balance:', usdtBalance, 'USDT');
  } catch (error:any) {
    console.error('Error:', error.message);
  }
}

main();