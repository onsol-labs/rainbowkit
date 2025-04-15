import { rainbowWallet } from '@rainbow-me/rainbowkit/wallets';
import type { CreateConnectorFn } from 'wagmi';
export type RainbowConnectorOptions = Parameters<typeof rainbowWallet>[0] & {
    appName: string;
    appDescription?: string;
    appUrl?: string;
    appIcon?: string;
};
declare function rainbowConnector({ projectId, appName, appDescription, appUrl, appIcon, walletConnectParameters, }: RainbowConnectorOptions): CreateConnectorFn;
export { rainbowConnector };
