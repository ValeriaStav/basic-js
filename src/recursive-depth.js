const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
    // Проверяем, является ли элемент массивом
    if (!Array.isArray(arr)) {
      return 0;
    }

    // Если элемент является массивом, вычисляем его глубину рекурсивно
    let maxDepth = 1; // Начальная глубина для текущего массива
    for (let i = 0; i < arr.length; i++) {
      const depth = this.calculateDepth(arr[i]) + 1;
      maxDepth = Math.max(maxDepth, depth);
    }
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
