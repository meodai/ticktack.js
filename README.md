ticktack.js
=============

requestanimationframe based watch.

## Installation

```
  bower install ticktack.js
```

### Usage

```javascript
  ticktack.on('second', function(digit,digits){
    console.log(e,o);
    // e contains all the values relative to seconds
    // o contains values for all digits
  });

  ticktack.on('tick', function(e,o){
    // will be called on requestAnimationFrame
  });

```

#### ticktack.on(event, handler)

**event**
*Type*: String
event type: hour, minute, second, millisecond or tick

**handler**
*Type*: Function( PlainObject digit, PlainObject digits )
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
```

### Contributors
- [David Aerne](https://github.com/meodai/)
- [David Darx](http://www.daviddarx.com/)
- [Pierre Spring](https://github.com/caillou)

