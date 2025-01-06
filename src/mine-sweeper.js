const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  // создаем пустое поле с таким же размером, как и исходное
  const result = matrix.map((row) => row.slice());

  // функция для подсчета количества мин в соседних клетках
  function countMines(x, y) {
    let mines = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const nx = x + i;
        const ny = y + j;
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < matrix.length &&
          ny < matrix[0].length &&
          matrix[nx][ny]
        ) {
          mines++;
        }
      }
    }
    return mines;
  }

  // проходим по всем клеткам поля
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // если клетка содержит мину, оставляем ее как есть
      if (matrix[i][j]) {
        result[i][j] = 1;
      } else {
        // если клетка пустая, ставим количество мин вокруг нее
        result[i][j] = countMines(i, j);
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
