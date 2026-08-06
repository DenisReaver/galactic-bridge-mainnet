// wagmi.ts
import { http } from 'wagmi';
import { 
  mainnet, 
  base, 
  optimism, 
  arbitrum 
} from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

// ARC Mainnet
const arcMainnet = {
  id: 5042,
  name: 'ARC Mainnet',
  nativeCurrency: { name: 'ARC', symbol: 'ARC', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc-main-1.archiechain.io'],
    },
  },
} as const;

// Tempo Mainnet
const tempoMainnet = {
  id: 4217,
  name: 'Tempo Mainnet',
  nativeCurrency: { name: 'USD', symbol: 'USD', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.tempo.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Tempo Explorer',
      url: 'https://explore.tempo.xyz',
    },
  },
} as const;

export const config = getDefaultConfig({
  appName: 'Galactic Bridge',
  projectId: '6cd43074381dca42cc0f029143e150c8',
  chains: [mainnet, base, optimism, arbitrum, arcMainnet, tempoMainnet],
  transports: {
    [mainnet.id]: http('https://ethereum.publicnode.com'),
    [base.id]: http('https://mainnet.base.org'),
    [optimism.id]: http('https://mainnet.optimism.io'),
    [arbitrum.id]: http('https://arb1.arbitrum.io/rpc'),
    [arcMainnet.id]: http('https://rpc-main-1.archiechain.io'),
    [tempoMainnet.id]: http('https://rpc.tempo.xyz'),
  },
  ssr: true,
});
