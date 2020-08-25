export function toThousand(val) {
  return String(+val || 0).replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}
