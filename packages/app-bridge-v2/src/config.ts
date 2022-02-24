export const khalaChainId = 1
export const khalaParaId = 2004
export const karuraParaId = 2000

export const keyringType = 'sr25519'

export const blockchainTypes = {
  ethereum: 'ethereum',
  polkadot: 'polkadot',
} as const

export const Khala = 'Khala'
export const Karura = 'Karura'
export const Evm = 'Evm'
export const Ethereum = 'Ethereum'

export type Network = {
  id: string
  name: string
  blockchainType: string
  label: string
}

export const networks: Network[] = [
  // {
  //   label: Karura,
  //   name: Karura,
  //   id: Karura,
  //   blockchainType: blockchainTypes.polkadot,
  // },
  // {
  //   label: Evm,
  //   name: Evm,
  //   id: Evm,
  //   blockchainType: blockchainTypes.ethereum,
  // },
  {
    label: Ethereum,
    name: Ethereum,
    id: Ethereum,
    blockchainType: blockchainTypes.ethereum,
  },
  {
    label: Khala,
    name: Khala,
    id: Khala,
    blockchainType: blockchainTypes.polkadot,
  },
]

export const PHA = 'PHA'
export const KHR = 'KHR'
export const ETH = 'ETH'

export const coins = [
  {
    label: PHA,
    name: PHA,
    id: PHA,
  },
  // {
  //   label: KHR,
  //   name: KHR,
  //   id: KHR,
  // },
  // {
  //   label: ETH,
  //   name: ETH,
  //   id: ETH,
  // },
] as const

export const Transfers = {
  transferPHAFromKhalaToKarura: 'transferPHAFromKhalaToKarura',
  transferPHAFromKaruraToKhala: 'transferPHAFromKaruraToKhala',
  transferKARFromKaruraToKhala: 'transferKARFromKaruraToKhala',
  transferKARFromKhalaToKarura: 'transferKARFromKhalaToKarura',
  transferAssetsKhalaAccounts: 'transferAssetsKhalaAccounts',
  transferPhaFromEvmToKhala: 'transferPhaFromEvmToKhala',
  transferPhaFromEvmToKarura: 'transferPhaFromEvmToKarura',
}