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

const columns: Column<ChannelData>[] = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Default',
    accessor: 'default',
  },
  {
    Header: 'Private',
    accessor: 'private',
  },
  {
    Header: 'Owner',
    accessor: 'ownerName',
  },
  {
    Header: 'Member #',
    accessor: 'memberCount',
  },
  {
    Header: 'Post #',
    accessor: 'postCount',
  },
];

type ChannelData = {
  id: string;
  name: string;
  private: string;
  default: string;
  memberCount: number;
  postCount: number;
  ownerName: string;
}

type Props = {
  data: Array<ChannelData>;
  deleteChannels: (ids: Array<string>) => Promise<void>;
  onEditClick: (id: string) => void
}

const CirclesTable: React.FunctionComponent<Props> = ({
  data, deleteChannels, onEditClick,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<ChannelData>(
    {
      columns,
      data,
    },
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(hookColumns => [
        {
          id: 'selection',
          Header: function TableHeader({ getToggleAllRowsSelectedProps, selectedFlatRows, data: tableData }: any) {
            const checkboxProps = getToggleAllRowsSelectedProps();
            const showDeleteIcon = checkboxProps.checked || checkboxProps.indeterminate;
            const onDeleteAllClick = async () => {
              const selectedIds = selectedFlatRows.map((s: any) => s.original.id);
              if (tableData.length === 1 || tableData.length === selectedIds.length) {
                window.alert('You should have at least one circle.');
                return;
              }
              if (selectedIds.length) {
                const response = window.confirm('Are you sure you want to delete selected circles?');
                if (response === true) {
                  await deleteChannels(
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
        <col style={{ width: '32%' }} />
        <col style={{ width: '13%' }} />
        <col style={{ width: '13%' }} />
        <col style={{ width: '24%' }} />
        <col style={{ width: '10%' }} />
        <col style={{ width: '9%' }} />
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
            if (data.length === 1) {
              window.alert('You should have at least one circle.');
              return;
            }
            const response = window.confirm('Are you sure you want to delete this circle?');
            if (response === true) {
              await deleteChannels([row.original.id]);
            }
          };
          const onEditIconClick = () => {
            onEditClick(row.original.id);
          };
          return (
            <StyledRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <StyledCell
                    style={{ cursor: cell.value !== undefined ? 'pointer' : 'default' }}
                    onClick={cell.value !== undefined ? onEditIconClick : () => {}}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </StyledCell>
                );
              })}
              <StyledCell style={{ cursor: 'default', display: 'flex', justifyContent: 'flex-end' }}>
                <StyledIconControl onClick={onEditIconClick} src={svg.edit} />
                <StyledIconControl onClick={onDeleteIconClick} src={svg.trash} />
              </StyledCell>
            </StyledRow>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default CirclesTable;
