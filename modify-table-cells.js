function getData() {
  const row = prompt("Enter the row index")
  const column = prompt("Enter the colum index")
  const text = prompt("Enter the new name")
  modifyTableCell(parseInt(row), parseInt(column), text)
}
function modifyTableCell(rowIndex, columnIndex, newText) {
  let tableId
  if (rowIndex === 0) {
    tableId = [0, 1, 2]
  } else if (rowIndex === 1) {
    tableId = [3, 4, 5]
  } else if (rowIndex === 2) {
    tableId = [6, 7, 8]
  }
  let previousTextContent = document.getElementById(
    tableId[columnIndex]
  ).innerHTML
  document.getElementById(tableId[columnIndex]).innerHTML = newText
  console.log(previousTextContent)
  return previousTextContent
}
