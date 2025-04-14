import { type Address, isAddress } from 'viem';

interface AnsData {
  ansName: string;
  expires: number;
}

export function getStorageAnsNameKey(address: Address) {
  return `rk-ans-name-${address}`;
}

function safeParseJsonData(string: string | null): AnsData | null {
  try {
    const value = string ? JSON.parse(string) : null;
    return typeof value === 'object' ? value : null;
  } catch {
    return null;
  }
}

export function addAnsName(address: Address, ansName: string) {
  if (!isAddress(address)) return;

  const now = new Date();

  const expiry = new Date(now.getTime() + 180 * 60_000); // Set expiry to 3 hours from now

  localStorage.setItem(
    getStorageAnsNameKey(address),
    JSON.stringify({
      ansName,
      expires: expiry.getTime(),
    }),
  );
}

export function getAnsName(address: Address): string | null {
  const data = safeParseJsonData(
    localStorage.getItem(getStorageAnsNameKey(address)),
  );

  if (!data) return null;

  const { ansName, expires } = data;

  if (typeof ansName !== 'string' || Number.isNaN(Number(expires))) {
    localStorage.removeItem(getStorageAnsNameKey(address));
    return null;
  }

  const now = new Date();

  if (now.getTime() > Number(expires)) {
    localStorage.removeItem(getStorageAnsNameKey(address));
    return null;
  }

  return ansName;
}
