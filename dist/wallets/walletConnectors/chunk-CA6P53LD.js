"use client";
import {
  getWalletConnectConnector
} from "./chunk-75A5A7MH.js";

// src/wallets/walletConnectors/hahaWallet/hahaWallet.ts
var hahaWallet = ({
  projectId,
  walletConnectParameters
}) => ({
  id: "haha-wallet",
  name: "HaHa",
  iconUrl: async () => (await import("./hahaWallet-4VLOBSJG.js")).default,
  iconBackground: "#FFFFFF",
  downloadUrls: {
    android: "https://play.google.com/store/apps/details?id=com.permutize.haha",
    ios: "https://apps.apple.com/us/app/haha-crypto-portfolio-tracker/id1591158244",
    chrome: "https://chromewebstore.google.com/detail/haha-wallet/andhndehpcjpmneneealacgnmealilal"
  },
  mobile: {
    getUri: (uri) => `haha://wc?uri=${encodeURIComponent(uri)}',`
  },
  qrCode: {
    getUri: (uri) => uri,
    instructions: {
      learnMoreUrl: "https://www.haha.me",
      steps: [
        {
          description: "We recommend putting Haha Wallet on your home screen for faster access to your wallet.",
          step: "install",
          title: "Open the HaHa Wallet app"
        },
        {
          description: "After you scan, a connection prompt will appear for you to connect your wallet.",
          step: "scan",
          title: "Tap the scan button"
        }
      ]
    }
  },
  extension: {
    instructions: {
      learnMoreUrl: "https://www.haha.me",
      steps: [
        {
          description: "We recommend pinning HaHa Wallet to your taskbar for quicker access to your wallet.",
          step: "install",
          title: "Install the HaHa Wallet extension"
        },
        {
          description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          step: "create",
          title: "Create or Import a Wallet"
        },
        {
          description: "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          step: "refresh",
          title: "Refresh your browser"
        }
      ]
    }
  },
  createConnector: getWalletConnectConnector({
    projectId,
    walletConnectParameters
  })
});

export {
  hahaWallet
};
