/**
 * Pads a number to 2 digits.
 * @param {string} date - The input string.
 * @returns {string} The padded string.
 */
export function getHoursMinutesFromDate(date) {
  if (typeof date === "string") date = new Date(date);

  return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
}

export const timeUtils = { getHoursMinutesFromDate };
