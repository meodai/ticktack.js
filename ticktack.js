window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f){setTimeout(f, 1000/60);};


//test daviddarx

var watch = (function (undefined) {
  'use strict';
  var callbacks, registeredCallbacks, tick, getTimeObject;

  callbacks = {};
  registeredCallbacks = [];

  getTimeObject = function () {
    var now = new Date();

    return {
    //   ms: {
    //     value:
    //   }
    };

  };

  tick = function () {

    window.requestAnimationFrame(tick);
    if (registeredCallbacks.length === 0) {
      return;
    }


    // get new data structure


    // iterater over registeredCallbacks
      // if tick -> call -> return

      // check difference for xxx to before and call if needed.

    // set new data structure to previous
  };

  window.requestAnimationFrame(tick);

  return {
    on: function (eventName, callback) {

      if (callbacks[eventName] === undefined) {
        registeredCallbacks.push(eventName);
        callbacks[eventName] = [];
      }

      callbacks[eventName].push();
      // TODO pass data into the CB
      callback();
    }
  };
})();
