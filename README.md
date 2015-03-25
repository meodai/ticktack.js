ticktack.js
=============

requestanimationframe based watch.

## Demos

- [3D Progress with Three.js] (http://codepen.io/idflood/pen/vERBKG?editors=001) by @idflood
- [husl color gradient] (http://codepen.io/meodai/pen/yyNWKz?editors=001) by @meodai
- [hipster demo] (http://codepen.io/meodai/pen/azqPbq?editors=001) by @daviddarx & @meodai
- [randomized Lines] (http://codepen.io/daviddarx/pen/vEQKdo?editors=001) by @daviddarx
- [flat abstract 3d planets] (http://codepen.io/meodai/pen/dPQGPy?editors=001) by @meodai

## Installation

```
  bower install ticktack.js
```

### Usage

```javascript
  ticktack.on('second', function(digits,digit){
    console.log(digits,digit);
    // digits contains values for all digits
    // digit and 'this' contains all the values relative to to the 'on' event (seconds)
  });

  ticktack.on('tick', function(digits,digit){
    // will be called on requestAnimationFrame
  });

```

#### ticktack.on(event, handler)

**event**
*Type*: String
event type: hour, minute, second, millisecond or tick

**handler**
*Type*: Function( PlainObject digits, PlainObject digit )
- *digit*: contains an object with values relative to the event typically
```javascript
{
	method: "getSeconds",
    // string containing the original Date method
    progress: 0,
    // float between 0 - 1 containing the progress to the next digit
    value: 0
    // int containing the value of the digit
}
```

- *digits* object containng all digit objects.
```javascriot
  {
    'day': {
      method: 'getDay',
      value: 0,
      progress: 0
    },
    'hour': {
      method: 'getHours',
      value: 0,
      progress: 0
    },
    'minute': {
      method: 'getMinutes',
      value: 0,
      progress: 0
    },
    'second': {
      method: 'getSeconds',
      value: 0,
      progress: 0
    },
    'millisecond': {
      method: 'getMilliseconds',
      value: 0
    }
  }
```

### Contributors
- [David Aerne](https://github.com/meodai/)
- [David Darx](http://www.daviddarx.com/)
- [David Mignot] (https://github.com/idflood)
- [Pierre Spring](https://github.com/caillou)


