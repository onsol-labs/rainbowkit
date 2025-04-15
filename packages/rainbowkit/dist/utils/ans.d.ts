import { type Address } from 'viem';
export declare function getStorageAnsNameKey(address: Address): string;
export declare function addAnsName(address: Address, ansName: string): void;
export declare function getAnsName(address: Address): string | null;
