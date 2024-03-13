import { getBlockNumber } from './ethereum';

async function main() {
  try {
    const lastBlockNumber = await getBlockNumber();
    console.log('Last Block Number:', lastBlockNumber);
  } catch (error:any) {
    console.error('Error:', error.message);
  }
}

main();