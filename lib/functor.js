var types = [];
var fmaps = [];

function functor(type, fmap){
    types.push(type); 
    fmaps.push(fmap);
}

function fmapForType(type){
    var fmap = fmaps[types.indexOf(type)];
    if (!fmap) { throw 'missing fmap for ' + type }
    return fmap;
}

exports.functor = functor;
exports.fmapForType = fmapForType;
