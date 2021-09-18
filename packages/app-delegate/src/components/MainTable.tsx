import {useCallback, useMemo, useState} from 'react'
import {Column} from 'react-table'
import styled from 'styled-components'
import {Input, Table} from '@phala/react-components'
import {StakePool, useStakePools, useIsMobile} from '@phala/react-hooks'
import {toFixed} from '@phala/utils'
import {Row} from 'react-table'
import DelegateModal from './DelegateModal'
import ActionButton from './ActionButton'
import useFormat from '../hooks/useFormat'
import useModalVisible from '../hooks/useModalVisible'
import useGetARP from '../hooks/useGetAPR'

const Wrapper = styled.div`
  tbody {
    td:not(:last-child) {
      font-family: PT Mono, monospace;
    }
  }
`
const Filter = styled.div`
  display: flex;
  margin-bottom: 20px;

  & > *:first-child {
    width: 300px;
    flex-shrink: 1;
  }
`

const MainTable = (): JSX.Element => {
  const isMobile = useIsMobile()
  const {getAPR, getProportion} = useGetARP()
  const [filterPid, setFilterPid] = useState<string>('')
  const [showPoolWithWorkers] = useState<boolean>(false)
  const [pid, setPid] = useState<number | null>(null)
  const format = useFormat()
  const {data, isFetching, refetch} = useStakePools()
  const {modalVisible, open, close} = useModalVisible()
  const activeStakePool = useMemo<StakePool | null>(
    () =>
      (data && typeof pid === 'number' && data.find((v) => v.pid === pid)) ||
      null,
    [data, pid]
  )

  const columns = useMemo<Column<StakePool>[]>(() => {
    const columns: (Column<StakePool> | boolean)[] = [
      {
        Header: 'pid',
        accessor: 'pid',
      },
      {
        Header: 'APR',
        accessor: (stakePool) => {
          const APR = getAPR(stakePool)
          return APR ? `${toFixed(APR.mul(100), 2)}%` : '-'
        },
      },
      {
        Header: 'Cap Gap',
        accessor: (stakePool) =>
          stakePool.cap === null
            ? '∞'
            : format(stakePool.cap.sub(stakePool.totalStake)),
      },
      // !isMobile && {
      //   Header: 'Reward Proportion',
      //   accessor: (stakePool) => {
      //     const proportion = getProportion(stakePool)
      //     if (proportion) {
      //       return `${toFixed(proportion.mul(100), 2)}%`
      //     }
      //     return '-'
      //   },
      // },
      !isMobile && {
        Header: 'Commission',
        accessor: (stakePool) =>
          `${toFixed(stakePool.payoutCommission.div(10 ** 4), 2)}%`,
      },
      !isMobile && {
        Header: 'Delegated',
        accessor: (stakePool) => format(stakePool.totalStake),
      },
      !isMobile && {
        Header: 'Free Delegation',
        accessor: (stakePool) => format(stakePool.freeStake),
      },
      !isMobile && {
        Header: 'Releasing Stake',
        accessor: (stakePool) => format(stakePool.releasingStake),
      },
      !isMobile && {
        Header: 'Worker',
        accessor: (stakePool) => stakePool.workers.length,
      },
      {
        Header: 'Actions',
        disableSortBy: true,
        accessor: (stakePool) => (
          <>
            <ActionButton
              size="small"
              onClick={() => {
                setPid(stakePool.pid)
                open('delegate')
              }}
            >
              Delegate
            </ActionButton>
          </>
        ),
      },
    ]
    return columns.filter(Boolean) as Column<StakePool>[]
  }, [format, open, getAPR, getProportion, isMobile])

  return (
    <Wrapper>
      <Filter>
        <Input onChange={setFilterPid} placeholder="Search Pid"></Input>
        {/* <Checkbox
          checked={showPoolWithWorkers}
          onChange={setShowPoolWithWorkers}
        >
          Pool with workers
        </Checkbox> */}
      </Filter>

      <Table
        autoResetSortBy={false}
        autoResetFilters={false}
        autoResetGlobalFilter={false}
        initialState={{pageSize: 20}}
        data={data || []}
        autoResetPage={false}
        isLoading={isFetching}
        columns={columns}
        filters={[{id: 'pid', value: filterPid}]}
        globalFilterValue={showPoolWithWorkers}
        globalFilter={useCallback(
          (
            rows: Row<StakePool>[],
            columnIds: string[],
            globalFilterValue: boolean
          ) => {
            return globalFilterValue
              ? rows.filter((row) => row.original.workers.length > 0)
              : rows
          },
          []
        )}
      ></Table>

      {modalVisible.delegate && activeStakePool && (
        <DelegateModal
          stakePool={activeStakePool}
          onClose={() => {
            close('delegate')
            refetch()
          }}
        ></DelegateModal>
      )}
    </Wrapper>
  )
}

export default MainTable
