import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected(), walletConnect({ projectId: 'cdbd18f9f96172be74c3e351ce99b908' })],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})