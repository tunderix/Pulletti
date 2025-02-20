import React, { useState, useEffect } from 'react';
import CountdownText from "~/CountdownTimer/CountdownText";
import { calculateTimeLeft, TimeLeft } from "~/CountdownTimer/Common";

/**
 * Props for the CountdownTimer component.
 */
type CountdownTimerProps = {
  /**
   * The target date to count down to.
   */
  date: Date;

  /**
   * The size of the text.
   */
  textSize?: string;

  /**
   * Custom styles for the text.
   */
  textStyle: React.CSSProperties;

  /**
   * Whether to show the date.
   */
  showDate?: boolean;

  /**
   * Whether to capitalize the text.
   */
  capitalize?: boolean;

  /**
   * The horizontal margin to apply.
   */
  horizontalMargin?: string;
};

/**
 * A component that displays a countdown timer with custom styles.
 *
 * @param {Date} date - The target date to count down to.
 * @param {string} [textSize] - The size of the text.
 * @param {React.CSSProperties} textStyle - Custom styles for the text.
 * @param {boolean} [showDate] - Whether to show the date.
 * @param {boolean} [capitalize] - Whether to capitalize the text.
 * @param {string} [horizontalMargin] - The horizontal margin to apply.
 * @returns A countdown timer showing countdown for specified date. When date is reached, will show "Countdown complete".
 */
const CountdownTimer: React.FC<CountdownTimerProps> = ({ date, textSize, textStyle, showDate, capitalize, horizontalMargin } : CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | undefined>(calculateTimeLeft(date));

  const defaultTextSize = '20px';
  const defaultHorizontalMargin = '10px';

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);

  const tSize = textSize ? textSize : defaultTextSize;
  const hMargin = horizontalMargin ? horizontalMargin : defaultHorizontalMargin;
  const caps = capitalize ? 'uppercase' : 'none';
  const lineHeight = '1.2';

  const timerStyle: React.CSSProperties = {
    fontSize: tSize,
    textTransform: caps,
    lineHeight: lineHeight,
    ...textStyle
  };

  const timeLeftNotEmpty = timeLeft !== undefined && Object.keys(timeLeft).length > 0;

  return (
    <div style={timerStyle}>
      {timeLeftNotEmpty ? (
        <>
          <div style={{ display: 'flex' }}>
            <CountdownText
              number={timeLeft.days}
              text={'days'}
              horizontalMargin={hMargin}
            />
            <CountdownText
              number={timeLeft.hours}
              text={'hours'}
              horizontalMargin={hMargin}
            />
            <CountdownText
              number={timeLeft.minutes}
              text={'minutes'}
              horizontalMargin={hMargin}
            />
            <CountdownText
              number={timeLeft.seconds}
              text={'seconds'}
              horizontalMargin={hMargin}
            />
          </div>
        </>
      ) : (
        <span>Countdown complete!</span>
      )}
    </div>
  );
};

export default CountdownTimer;
