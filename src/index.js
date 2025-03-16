export function toUpperCase(str) {
  return str.toUpperCase();
}

export function formatDate(date) {
  return new Date(date).toISOString().split("T")[0];
}
