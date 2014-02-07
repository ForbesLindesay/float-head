'use strict';

exports.isString = function (val) {
  return typeof val === 'string';
};

exports.isFunction = function (val) {
  return typeof val === 'function';
};

exports.each = function (obj, fn) {
  if (!obj) return;
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

exports.debounce = function(func, wait, immediate) {
  var timeout, args, context, timestamp, result;

  var later = function() {
    var last = Date.now() - timestamp;
    if (last < wait) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  return function() {
    context = this;
    args = arguments;
    timestamp = _.now();
    var callNow = immediate && !timeout;
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
};
