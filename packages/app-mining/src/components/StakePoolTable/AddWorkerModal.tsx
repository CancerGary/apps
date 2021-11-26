import {usePolkadotAccountAtom} from '@phala/app-store'
import {Input} from '@phala/react-components'
import {
  useApiPromise,
  useDecimalJsTokenDecimalMultiplier,
  usePhalaStakePoolTransactionFee,
} from '@phala/react-libs'
import {useCallback, useMemo, useState} from 'react'
import type {StakePoolModalProps} from '.'
import useWaitSignAndSend from '../../hooks/useWaitSignAndSend'
import ActionModal, {Label, Value} from '../ActionModal'

const AddWorkerModal = (props: StakePoolModalProps): JSX.Element => {
  const {onClose, stakePool} = props
  const {api} = useApiPromise()
  const waitSignAndSend = useWaitSignAndSend()
  const decimals = useDecimalJsTokenDecimalMultiplier(api)
  const [pubkey, setPubkey] = useState<string>('')
  const [polkadotAccount] = usePolkadotAccountAtom()

  const action = useMemo(() => {
    if (!api || !pubkey || !decimals) return

    return api.tx.phalaStakePool?.addWorker?.(stakePool.pid, pubkey)
  }, [api, stakePool, pubkey, decimals])

  const onConfirm = useCallback(async () => {
    if (action) {
      return waitSignAndSend(action)
    }
  }, [waitSignAndSend, action])

  const onInputChange = useCallback((value) => {
    setPubkey(value)
  }, [])

  const fee = usePhalaStakePoolTransactionFee(action, polkadotAccount.address)

  return (
    <ActionModal
      onClose={onClose}
      onConfirm={onConfirm}
      title="Add Worker"
      disabled={!pubkey}>
      <Label>pid</Label>
      <Value>{stakePool.pid}</Value>

      <Label>Pubkey</Label>
      <Input
        placeholder="Public Key"
        value={pubkey}
        onChange={onInputChange}></Input>

      <Label>Fee</Label>
      <Value>{fee}</Value>
    </ActionModal>
  )
}

export default AddWorkerModal
