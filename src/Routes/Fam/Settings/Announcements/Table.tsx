/* eslint-disable no-alert */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import svg from 'assets/svg';
import { SettingsAnnouncementFragment } from 'generated/graphql';
import React from 'react';
import { useTable, useRowSelect, Column } from 'react-table';
import styled from 'styled-components';
import { fontStyles } from 'utils/style';

export const StyledTable = styled.table({
  borderSpacing: 0,
  width: '100%',
  textAlign: 'left',
});

export const StyledHeaderCell = styled.th({
  ...fontStyles.small,
  verticalAlign: 'middle',
  color: '#0C0C0C',
  fontWeight: 800,
  borderBottom: '1px solid #F0F0F0',
  padding: '12px 0',
});

export const StyledRow = styled.tr({
  ':hover': {
    backgroundColor: '#fbfbfb',
  },
});

export const StyledCell = styled.td({
  ...fontStyles.body,
  cursor: 'pointer',
  verticalAlign: 'middle',
  color: '#0C0C0C',
  borderBottom: '1px solid #F0F0F0',
  padding: '12px 0',
});

export const StyledDeleteIcon = styled.img<{show: boolean}>(props => ({
  opacity: props.show ? 1 : 0.2,
  cursor: props.show ? 'pointer' : 'default',
  color: '#333333',
  padding: '2px 8px',
  width: 12,
  height: 12,
}));

export const StyledIconControl = styled.img`
  cursor: pointer;
  padding: 2px 4px 2px 0;
  margin: 0 6px;
  width: 16px;
  height: 16px;
  opacity: 0;

  ${StyledRow}:hover & {
    opacity: 1;
  }
`;

const IndeterminateCheckbox = React.forwardRef(({ indeterminate, ...rest }: { indeterminate: boolean }, ref) => {
  const defaultRef = React.useRef<HTMLInputElement>();
  const resolvedRef = (ref as React.MutableRefObject<HTMLInputElement>) || defaultRef;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return <input type="checkbox" ref={resolvedRef} {...rest} />;
});

const columns: Column<SettingsAnnouncementFragment>[] = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Subtitle',
    accessor: 'subtitle',
  },
  {
    Header: 'Published at',
    accessor: 'createdAt',
  },
];

type Props = {
  data: Array<SettingsAnnouncementFragment>
  deleteAnnouncements: (ids: Array<string>, groupId: string) => Promise<void>
  onEditClick: (id: string) => void
}

const AnnouncementsTable: React.FunctionComponent<Props> = ({ data, deleteAnnouncements, onEditClick }) => {
  const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
  } = useTable<SettingsAnnouncementFragment>(
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
              const response = window.confirm('Are you sure you want to delete selected announcements?');
              if (response === true) {
                await deleteAnnouncements(
                  selectedFlatRows.map((s: any) => s.original.id), selectedFlatRows[0].original.groupId,
                );
              }
            };
            return (
              <>
                <IndeterminateCheckbox {...checkboxProps} />
                <StyledDeleteIcon onClick={onDeleteAllClick} show={showDeleteIcon} src={svg.trash} />
              </>
            );
          },
          Cell: function TableCell({ row }: any) {
            return (
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
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
        <col style={{ width: '42%' }} />
        <col style={{ width: '39%' }} />
        <col style={{ width: '10%' }} />
        <col style={{ width: '1%' }} />
      </colgroup>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => {
              return <StyledHeaderCell {...column.getHeaderProps()}>{column.render('Header')}</StyledHeaderCell>;
            })}
            <StyledHeaderCell />
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          const onDeleteIconClick = async () => {
            const response = window.confirm('Are you sure you want to delete this announcement?');
            if (response === true) {
              await deleteAnnouncements([row.original.id], row.original.groupId);
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
                    style={{ cursor: cell.value ? 'pointer' : 'default' }}
                    onClick={cell.value && onEditIconClick}
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

export default AnnouncementsTable;
