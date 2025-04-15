import { type JSX } from 'react';
import type { GetEnsNameReturnType } from 'viem';
import type { GetEnsAvatarReturnType } from 'viem/actions';
import type { useAccount } from 'wagmi';
import type { useProfileMulti } from '../../hooks/useProfile';
export interface ProfileDetailsProps {
    address: ReturnType<typeof useAccount>['address'];
    ensAvatar: GetEnsAvatarReturnType | undefined;
    ensName: GetEnsNameReturnType | undefined;
    balance: ReturnType<typeof useProfileMulti>['balance'];
    onClose: () => void;
    onDisconnect: () => void;
    viewProfileAction?: {
        label: string;
        action: (address: string) => void;
        icon: JSX.Element;
    };
}
export declare function ProfileDetails({ address, ensAvatar, ensName, balance, onClose, onDisconnect, viewProfileAction, }: ProfileDetailsProps): JSX.Element | null;
