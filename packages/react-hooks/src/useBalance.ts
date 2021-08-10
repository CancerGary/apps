import { useApiPromise } from '@phala/libs'
import { VoidFn } from '@polkadot/api/types'
import type { AccountId, Balance } from '@polkadot/types/interfaces'
import { useEffect, useState } from 'react'

export default function useBalance(
  address?: string | AccountId | Uint8Array
): Balance | undefined {
  const { api, readystate } = useApiPromise()
  const [balance, setBalance] = useState<Balance>()
  const initialized = readystate === 'ready'

  useEffect(() => {
    if (!address || !initialized || !api) {
      return
    }

    let unsubscribe: VoidFn

    api.query.system
      .account(address, ({ data: { free } }) => {
        // FIXME
        // @ts-ignore
        setBalance(free)
      })
      .then((_unsubscribe) => (unsubscribe = _unsubscribe))

    return () => {
      unsubscribe?.()
    }
  }, [api, initialized, address])

  return balance
}
