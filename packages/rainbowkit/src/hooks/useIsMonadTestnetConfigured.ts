import { monadTestnet } from 'wagmi/chains';
import { useRainbowKitChains } from '../components/RainbowKitProvider/RainbowKitChainContext';

export function useIsMonadTestnetConfigured() {
  const rainbowKitChains = useRainbowKitChains();

  const chainId = monadTestnet.id;

  const configured = rainbowKitChains.some(
    (rainbowKitChain) => rainbowKitChain.id === chainId,
  );

  return configured;
}
