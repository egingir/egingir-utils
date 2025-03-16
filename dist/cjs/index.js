"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDate = formatDate;
exports.toUpperCase = toUpperCase;
function toUpperCase(str) {
  return str.toUpperCase();
}
function formatDate(date) {
  return new Date(date).toISOString().split("T")[0];
}