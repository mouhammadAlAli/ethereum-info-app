import { getBlockNumber, getUsdtBalance } from '../src/ethereum';

describe('Ethereum Info Functions', () => {
  it('should get the last block number', async () => {
    const blockNumber = await getBlockNumber();
    expect(blockNumber).toBeGreaterThan(0);
  });

  it('should get the USDT balance of the provided address', async () => {
    const usdtBalance = await getUsdtBalance('0xYOUR_ETHEREUM_ADDRESS');
    expect(Number(usdtBalance)).toBeGreaterThanOrEqual(0);
  });
});