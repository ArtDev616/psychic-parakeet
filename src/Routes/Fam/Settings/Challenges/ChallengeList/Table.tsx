/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useTable, useRowSelect, Column } from 'react-table';
import { Image, Transformation } from 'cloudinary-react';
import styled from 'styled-components';

import { StyledTable, StyledCell, StyledRow } from 'Routes/Fam/Settings/Announcements/Table';
import ChallengesTableDownloadButton from 'Routes/Fam/Settings/Challenges/ChallengeList/DownloadButton';

const CHALLENGE_IMAGE_WIDTH = 55;
const CHALLENGE_IMAGE_HEIGHT = 30;

const StyledCellWithBorderTop = styled(StyledCell)({
  borderBottom: 'none',
  borderTop: '1px solid #F0F0F0',
  padding: '12px 0',
  ':first-child': {
    paddingLeft: 16,
  },
});

const StyledCloudinaryImage = styled(Image)({
  width: CHALLENGE_IMAGE_WIDTH,
  height: CHALLENGE_IMAGE_HEIGHT,
  objectFit: 'cover',
  borderRadius: 4,
  marginRight: 16,
});

const StyledIndicator = styled.span<{$active: boolean}>(props => ({
  display: 'inline-block',
  borderRadius: '100%',
  width: 8,
  height: 8,
  backgroundColor: props.$active ? '#40D5A0' : '#FFC47F',
  marginRight: 12,
}));

const columns: Column<ChallengeData>[] = [
  {
    Header: 'Image',
    accessor: 'imagePath',
  },
  {
    Header: 'Title',
    accessor: 'title',
  },
  {
    Header: 'Prize',
    accessor: 'prize',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Entry #',
    accessor: 'entryCount',
  },
];

export type ChallengeData = {
  id: string;
  challengeSeriesId?: string;
  imagePath: string;
  title: string;
  prize: string;
  status: 'Active' | 'Expired';
  entryCount: string;
}

type Props = {
  data: Array<ChallengeData>;
  onEditClick: (challengeId: string, challengeSeriesId?: string) => void;
}

const ChallengesTable: React.FunctionComponent<Props> = ({ data, onEditClick }) => {
  const {
    getTableProps,
    getTableBodyProps,
    rows,
    prepareRow,
  } = useTable<ChallengeData>(
    {
      columns,
      data,
    },
    useRowSelect,
  );

  return (
    <StyledTable {...getTableProps()}>
      <colgroup>
        <col style={{ width: '1%' }} />
        <col style={{ width: '34%' }} />
        <col style={{ width: '35%' }} />
        <col style={{ width: '15%' }} />
        <col style={{ width: '14%' }} />
        <col style={{ width: '1%' }} />
      </colgroup>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <StyledRow
              {...row.getRowProps()}
            >
              {row.cells.map(cell => {
                let content = cell.render('Cell');
                if (cell.column.id === 'status') {
                  content = (
                    <>
                      <StyledIndicator $active={cell.value === 'Active'} />
                      {cell.value}
                    </>
                  );
                } else if (cell.column.id === 'imagePath') {
                  content = cell.value ? (
                    <StyledCloudinaryImage alt="profile_image" publicId={cell.value}>
                      <Transformation
                        gravity="faces"
                        quality="60"
                        width={CHALLENGE_IMAGE_WIDTH * 2}
                        height={CHALLENGE_IMAGE_HEIGHT * 2}
                        crop="fill"
                      />
                    </StyledCloudinaryImage>
                  ) : '';
                }

                return (
                  <StyledCellWithBorderTop
                    onClick={() => onEditClick(row.original.id, row.original.challengeSeriesId)}
                    {...cell.getCellProps()}
                  >
                    {content}
                  </StyledCellWithBorderTop>
                );
              })}

              <StyledCellWithBorderTop style={{ cursor: 'default' }}>
                <ChallengesTableDownloadButton challengeId={row.original.id} />
              </StyledCellWithBorderTop>
            </StyledRow>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default ChallengesTable;
