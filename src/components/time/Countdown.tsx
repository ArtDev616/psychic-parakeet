import React from 'react';
import styled from 'styled-components';
import { getCountdownTimeDifference } from 'utils/helpers';
import { breakpoints, fontStyles } from 'utils/style';

type Props = {
  endDate: string;
  className?: string;
  color?: string;
  textColor?: string;
};

const StyledTimerRow = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
});

const StyledTimerDisplay = styled.div<{
  $color: string;
  $middle: boolean;
}>(props => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  padding: 2,
  borderRadius: 8,
  backgroundColor: props.$color,
  margin: props.$middle ? '0 12px' : 0,
}));

const StyledDigitsRow = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignSelf: 'stretch',
});

const StyledDigit = styled.h5({
  ...fontStyles.h5,
  borderRadius: 4,
  fontWeight: 600,
  width: '100%',
  padding: '4px 8px',
  textAlign: 'center',
  backgroundColor: '#FFFFFF',
  margin: 2,
  [breakpoints.xs.css]: {
    padding: '2px 2px',
  },
});

const StyledInterval = styled.small<{ $textColor: string }>(props => ({
  ...fontStyles.small,
  ...(props.$textColor && { color: props.$textColor }),
  margin: '2px 0',
  '::first-letter': {
    textTransform: 'capitalize',
  },
}));

const Countdown: React.FunctionComponent<Props> = ({
  color = '#F3F3F7',
  textColor = '#8F95B1',
  endDate,
  className,
}) => {
  const [timeLeft, setTimeLeft] = React.useState(getCountdownTimeDifference(endDate));

  // Update time left as endDate gets updated
  React.useEffect(() => {
    setTimeLeft(getCountdownTimeDifference(endDate));
  }, [endDate]);

  // Set a timer to update the remaining time on mount
  React.useEffect(() => {
    const timer = endDate
      ? setInterval(() => {
        setTimeLeft(getCountdownTimeDifference(endDate));
      }, 60000) : null;

    return timer ? () => clearInterval(timer) : () => {};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const digitsDisplay = Object.keys(timeLeft).map(interval => {
    const digits = timeLeft[interval] > 99 ? 99 : timeLeft[interval];
    return (
      <StyledTimerDisplay $color={color} $middle={interval === 'hours'} key={interval}>
        <StyledDigitsRow>
          <StyledDigit>{digits.toString().length > 1 ? digits.toString()[0] : '0'}</StyledDigit>
          <StyledDigit>{digits.toString().length > 1 ? digits.toString()[1] : digits.toString()[0]}</StyledDigit>
        </StyledDigitsRow>
        <StyledInterval $textColor={textColor}>{interval}</StyledInterval>
      </StyledTimerDisplay>
    );
  });

  return <StyledTimerRow className={className}>{digitsDisplay}</StyledTimerRow>;
};

export default Countdown;
