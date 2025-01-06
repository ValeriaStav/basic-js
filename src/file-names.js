const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const fileCount = {}; // объект для хранения количества каждого имени файла
  return names.map((name) => {
    if (fileCount[name]) {
      const newName = `${name}(${fileCount[name]})`; // создаем новое имя с суффиксом
      fileCount[name] += 1; // увеличиваем счетчик для этого имени
      fileCount[newName] = 1; // создаем запись для нового имени с суффиксом
      return newName;
    }
    fileCount[name] = 1; // если файл еще не встречался, записываем его
    return name;
  });
}

module.exports = {
  renameFiles
};
