// wagmi.ts
import { http, createConfig } from 'wagmi';
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
      http: ['https://rpc-main-1.archiechain.io'] // или актуальный RPC
    } 
  },
} as const;

export const config = getDefaultConfig({
  appName: 'Galactic Bridge',
  projectId: '6cd43074381dca42cc0f029143e150c8',
  chains: [mainnet, base, optimism, arbitrum, arcMainnet],
  transports: {
    [mainnet.id]: http('https://ethereum.publicnode.com'),
    [base.id]: http('https://mainnet.base.org'),
    [optimism.id]: http('https://mainnet.optimism.io'),
    [arbitrum.id]: http('https://arb1.arbitrum.io/rpc'),
    [arcMainnet.id]: http('https://rpc-main-1.archiechain.io'), // обнови при необходимости
  },
  ssr: true,
});
