import React, { useContext } from 'react';
import styled from 'styled-components';
import { File, MessageFragment } from 'generated/graphql';
import ProfileImage from 'components/user/ProfileImage';
import { ModalContext, CustomModalTypes } from 'contexts/modal';
import { useParams } from 'react-router';
import { isUserOnline, openMagicLink } from 'utils/helpers';
import ImageOrVideo from 'components/media/ImageOrVideo';
import { Transformation } from 'cloudinary-react';

type Props = {
  isMe: boolean;
  photoId: string | undefined;
  message: MessageFragment
};

const StyledMessage = styled.div<{isMe: boolean}>((props) => ({
  display: 'flex',
  flexDirection: props.isMe ? 'row-reverse' : 'row',
  marginTop: 12,
}));

const StyledBubble = styled.div<{isMe: boolean, hasImage?: boolean}>(props => ({
  display: 'flex',
  maxWidth: '80%',
  fontFamily: 'Avenir',
  fontSize: 14,
  wordBreak: 'break-word',
  lineHeight: '18px',
  padding: props.hasImage ? 0 : '8px 16px',
  backgroundColor: '#FFFFFF',
  borderRadius: 24,
  borderTopLeftRadius: props.isMe ? 24 : 0,
  borderTopRightRadius: props.isMe ? 0 : 24,
  overflow: 'hidden',
  marginBottom: props.hasImage ? 12 : 0,
}));

const StyledOnlineIndicator = styled.div({
  position: 'absolute',
  right: 0,
  bottom: 0,
  width: 8,
  height: 8,
  backgroundColor: '#40D5A0',
  borderRadius: '100%',
});

const StyledProfilePicture = styled.div<{isMe: boolean}>(props => ({
  flex: '0 0 32px',
  position: 'relative',
  width: 32,
  height: 32,
  borderRadius: '100%',
  backgroundColor: '#cccccc',
  marginRight: props.isMe ? 0 : 10,
  marginLeft: props.isMe ? 10 : 0,
}));

const StyledMessageContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const StyledAuthor = styled.div<{isMe: boolean}>(props => ({
  fontFamily: 'Avenir',
  fontSize: 12,
  lineHeight: '14px',
  color: '#A5A5A5',
  marginBottom: 6,
  textAlign: props.isMe ? 'right' : 'left',
}));

const StyledImg = styled.img({
  objectFit: 'contain',
  width: '100%',
  maxWidth: 300,
  maxHeight: 600,
});

const StyledImgLink = styled.a({
  display: 'flex',
});

const StyledImageOrVideo = styled(ImageOrVideo)({
  objectFit: 'contain',
  width: '100%',
  maxWidth: 300,
  maxHeight: 600,
});

const FamContentChatBubble: React.FunctionComponent<Props> = ({ photoId, message, isMe }: Props) => {
  const { showModal } = useContext(ModalContext);
  const routeParams = useParams<{ famAlphaName: string; }>();

  const openDownloadAppModal = () => showModal({
    type: CustomModalTypes.DOWNLOAD_APP,
    buttonAction: () => {
      openMagicLink(routeParams?.famAlphaName);
    },
  });

  return (
    <StyledMessage key={message.id} isMe={isMe}>
      <StyledProfilePicture isMe={isMe} onClick={openDownloadAppModal}>
        {isUserOnline(message.member?.user?.activeAt) && <StyledOnlineIndicator />}
        <ProfileImage size={32} path={photoId} />
      </StyledProfilePicture>
      <StyledMessageContent>
        <StyledAuthor isMe={isMe}>
          {message.member?.user?.firstName || ''}
          {' '}
          {message.member?.user?.lastName || ''}
        </StyledAuthor>
        {Boolean(message.files?.length) && (
          <StyledBubble isMe={isMe} hasImage>
            {(message.files || []).map(f => (f.file ? (
              f.file.mimeType === 'image/giphy'
                ? <StyledImg src={f.file?.path} key={f.file?.id} />
                : (
                  <StyledImgLink
                    href={`https://res.cloudinary.com/vibely2/image/upload/${f.file?.path}`}
                    target="_blank"
                    key={f.file?.id}
                  >
                    <StyledImageOrVideo source={f.file as File}>
                      <Transformation
                        quality="80"
                        width="600"
                        crop="fit"
                      />
                    </StyledImageOrVideo>
                  </StyledImgLink>
                )
            ) : null))}
          </StyledBubble>
        )}
        {Boolean(message.message?.length) && (
          <StyledBubble isMe={isMe}>
            {message.message}
          </StyledBubble>
        )}
      </StyledMessageContent>
    </StyledMessage>
  );
};

export default FamContentChatBubble;
