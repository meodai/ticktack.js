window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f){setTimeout(f, 1000/60);};

var watch = (function (undefined) {
  'use strict';
  var callbacks, registeredCallbacks, tick, getTimeObject, runCallbacks, timeObject;

  callbacks = {};
  registeredCallbacks = [];

  runCallbacks = function(obj) {
    var i, j, name;
    for (i in registeredCallbacks) {
      name = registeredCallbacks[i];
      if( (obj[name] && obj[name].hasChanged ) || name === 'tick') {
        for(j in callbacks[name]) {
          callbacks[name][j].call(obj[name], obj, obj[name]);
        }
      }
    }
  };

  getTimeObject = function (previousDigits) {
    var now, timeInMilliseconds, digit, digits, d;

    now = new Date();
    timeInMilliseconds = now.getTime() - now.getTimezoneOffset() * 60000;

    digits = {
      'year': {
        method: 'getFullYear',
        value: 0,
        progress: 0
      },
      'month': {
        method: 'getMonth',
        value: 0,
        progress: 0,
        getProgress: function(value) {
          return value / 30;
        }
      },
      'day': {
        method: 'getDay',
        value: 0,
        progress: 0,
        getProgress: function(value) {
          return now.getHours()/24;
        }
      },
      'hour': {
        method: 'getHours',
        value: 0,
        progress: 0,
        getProgress: function(value) {
          return (timeInMilliseconds / 1000 / 60 / 60) % 24 - value;
        }
      },
      'minute': {
        method: 'getMinutes',
        value: 0,
        progress: 0,
        getProgress: function(value) {
          return (timeInMilliseconds / 1000 / 60) % 60 - value;
        }
      },
      'second': {
        method: 'getSeconds',
        value: 0,
        progress: 0,
        getProgress: function(value) {
          return (timeInMilliseconds / 1000) % 60 - value;
        }
      },
      'millisecond': {
        method: 'getMilliseconds',
        value: 0
      }
    };

    for (digit in digits) {
      d = digits[digit];
      d.value = now[d.method]();
      if (d.getProgress) {
        d.progress = d.getProgress(d.value);
      }
      if ( previousDigits && previousDigits[digit] ) {
        d.hasChanged = d.value !== previousDigits[digit].value;
      }
    }

    return digits;
  };

  tick = function () {

    window.requestAnimationFrame(tick);

    if (registeredCallbacks.length === 0) {
      return;
    }

    // get new data structure
    timeObject = getTimeObject(timeObject);

    runCallbacks(timeObject);
  };

  window.requestAnimationFrame(tick);

  return {
    on: function (eventName, callback) {
      if (callbacks[eventName] === undefined) {
        registeredCallbacks.push(eventName);
        callbacks[eventName] = [];
      }

      callbacks[eventName].push(callback);

      tick();

      callback.call(timeObject[eventName], timeObject, timeObject[eventName]);
    }
  };
})();
