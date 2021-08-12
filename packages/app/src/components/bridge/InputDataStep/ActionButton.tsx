import {
  useEthereumAccountAtom,
  usePolkadotAccountAtom,
} from '@phala/app-store'
import { Button } from '@phala/react-components'
import React, { useState } from 'react'
import { voidFn } from '../../../types/normal'
import EthereumAccountModal from '../../EthereumAccountModal'
import PolkadotAccountModal from '../../PolkadotAccountModal'

type Props = {
  onClick: voidFn
  isFromEthereum: boolean
}

const ActionButton: React.FC<Props> = (props) => {
  const { onClick, isFromEthereum } = props

  const [polkadotAccount] = usePolkadotAccountAtom()
  const [ethereumAccount] = useEthereumAccountAtom()
  const [ethereumAccountModalViable, setEthereumAccountModalViable] =
    useState(false)
  const [polkadotAccountModalViable, setPolkadotAccountModalViable] =
    useState(false)

  let render = (
    <Button type="primary" onClick={onClick}>
      Next
    </Button>
  )

  if (!isFromEthereum && !polkadotAccount) {
    render = (
      <>
        <Button
          onClick={() => setPolkadotAccountModalViable(true)}
          type="primary">{`Connect Polkadot{.js}`}</Button>

        <PolkadotAccountModal
          onClose={() => setPolkadotAccountModalViable(false)}
          visible={polkadotAccountModalViable}
        />
      </>
    )
  }

  if (isFromEthereum && !ethereumAccount) {
    render = (
      <>
        <Button
          onClick={() => setEthereumAccountModalViable(true)}
          type="primary">
          Connet METAMASK
        </Button>

        <EthereumAccountModal
          onClose={() => setEthereumAccountModalViable(false)}
          visible={ethereumAccountModalViable}
        />
      </>
    )
  }

  return render
}

export default ActionButton
