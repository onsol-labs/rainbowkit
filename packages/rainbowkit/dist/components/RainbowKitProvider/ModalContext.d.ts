import { type JSX, type ReactNode } from 'react';
interface ModalProviderProps {
    children: ReactNode;
    viewProfileAction?: {
        label: string;
        action: (address: string) => void;
        icon: JSX.Element;
    };
}
export declare function ModalProvider({ children, viewProfileAction }: ModalProviderProps): JSX.Element;
export declare function useModalState(): {
    accountModalOpen: boolean;
    chainModalOpen: boolean;
    connectModalOpen: boolean;
};
export declare function useAccountModal(): {
    accountModalOpen: boolean;
    openAccountModal: (() => void) | undefined;
};
export declare function useChainModal(): {
    chainModalOpen: boolean;
    openChainModal: (() => void) | undefined;
};
export declare function useViewProfileData(): {
    viewProfileAction: {
        label: string;
        action: (address: string) => void;
        icon: JSX.Element;
    } | undefined;
};
export declare function useWalletConnectOpenState(): {
    isWalletConnectModalOpen: boolean;
    setIsWalletConnectModalOpen: (isWalletConnectModalOpen: boolean) => void;
};
export declare function useConnectModal(): {
    connectModalOpen: boolean;
    openConnectModal: (() => void) | undefined;
};
export {};
