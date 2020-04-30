var isXorY = function (obj) {
    if ('x' in obj)
        return "x is in A";
    if ('y' in obj)
        return "y is in B";
};
console.log('isXorY', isXorY({ x: "value" }));
console.log('isXorY', isXorY({ y: "value" }));
