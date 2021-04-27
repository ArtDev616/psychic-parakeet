/* eslint-disable no-alert */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import svg from 'assets/svg';
import React from 'react';
import { useTable, useRowSelect, Column } from 'react-table';
import {
  StyledDeleteIcon, StyledTable, StyledHeaderCell, StyledCell, StyledRow, StyledIconControl,
} from 'Routes/Fam/Settings/Announcements/Table';

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }: {indeterminate: boolean}, ref) => {
    const defaultRef = React.useRef<HTMLInputElement>();
    const resolvedRef = ref as React.MutableRefObject<HTMLInputElement> || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <input type="checkbox" ref={resolvedRef} {...rest} />
    );
  },
);

const columns: Column<MemberData>[] = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Roles',
    accessor: 'roles',
  },
  {
    Header: 'Member since',
    accessor: 'memberSince',
  },
  {
    Header: 'Weekly Points',
    accessor: 'weeklyPoints',
  },
  {
    Header: 'Monthly Points',
    accessor: 'monthlyPoints',
  },
];

export type MemberData = {
  id: string;
  name: string;
  roles: string;
  memberSince: string;
  weeklyPoints: string;
  monthlyPoints: string;
}

type Props = {
  data: Array<MemberData>;
  deleteMembers: (ids: Array<string>) => Promise<void>;
}

const MembersTable: React.FunctionComponent<Props> = ({
  data, deleteMembers,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<MemberData>(
    {
      columns,
      data,
    },
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(hookColumns => [
        {
          id: 'selection',
          Header: function TableHeader({ getToggleAllRowsSelectedProps, selectedFlatRows }: any) {
            const checkboxProps = getToggleAllRowsSelectedProps();
            const showDeleteIcon = checkboxProps.checked || checkboxProps.indeterminate;
            const onDeleteAllClick = async () => {
              const selectedIds = selectedFlatRows.map((s: any) => s.original.id);
              if (selectedIds.length) {
                const response = window.confirm('Are you sure you want to delete selected members?');
                if (response === true) {
                  await deleteMembers(
                    selectedFlatRows.map((s: any) => s.original.id),
                  );
                }
              }
            };
            return (
              <div>
                <IndeterminateCheckbox {...checkboxProps} />
                <StyledDeleteIcon
                  onClick={onDeleteAllClick}
                  show={showDeleteIcon}
                  src={svg.trash}
                />
              </div>
            );
          },
          Cell: function TableCell({ row }: any) {
            return (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            );
          },
        },
        ...hookColumns,
      ]);
    },
  );

  return (
    <StyledTable {...getTableProps()}>
      <colgroup>
        <col style={{ width: '8%' }} />
        <col style={{ width: '24%' }} />
        <col style={{ width: '22%' }} />
        <col style={{ width: '20%' }} />
        <col style={{ width: '13%' }} />
        <col style={{ width: '12%' }} />
        <col style={{ width: '1%' }} />
      </colgroup>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => {
              return (
                <StyledHeaderCell
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </StyledHeaderCell>
              );
            })}
            <StyledHeaderCell />
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          const onDeleteIconClick = async () => {
            const response = window.confirm('Are you sure you want to delete this member?');
            if (response === true) {
              await deleteMembers([row.original.id]);
            }
          };
          return (
            <StyledRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <StyledCell
                    style={{ cursor: 'auto' }}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </StyledCell>
                );
              })}
              <StyledCell style={{ cursor: 'default', display: 'flex', justifyContent: 'flex-end' }}>
                <StyledIconControl onClick={onDeleteIconClick} src={svg.trash} />
              </StyledCell>
            </StyledRow>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default MembersTable;
