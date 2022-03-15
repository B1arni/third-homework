'use strict';

Array.prototype.myFilter = function (callback) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i, this);
    if (result) {
      newArr = [...newArr, this[i]];
    }
  }

  return newArr;
};

Array.prototype.myMap = function (callback) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr = [...newArr, callback(this[i], i, this)];
  }

  return newArr;
};

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.myReduce = function (callback, initValue) {
  let accumulator = initValue;

  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }

  return accumulator;
};
