import type { Address } from 'viem';
import { monadTestnet } from 'wagmi/chains';
import { addAnsName, getAnsName } from '../utils/ans';
import { NetworkWithRpc, TldParser } from '@onsol/tldparser';
import { createQueryKey } from '../core/react-query/createQuery';
import { useQuery } from '@tanstack/react-query';

async function getOnchainAnsName({ address }: { address: Address }) {
  const ensName = getAnsName(address);
  if (ensName) return ensName;
  try {
    const network = new NetworkWithRpc(
      monadTestnet.name,
      monadTestnet.id,
      monadTestnet.rpcUrls.default.http[0],
    );
    const parser = new TldParser(network, 'monad');
    const mainDomain = await parser.getMainDomain(address);
    const onChainAnsName = mainDomain.domain_name + mainDomain.tld;
    if (onChainAnsName) {
      addAnsName(address, onChainAnsName);
    }

    return onChainAnsName;
  } catch {
    return null;
  }
}

export function useMonadTestnetAnsName(address?: Address) {
  let ansNameValue = null;
  try {
    // Fetch ans name from enhanced provider if mainnet isn't configured
    const { data: ansName } = useQuery({
      queryKey: createQueryKey('address', address),
      queryFn: () => getOnchainAnsName({ address: address! }),
      enabled: !!address,
      staleTime: 5 * (60 * 1_000), // 5 minutes
      retry: 1, // Retry once before returning undefined if the request fails
    });
    ansNameValue = ansName;
  } catch (e) {
    console.error(e);
  }

  return ansNameValue;
}
