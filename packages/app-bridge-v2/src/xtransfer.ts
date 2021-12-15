import {ApiPromise, Keyring, WsProvider} from '@polkadot/api'
import {AddressOrPair} from '@polkadot/api/types'
import BN from 'bn.js'

const bn1e12 = new BN(10).pow(new BN(12))
// const khalaParaId = 2004
const karuraParaId = 2000

async function transferPHAFromKhalaToKarura(
  khalaApi: ApiPromise,
  sender: AddressOrPair,
  recipient: any,
  amount: BN,
  callback?: (message: string) => void
) {
  callback?.(`Transfer PHA from Khala to Karura...`)
  await khalaApi?.tx?.xcmTransfer
    ?.transferNative?.(karuraParaId, recipient.address, amount, 6000000000)
    .signAndSend(sender, (result) => {
      callback?.(`Transfer PHA from Khala to Karura: ${result.status}`)

      if (result.status.isInBlock) {
        callback?.(
          `Transaction included at blockHash ${result.status.asInBlock}`
        )
      } else if (result.status.isFinalized) {
        callback?.(
          `Transaction finalized at blockHash ${result.status.asFinalized}`
        )
      }
    })
}

// async function transferPHAFromKaruraToKhala(
//   karuraApi: ApiPromise,
//   sender: AddressOrPair,
//   recipient: KeyringPair,
//   amount: BN
// ) {
//   log(`Transfer PHA from Karura to Khala...`)
//   return new Promise(async (resolve) => {
//     const unsub = await karuraApi.tx.xTokens
//       .transfer(
//         karuraApi.createType('AcalaPrimitivesCurrencyCurrencyId', {
//           // 170 is PHA registered in kurura runtime
//           Token: karuraApi.createType(
//             'AcalaPrimitivesCurrencyTokenSymbol',
//             170
//           ),
//         }),
//         amount,
//         karuraApi.createType('XcmVersionedMultiLocation', {
//           V1: karuraApi.createType('XcmV1MultiLocation', {
//             parents: 1,
//             interior: karuraApi.createType('Junctions', {
//               X2: [
//                 karuraApi.createType('XcmV1Junction', {
//                   Parachain: karuraApi.createType('Compact<U32>', khalaParaId),
//                 }),
//                 karuraApi.createType('XcmV1Junction', {
//                   AccountId32: {
//                     network: karuraApi.createType(
//                       'XcmV0JunctionNetworkId',
//                       'Any'
//                     ),
//                     id: '0x' + Buffer.from(recipient.publicKey).toString('hex'),
//                   },
//                 }),
//               ],
//             }),
//           }),
//         }),
//         6000000000
//       )
//       .signAndSend(
//         sender,
//         (result: {
//           status: {
//             isInBlock: any
//             asInBlock: any
//             isFinalized: any
//             asFinalized: any
//           }
//         }) => {
//           if (result.status.isInBlock) {
//             log(`Transaction included at blockHash ${result.status.asInBlock}`)
//           } else if (result.status.isFinalized) {
//             log(
//               `Transaction finalized at blockHash ${result.status.asFinalized}`
//             )
//             unsub()
//             resolve(null)
//           }
//         }
//       )
//   })
// }

// async function transferKARFromKaruraToKhala(
//   karuraApi: ApiPromise,
//   sender: AddressOrPair,
//   recipient: KeyringPair,
//   amount: BN
// ) {
//   log(`Transfer KAR from Karura to Khala...`)
//   return new Promise(async (resolve) => {
//     const unsub = await karuraApi.tx.xTokens
//       .transfer(
//         karuraApi.createType('AcalaPrimitivesCurrencyCurrencyId', {
//           // 128 is KAR in kurura runtime
//           Token: karuraApi.createType(
//             'AcalaPrimitivesCurrencyTokenSymbol',
//             128
//           ),
//         }),
//         amount,
//         karuraApi.createType('XcmVersionedMultiLocation', {
//           V1: karuraApi.createType('XcmV1MultiLocation', {
//             parents: 1,
//             interior: karuraApi.createType('Junctions', {
//               X2: [
//                 karuraApi.createType('XcmV1Junction', {
//                   Parachain: karuraApi.createType('Compact<U32>', khalaParaId),
//                 }),
//                 karuraApi.createType('XcmV1Junction', {
//                   AccountId32: {
//                     network: karuraApi.createType(
//                       'XcmV0JunctionNetworkId',
//                       'Any'
//                     ),
//                     id: '0x' + Buffer.from(recipient.publicKey).toString('hex'),
//                   },
//                 }),
//               ],
//             }),
//           }),
//         }),
//         6000000000
//       )
//       .signAndSend(
//         sender,
//         (result: {
//           status: {
//             isInBlock: any
//             asInBlock: any
//             isFinalized: any
//             asFinalized: any
//           }
//         }) => {
//           if (result.status.isInBlock) {
//             log(`Transaction included at blockHash ${result.status.asInBlock}`)
//           } else if (result.status.isFinalized) {
//             log(
//               `Transaction finalized at blockHash ${result.status.asFinalized}`
//             )
//             unsub()
//             resolve(null)
//           }
//         }
//       )
//   })
// }

// async function transferKARFromKhalaToKarura(
//   khalaApi: ApiPromise,
//   sender: AddressOrPair,
//   recipient: KeyringPair,
//   amount: BN
// ) {
//   log(`Transfer KAR from Khala to Karura...`)

//   return new Promise(async (resolve) => {
//     const unsub = await khalaApi.tx.xcmTransfer
//       .transferAsset(
//         khalaApi.createType(
//           'XtransferPalletsAssetsWrapperPalletXTransferAsset',
//           {
//             ParachainAsset: khalaApi.createType('XcmV1MultiLocation', {
//               parents: 1,
//               interior: khalaApi.createType('Junctions', {
//                 X2: [
//                   khalaApi.createType('XcmV1Junction', {
//                     Parachain: khalaApi.createType(
//                       'Compact<U32>',
//                       karuraParaId
//                     ),
//                   }),
//                   khalaApi.createType('XcmV1Junction', {
//                     // 0x0080 is general key of KAR defined in karura runtime
//                     GeneralKey: '0x0080',
//                   }),
//                 ],
//               }),
//             }),
//           }
//         ),
//         karuraParaId,
//         recipient.address,
//         amount,
//         6000000000
//       )
//       .signAndSend(
//         sender,
//         (result: {
//           status: {
//             isInBlock: any
//             asInBlock: any
//             isFinalized: any
//             asFinalized: any
//           }
//         }) => {
//           if (result.status.isInBlock) {
//             log(`Transaction included at blockHash ${result.status.asInBlock}`)
//           } else if (result.status.isFinalized) {
//             log(
//               `Transaction finalized at blockHash ${result.status.asFinalized}`
//             )
//             unsub()
//             resolve(null)
//           }
//         }
//       )
//   })
// }

async function getBaseInfo() {
  const khalaEndpoint = 'ws://35.215.162.102:9944'
  const khalaProvider = new WsProvider(khalaEndpoint)
  const khalaApi = await ApiPromise.create({
    provider: khalaProvider,
  })

  const keyring = new Keyring({type: 'sr25519'})
  const karuraAccount = keyring.addFromUri('//Alice')
  const khalaAccount = keyring.addFromUri('//Bob')

  return {
    khalaApi,
    khalaAccount,
    karuraAccount,
  } as const
}

export async function runTransferPHAFromKhalaToKarura(
  callback?: (message: string) => void
) {
  const {khalaApi, khalaAccount, karuraAccount} = await getBaseInfo()

  await transferPHAFromKhalaToKarura(
    khalaApi,
    khalaAccount,
    karuraAccount,
    bn1e12.mul(new BN(100)),
    callback
  )

  // khalaApi.disconnect()
}

export async function main() {
  // log('LOG: ' + 'create karura api')
  // const karuraEndpoint = 'ws://35.215.162.102:9955'
  // const karuraProvider = new WsProvider(karuraEndpoint)
  // const karuraApi = await ApiPromise.create({
  //   provider: karuraProvider,
  // })
  // log(
  //   'LOG: ' +
  //     'now, karuraAccount has reserved 100 PHA on karura network(actually with small fee being deducted, so < 100)'
  // )
  // log(
  //   'LOG: ' +
  //     'transfer 50 PHA back from karuraAccount on khala network to khalaAccount on khala network'
  // )
  // await transferPHAFromKaruraToKhala(
  //   karuraApi,
  //   karuraAccount,
  //   khalaAccount,
  //   bn1e12.mul(new BN(50))
  // )
  // log(
  //   'LOG: ' +
  //     'transfer 100 KAR from karuraAccount on karura network to khalaAccount on khala network'
  // )
  // await transferKARFromKaruraToKhala(
  //   karuraApi,
  //   karuraAccount,
  //   khalaAccount,
  //   bn1e12.mul(new BN(100))
  // )
  // log(
  //   'LOG: ' +
  //     'now, khalaAccount has reserved 100 KAR on khala network(actually with small fee being deducted, so < 100)'
  // )
  // log(
  //   'LOG: ' +
  //     'transfer 50 KAR back from khalaAccount on khala network to karuraAccount on karura network'
  // )
  // await transferKARFromKhalaToKarura(
  //   khalaApi,
  //   khalaAccount,
  //   karuraAccount,
  //   bn1e12.mul(new BN(50))
  // )
}
