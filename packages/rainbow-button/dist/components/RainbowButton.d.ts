import type { RainbowKitProviderProps } from '@rainbow-me/rainbowkit/dist/components/RainbowKitProvider/RainbowKitProvider';
import React from 'react';
export declare function RainbowButtonProvider({ children, ...options }: Omit<RainbowKitProviderProps, 'chains' | 'avatar' | 'initialChain' | 'modalSize' | 'showRecentTransactions'>): React.JSX.Element;
export declare const RainbowButton: {
    (): React.JSX.Element;
    Custom: typeof import("@rainbow-me/rainbowkit/dist/components/WalletButton/WalletButtonRenderer").WalletButtonRenderer;
};
