"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.padTo2Digits = padTo2Digits;
exports.toUpperCase = toUpperCase;
function toUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Pads a number to 2 digits.
 * @param {string} num- The input string.
 * @returns {string} The padded string.
 */
function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}