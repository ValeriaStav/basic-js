const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  chain: [], // Храним цепочку в виде массива

  // Получаем длину цепочки
  getLength() {
    return this.chain.length;
  },

  // Добавляем ссылку в цепочку
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this; // Возвращаем сам объект, чтобы можно было цепочечно вызывать методы
  },

  // Удаляем ссылку на указанной позиции (позиции начинаются с 1)
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position <= 0 ||
      position > this.chain.length
    ) {
      this.chain = []; // Если позиция некорректная, очищаем цепочку
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  // Переворачиваем цепочку
  reverseChain() {
    this.chain.reverse();
    return this;
  },

  // Завершаем цепочку, возвращаем её как строку
  finishChain() {
    const result = this.chain.join("~~");
    this.chain = []; // Очищаем цепочку для последующих вызовов
    return result;
  }
};

module.exports = {
  chainMaker
};
