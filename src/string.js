/**
 * Pads a number to 2 digits.
 * @param {string} number - The input string.
 * @returns {string} The padded string.
 */
export function padTo2Digits(number) {
  return number.toString().padStart(2, "0");
}

export const stringUtils = { padTo2Digits };
