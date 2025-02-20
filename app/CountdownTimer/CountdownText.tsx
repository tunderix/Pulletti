import React from 'react';
import { mergeStyles } from "~/CountdownTimer/Common";

/**
 * Props for the CountdownText component.
 */
type CountdownTextProps = {
  /**
   * The number to display in the countdown.
   */
  number: number;

  /**
   * The text to display next to the number.
   */
  text: string;

  /**
   * The horizontal margin to apply to the countdown text.
   */
  horizontalMargin?: string;

  /**
   * Custom styles for the number text.
   */
  numberTextStyle?: React.CSSProperties;

  /**
   * Custom styles for the text.
   */
  textStyle?: React.CSSProperties;
};

/**
 * Generates the styles for the countdown text container.
 *
 * @param {number} countdown - The countdown number (not used in this function).
 * @param {string} margin - The horizontal margin to apply.
 * @returns {React.CSSProperties} The styles for the countdown text container.
 */
const countdownTextStyles = (countdown: number, margin: string): React.CSSProperties => {
  return {
    fontSize: '20px',
    width: '100px',
    textAlign: 'center',
    marginLeft: margin,
    marginRight: margin,
  };
};

/**
 * A component that displays a countdown number and text with custom styles.
 *
 * @param {number} number - The number to display in the countdown.
 * @param {string} text - The text to display next to the number.
 * @param {string} [horizontalMargin='10px'] - The horizontal margin to apply to the countdown text.
 * @param {React.CSSProperties} [numberTextStyle] - Custom styles for the number text.
 * @param {React.CSSProperties} [textStyle] - Custom styles for the text.
 * @returns CountdownText component with a number indicator and a text under the number.
 */
const CountdownText: React.FC<CountdownTextProps> = ({ number, text, horizontalMargin = '10px', numberTextStyle, textStyle } : CountdownTextProps) => {
  const defaultNumberSize = '4rem';
  const defaultTextSize = '18px';
  const defaultMargin = '10px';

  const hMargin = horizontalMargin !== undefined ? horizontalMargin : defaultMargin;
  const nStyle = mergeStyles(
    { fontSize: defaultNumberSize, color: number <= 0 ? 'gray' : numberTextStyle?.color },
    numberTextStyle
  );
  const tStyle = mergeStyles({ fontSize: defaultTextSize }, textStyle);

  return (
    <div style={countdownTextStyles(number, hMargin)}>
      <div style={nStyle}>
        {number}
      </div>
      <div style={tStyle}>
        {text}
      </div>
    </div>
  );
};

export default CountdownText;
