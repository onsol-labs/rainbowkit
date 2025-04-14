import { NetworkWithRpc, TldParser } from '@onsol/tldparser';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { monadTestnet } from 'wagmi/chains';

const Home: NextPage = () => {
  const [mainDomain, setMainDomain] = useState<string | null>(null);

  const account = useAccount();

  useEffect(() => {
    const fetchMainDomain = async (accountAddress: string) => {
      try {
        const network = new NetworkWithRpc(
          monadTestnet.name,
          monadTestnet.id,
          monadTestnet.rpcUrls.default.http[0],
        );
        const parser = new TldParser(network, 'monad');
        const domain = await parser.getMainDomain(accountAddress);
        setMainDomain(domain.domain_name + domain.tld);
      } catch (error) {
        console.error('Error fetching main domain:', error);
      }
    };

    // Fetch the main domain only if the account is available
    if (account?.address) {
      fetchMainDomain(account.address);
    }
  }, [account?.address]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
    >
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          mounted,
        }) => {
          return (
            <div
              {...(!mounted && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!mounted || !account || !chain) {
                  return (
                    <button onClick={openConnectModal} type="button">
                      Connect Wallet
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button onClick={openChainModal} type="button">
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button
                      onClick={openChainModal}
                      style={{ display: 'flex', alignItems: 'center' }}
                      type="button"
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 12,
                            height: 12,
                            borderRadius: 999,
                            overflow: 'hidden',
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <Image
                              alt={chain.name ?? 'Chain icon'}
                              src={chain.iconUrl}
                              width={12}
                              height={12}
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                    </button>

                    <button onClick={openAccountModal} type="button">
                      {mainDomain ? mainDomain : account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ''}
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
};

export default Home;
