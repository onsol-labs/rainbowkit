import React, { type ReactNode } from 'react';
import type { Address } from 'viem';
import { type SiweMessage } from 'viem/siwe';
type UnconfigurableMessageOptions = {
    address: Address;
    chainId: number;
    nonce: string;
};
type ConfigurableMessageOptions = Partial<Omit<SiweMessage, keyof UnconfigurableMessageOptions>> & {
    [_Key in keyof UnconfigurableMessageOptions]?: never;
};
export type GetSiweMessageOptions = () => ConfigurableMessageOptions;
interface RainbowKitSiweNextAuthProviderProps {
    enabled?: boolean;
    getSiweMessageOptions?: GetSiweMessageOptions;
    children: ReactNode;
}
export declare function RainbowKitSiweNextAuthProvider({ children, enabled, getSiweMessageOptions, }: RainbowKitSiweNextAuthProviderProps): React.JSX.Element;
export {};
