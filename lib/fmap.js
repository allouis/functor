var fmapForType = require('./functor').fmapForType;

function fmap(fn, functor){
    if (functor === undefined) {
        return fmap.bind(null, fn);
    }
    if (typeof functor.fmap === 'function') {
        return functor.fmap(fn); 
    }
    return fmapForType(functor.constructor)(fn, functor);
}

exports.fmap = fmap;
