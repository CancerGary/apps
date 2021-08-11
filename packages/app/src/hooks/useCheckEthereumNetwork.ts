import { ethereums } from '@phala/app-config'
import { isDev, isTest } from '@phala/utils'
import { useEthers } from '../libs/ethereum/contexts/useEthers'

export function useCheckEthereumNetwork(): boolean {
  const { provider } = useEthers()
  const chainId = provider?.network?.chainId as number

  if (isTest() || isDev()) {
    const network = ethereums[chainId]
    return !!network
  } else {
    return chainId === 1
  }
}
