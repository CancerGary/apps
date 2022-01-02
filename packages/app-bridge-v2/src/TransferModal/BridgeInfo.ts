export const BridgeInfo = {
  contractName: 'Bridge',
  abi: [
    {
      inputs: [
        {
          internalType: 'uint8',
          name: 'chainID',
          type: 'uint8',
        },
        {
          internalType: 'address[]',
          name: 'initialRelayers',
          type: 'address[]',
        },
        {
          internalType: 'uint256',
          name: 'initialRelayerThreshold',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'fee',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'expiry',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint8',
          name: 'destinationChainID',
          type: 'uint8',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'resourceID',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'uint64',
          name: 'depositNonce',
          type: 'uint64',
        },
      ],
      name: 'Deposit',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'Paused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint8',
          name: 'originChainID',
          type: 'uint8',
        },
        {
          indexed: true,
          internalType: 'uint64',
          name: 'depositNonce',
          type: 'uint64',
        },
        {
          indexed: true,
          internalType: 'enum Bridge.ProposalStatus',
          name: 'status',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'resourceID',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'dataHash',
          type: 'bytes32',
        },
      ],
      name: 'ProposalEvent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint8',
          name: 'originChainID',
          type: 'uint8',
        },
        {
          indexed: true,
          internalType: 'uint64',
          name: 'depositNonce',
          type: 'uint64',
        },
        {
          indexed: true,
          internalType: 'enum Bridge.ProposalStatus',
          name: 'status',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'resourceID',
          type: 'bytes32',
        },
      ],
      name: 'ProposalVote',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'relayer',
          type: 'address',
        },
      ],
      name: 'RelayerAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'relayer',
          type: 'address',
        },
      ],
      name: 'RelayerRemoved',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'newThreshold',
          type: 'uint256',
        },
      ],
      name: 'RelayerThresholdChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'previousAdminRole',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'newAdminRole',
          type: 'bytes32',
        },
      ],
      name: 'RoleAdminChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleGranted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleRevoked',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'Unpaused',
      type: 'event',
    },
    {
      inputs: [],
      name: 'DEFAULT_ADMIN_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'RELAYER_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: '_chainID',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      name: '_depositCounts',
      outputs: [
        {
          internalType: 'uint64',
          name: '',
          type: 'uint64',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint64',
          name: '',
          type: 'uint64',
        },
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      name: '_depositRecords',
      outputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: '_expiry',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: '_fee',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint72',
          name: '',
          type: 'uint72',
        },
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: '_hasVotedOnProposal',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint72',
          name: '',
          type: 'uint72',
        },
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: '_proposals',
      outputs: [
        {
          internalType: 'bytes32',
          name: '_resourceID',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: '_dataHash',
          type: 'bytes32',
        },
        {
          internalType: 'enum Bridge.ProposalStatus',
          name: '_status',
          type: 'uint8',
        },
        {
          internalType: 'uint256',
          name: '_proposedBlock',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: '_relayerThreshold',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: '_resourceIDToHandlerAddress',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: '_totalProposals',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: '_totalRelayers',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleAdmin',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'index',
          type: 'uint256',
        },
      ],
      name: 'getRoleMember',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleMemberCount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'grantRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'hasRole',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'paused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'renounceRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'revokeRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'relayer',
          type: 'address',
        },
      ],
      name: 'isRelayer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'renounceAdmin',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'adminPauseTransfers',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'adminUnpauseTransfers',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'newThreshold',
          type: 'uint256',
        },
      ],
      name: 'adminChangeRelayerThreshold',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'relayerAddress',
          type: 'address',
        },
      ],
      name: 'adminAddRelayer',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'relayerAddress',
          type: 'address',
        },
      ],
      name: 'adminRemoveRelayer',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'handlerAddress',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: 'resourceID',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'tokenAddress',
          type: 'address',
        },
      ],
      name: 'adminSetResource',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'handlerAddress',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: 'resourceID',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'contractAddress',
          type: 'address',
        },
        {
          internalType: 'bytes4',
          name: 'depositFunctionSig',
          type: 'bytes4',
        },
        {
          internalType: 'bytes4',
          name: 'executeFunctionSig',
          type: 'bytes4',
        },
      ],
      name: 'adminSetGenericResource',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'handlerAddress',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'tokenAddress',
          type: 'address',
        },
      ],
      name: 'adminSetBurnable',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: 'originChainID',
          type: 'uint8',
        },
        {
          internalType: 'uint64',
          name: 'depositNonce',
          type: 'uint64',
        },
        {
          internalType: 'bytes32',
          name: 'dataHash',
          type: 'bytes32',
        },
      ],
      name: 'getProposal',
      outputs: [
        {
          components: [
            {
              internalType: 'bytes32',
              name: '_resourceID',
              type: 'bytes32',
            },
            {
              internalType: 'bytes32',
              name: '_dataHash',
              type: 'bytes32',
            },
            {
              internalType: 'address[]',
              name: '_yesVotes',
              type: 'address[]',
            },
            {
              internalType: 'address[]',
              name: '_noVotes',
              type: 'address[]',
            },
            {
              internalType: 'enum Bridge.ProposalStatus',
              name: '_status',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: '_proposedBlock',
              type: 'uint256',
            },
          ],
          internalType: 'struct Bridge.Proposal',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'newFee',
          type: 'uint256',
        },
      ],
      name: 'adminChangeFee',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'handlerAddress',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'tokenAddress',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'recipient',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amountOrTokenID',
          type: 'uint256',
        },
      ],
      name: 'adminWithdraw',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: 'destinationChainID',
          type: 'uint8',
        },
        {
          internalType: 'bytes32',
          name: 'resourceID',
          type: 'bytes32',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'deposit',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: 'chainID',
          type: 'uint8',
        },
        {
          internalType: 'uint64',
          name: 'depositNonce',
          type: 'uint64',
        },
        {
          internalType: 'bytes32',
          name: 'resourceID',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 'dataHash',
          type: 'bytes32',
        },
      ],
      name: 'voteProposal',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: 'chainID',
          type: 'uint8',
        },
        {
          internalType: 'uint64',
          name: 'depositNonce',
          type: 'uint64',
        },
        {
          internalType: 'bytes32',
          name: 'dataHash',
          type: 'bytes32',
        },
      ],
      name: 'cancelProposal',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: 'chainID',
          type: 'uint8',
        },
        {
          internalType: 'uint64',
          name: 'depositNonce',
          type: 'uint64',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
        {
          internalType: 'bytes32',
          name: 'resourceID',
          type: 'bytes32',
        },
      ],
      name: 'executeProposal',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address payable[]',
          name: 'addrs',
          type: 'address[]',
        },
        {
          internalType: 'uint256[]',
          name: 'amounts',
          type: 'uint256[]',
        },
      ],
      name: 'transferFunds',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
}
