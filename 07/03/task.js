/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
const throttle = (time, callback) => {
  let prevTime = 0;
  const callbackNew = (...args) => {
    if (Date.now() > time + prevTime) {
      callback(...args);
      prevTime = Date.now();
    } else {
      setTimeout(() => {
        callbackNew(...args);
      }, prevTime + time - Date.now());
    }
  };

  return callbackNew;
};

module.exports = { throttle };
