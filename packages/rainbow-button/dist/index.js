"use client";

// src/components/RainbowButton.tsx
import { RainbowKitProvider, WalletButton } from "@rainbow-me/rainbowkit";
import React from "react";
function RainbowButtonProvider({
  children,
  ...options
}) {
  return /* @__PURE__ */ React.createElement(RainbowKitProvider, { ...options }, children);
}
var RainbowButton = () => {
  return /* @__PURE__ */ React.createElement(WalletButton, { wallet: "rainbow" });
};
RainbowButton.Custom = WalletButton.Custom;

// src/connectors/rainbow.ts
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { rainbowWallet } from "@rainbow-me/rainbowkit/wallets";
function rainbowConnector({
  projectId,
  appName,
  appDescription,
  appUrl,
  appIcon,
  walletConnectParameters
}) {
  const [connector] = connectorsForWallets(
    [{ groupName: "Popular", wallets: [rainbowWallet] }],
    {
      projectId,
      appName,
      appDescription,
      appUrl,
      appIcon,
      walletConnectParameters
    }
  );
  return connector;
}
export {
  RainbowButton,
  RainbowButtonProvider,
  rainbowConnector
};
