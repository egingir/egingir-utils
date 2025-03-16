"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHoursMinutesFromDate = getHoursMinutesFromDate;
function getHoursMinutesFromDate(date) {
  if (typeof date === "string") date = new Date(date);
  return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
}