import { defineChain } from "viem";

export const monadMainnet = /*#__PURE__*/ defineChain({
  id: 143,
  name: 'Monad',
  nativeCurrency: {
    name: 'MON Token',
    symbol: 'MON',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.monad.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Monad explorer',
      url: 'https://monadscan.com',
    },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 251449,
    },
  },
})
