# functor

## Usage

```javascript
var functor = require('functor');
var fmap = functor.fmap;


// We can define fmap methods on predefined types using the functor function
// N.B. this does not affect any prototype chains or modify external objects
functor(Promise, function(fn, functor){
  // functor here is the promise instance
  return functor.then(fn);
});

functor(Array, function(fn, functor){
  return functor.map(fn);
});

// fmap will also look for an fmap method on the object
function Nothing() {}
Nothing.prototype.fmap = function () { return Nothing() };

function Just(val) {
  this.val = val;
}
Just.prototype.fmap = function () { return Maybe(fn(this.val)) }

function Maybe(val) {
  return val == null ? Nothing() : Just(val)
}

function logName(obj) {
  console.log(obj.name);
}

var somePromise = getUserFromServer();

// this will log out the name at some point;
fmap(logName, somePromise); // returns a new functor, of same type (Promise);

var me = {name: 'fabien'}

// this will log out "fabien"
fmap(logName, Maybe(me)); // returns new functor (Just)

var you;

// this doesn't log out anything, nor does it throw a cannot read property name of null
fmap(logName, Maybe(you)); // returns new functor (Nothing)

```
