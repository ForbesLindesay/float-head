'use strict';

exports.isString = function (val) {
  return typeof val === 'string';
};

exports.isFunction = function (val) {
  return typeof val === 'function';
};

exports.each = function (obj, fn) {
  if (typeof obj.length === 'number') {
    for (var i = 0; i < obj.length; i++) {
      fn(obj[i], i);
    }
  } else {
    for (var key in obj)
      if (key in obj)
        fn(obj[key], key);
  }
};

exports.keys = function (obj) {
  return Object.keys(obj);
};

exports.reduce = function (list, fn, initial) {
  if (arguments.length > 2)
    return Array.prototype.reduce.call(list, fn, initial);
  else
    return Array.prototype.reduce.call(list, fn);
};
