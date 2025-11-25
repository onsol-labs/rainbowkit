import type { Address } from 'viem';
interface UseProfileParameters {
    address?: Address;
    includeBalance?: boolean;
}
export declare function useProfile({ address, includeBalance }: UseProfileParameters): {
    ensName: string | null | undefined;
    ensAvatar: import("viem").GetEnsAvatarReturnType | undefined;
    balance: {
        decimals: number;
        symbol: string;
        value: bigint;
    } | undefined;
};
export declare function useProfileMonadTestnet({ address, includeBalance, }: UseProfileParameters): {
    ensName: any;
    ensAvatar: undefined;
    balance: {
        decimals: number;
        symbol: string;
        value: bigint;
    } | undefined;
};
export declare function useProfileMulti({ address, includeBalance, }: UseProfileParameters): {
    ensName: string | null | undefined;
    ensAvatar: import("viem").GetEnsAvatarReturnType | undefined;
    balance: {
        decimals: number;
        symbol: string;
        value: bigint;
    } | undefined;
} | {
    ensName: any;
    ensAvatar: undefined;
    balance: {
        decimals: number;
        symbol: string;
        value: bigint;
    } | undefined;
};
export {};
