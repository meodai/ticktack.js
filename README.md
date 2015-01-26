ticktack.js
=============

requestanimationframe based watch.

## Installation

```
  bower install ticktack.js
```

### Usage

```javascript
  ticktack.on('second', function(e,o){
    console.log(e,o);
    // e contains all the values relative to seconds
    // o contains values for all digits
  });
```


```javascript
  ticktack.on('tick', function(e,o){
    // will be called on requestAnimationFrame
  });
```
