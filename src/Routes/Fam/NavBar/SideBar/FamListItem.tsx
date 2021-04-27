import { NavGroupFragment } from 'generated/graphql';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { breakpoints } from 'utils/style';
import { CLOUDINARY_RES_URL } from 'clients/cloudinary';

type PathParamsType = {
  famAlphaName: string;
};

type Props = RouteComponentProps<PathParamsType> & {
  fam: NavGroupFragment;
  pending?: boolean;
};

type StyledDivPropType = { isSelected: boolean };

const StyledFamImage = styled.img<{ pending?: boolean }>(props => ({
  height: 50,
  width: 50,
  cursor: 'pointer',
  borderRadius: 10,
  opacity: props.pending ? 0.5 : 1,
  [breakpoints.xs.css]: {
    height: 40,
    width: 40,
  },
}));

const StyledSelectedIndicator = styled.div<StyledDivPropType>(({ isSelected }) => ({
  width: 6,
  height: 50,
  marginRight: 10,
  backgroundImage: 'linear-gradient(90deg, #3BB6B5, #40D5A0)',
  borderTopRightRadius: 40,
  borderBottomRightRadius: 40,
  opacity: isSelected ? 1 : 0,
  [breakpoints.xs.css]: {
    height: 40,
  },
}));

const StyledFamListItem = styled.li<StyledDivPropType>(({ isSelected }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '16px 0',
  [`:hover ${StyledSelectedIndicator}`]: {
    opacity: isSelected ? 1 : 0.5,
  },
}));

const FamListItem: React.FunctionComponent<Props> = ({
  match, history, fam, pending,
}: Props) => {
  const isSelected = fam.alphaName === match.params.famAlphaName;
  let optimizedPicture = fam.imageUrl || '';
  // TODO(selmank): find a better way to optimize cloduinary images
  if (optimizedPicture.indexOf(CLOUDINARY_RES_URL) === 0) {
    optimizedPicture = optimizedPicture.replace('/upload/', '/upload/c_thumb,f_auto,h_100,q_60,w_100/');
  }
  const navigate = () => {
    history.push(`/${fam.alphaName}/circle/${fam.channels[0].id}`);
  };

  return (
    <StyledFamListItem isSelected={isSelected}>
      <StyledSelectedIndicator isSelected={isSelected} />
      <StyledFamImage src={optimizedPicture} alt="fam_icon" onClick={navigate} pending={pending} />
    </StyledFamListItem>
  );
};

export default withRouter(FamListItem);
