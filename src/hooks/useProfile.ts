import type { Address } from 'viem';
import { useBalance } from 'wagmi';
import { useMainnetEnsAvatar } from './useMainnetEnsAvatar';
import { useMainnetEnsName } from './useMainnetEnsName';
import { useMonadAnsName } from './useMonadAnsName';
import { useIsMonadTestnetConfigured } from './useIsMonadTestnetConfigured';

interface UseProfileParameters {
  address?: Address;
  includeBalance?: boolean;
}

export function useProfile({ address, includeBalance }: UseProfileParameters) {
  const ensName = useMainnetEnsName(address);
  const ensAvatar = useMainnetEnsAvatar(ensName);
  const { data: balance } = useBalance({
    address: includeBalance ? address : undefined,
  });

  return { ensName, ensAvatar, balance };
}

export function useProfileMonadTestnet({
  address,
  includeBalance,
}: UseProfileParameters) {
  const ansName = useMonadAnsName(address);
  const { data: balance } = useBalance({
    address: includeBalance ? address : undefined,
  });

  return { ensName: ansName, ensAvatar: undefined, balance };
}

export function useProfileMulti({
  address,
  includeBalance,
}: UseProfileParameters) {
  const monadTestnetConfigured = useIsMonadTestnetConfigured();

  if (monadTestnetConfigured) {
    return useProfileMonadTestnet({ address, includeBalance });
  }
  return useProfile({ address, includeBalance });
}
