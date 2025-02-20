/**
 * Represents the time left for a countdown.
 */
export type TimeLeft = {
  /**
   * The number of days left.
   */
  days: number;

  /**
   * The number of hours left.
   */
  hours: number;

  /**
   * The number of minutes left.
   */
  minutes: number;

  /**
   * The number of seconds left.
   */
  seconds: number;
};

/**
 * Merges two style objects. The second style object will override the first one where conflicts occur.
 *
 * @param baseStyle - The base style object.
 * @param withStyle - The style object to merge with the base style. Optional.
 * @returns The merged style object.
 */
export const mergeStyles = (baseStyle: React.CSSProperties, withStyle?: React.CSSProperties): React.CSSProperties => {
  return withStyle ? { ...baseStyle, ...withStyle } : baseStyle;
};

/**
 * Calculates the time left from the current time to a given date.
 *
 * @param from - The target date to count down to.
 * @returns The time left as a TimeLeft object, or undefined if the target date has passed.
 */
export const calculateTimeLeft = (from: Date): TimeLeft | undefined => {
  const timeDifference = from.getTime() - new Date().getTime();
  let timeLeft: TimeLeft | undefined = undefined;

  if (timeDifference > 0) {
    timeLeft = {
      days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeDifference / 1000 / 60) % 60),
      seconds: Math.floor((timeDifference / 1000) % 60)
    };
  }

  return timeLeft;
};
