export function rowCountTableBody (tableBody, token) {
  const count = tableBody.querySelectorAll(`${token}`).length
  return count + 1
}
