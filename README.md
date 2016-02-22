ticktack.js
=============

requestanimationframe based watch.

## Demos

- [Flashy hair] (http://codepen.io/meodai/pen/gpqoOW?editors=001) by @meodai
- [Unstable clock with Three.js] (http://freelance-html-developer.com/clock/) by @slatom
- [3D Progress with Three.js] (http://codepen.io/idflood/pen/vERBKG?editors=001) by @idflood
- [husl color gradient] (http://codepen.io/meodai/pen/yyNWKz?editors=001) by @meodai
- [hipster demo] (http://codepen.io/meodai/pen/azqPbq?editors=001) by @daviddarx & @meodai
- [Randomized Lines] (http://codepen.io/daviddarx/pen/vEQKdo?editors=001) by @daviddarx
- [flat abstract 3d planets] (http://codepen.io/meodai/pen/dPQGPy?editors=001) by @meodai
- [swiss train station aka ios] (http://codepen.io/donovanh/pen/myvLpy?editors=001) by @cssanimation
- [hyphae] (http://codepen.io/inconvergent/pen/zxXXwz?editors=001) by @inconvergent
- [coogytack] (http://codepen.io/aeyko/pen/dPENoG?editors=001) by @aeyko
- [Flipping Diamond] (http://codepen.io/daviddarx/pen/EaqjpL?editors=001) by @daviddarx
- [abstract clock] (http://codepen.io/castrolol/pen/GgVXNM?editors=001) by @castrolol

## Used on
- [tramclockmunich] (http://tramclockmunich.com) 

## Installation

```
  npm install ticktack.js --save
```

**or**

```
  bower install ticktack.js
```

### Usage

```javascript
  ticktack.on('second', function(digits){
    console.log(digits.getSecond().progress);
    // digits and 'this' contain all the getter functions
  });

  ticktack.on('tick', function(digits){
    // will be called on requestAnimationFrame
  });

```

#### ticktack.on(event, handler)

**event**
*Type*: String
event type: hour, minute, second, millisecond or tick

**handler**
*Type*: Function( PlainObject digits )

- *digits* object containng getter functions for every digit.
```javascript
  {
    'getDay': function(){ ... }, // {value: 0, progress: 0}
    'getHour': function(){ ... }, // {value: 0, progress: 0}
    'getMinute': function(){ ... }, // {value: 0, progress: 0}
    'getSecond': function(){ ... }, // {value: 0, progress: 0}
    'getMillisecond': function(){ ... }, // {value: 0, progress: 0}
    'getDate': function(){ ... }  // js Date
  }
```

### Contributors
- [David Aerne](https://github.com/meodai/)
- [David Darx](http://www.daviddarx.com/)
- [David Mignot] (https://github.com/idflood)
- [Pierre Spring](https://github.com/caillou)


