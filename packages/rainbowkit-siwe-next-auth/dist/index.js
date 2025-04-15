"use client";

// src/RainbowKitSiweNextAuthProvider.tsx
import {
  RainbowKitAuthenticationProvider,
  createAuthenticationAdapter
} from "@rainbow-me/rainbowkit";
import { getCsrfToken, signIn, signOut, useSession } from "next-auth/react";
import React, { useMemo } from "react";
import { createSiweMessage } from "viem/siwe";
function RainbowKitSiweNextAuthProvider({
  children,
  enabled,
  getSiweMessageOptions
}) {
  const { status } = useSession();
  const adapter = useMemo(
    () => createAuthenticationAdapter({
      createMessage: ({ address, chainId, nonce }) => {
        const defaultConfigurableOptions = {
          domain: window.location.host,
          statement: "Sign in with Ethereum to the app.",
          uri: window.location.origin,
          version: "1"
        };
        const unconfigurableOptions = {
          address,
          chainId,
          nonce
        };
        return createSiweMessage({
          ...defaultConfigurableOptions,
          // Spread custom SIWE message options provided by the consumer
          ...getSiweMessageOptions?.(),
          // Spread unconfigurable options last so they can't be overridden
          ...unconfigurableOptions
        });
      },
      getNonce: async () => {
        const nonce = await getCsrfToken();
        if (!nonce) throw new Error();
        return nonce;
      },
      signOut: async () => {
        await signOut({ redirect: false });
      },
      verify: async ({ message, signature }) => {
        const response = await signIn("credentials", {
          message,
          signature,
          redirect: false
        });
        return response?.ok ?? false;
      }
    }),
    [getSiweMessageOptions]
  );
  return /* @__PURE__ */ React.createElement(
    RainbowKitAuthenticationProvider,
    {
      adapter,
      enabled,
      status
    },
    children
  );
}
export {
  RainbowKitSiweNextAuthProvider
};
