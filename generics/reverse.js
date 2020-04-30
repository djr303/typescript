function reverse(items, names) {
    var itemsToReturn = [];
    var namesToReturn = [];
    for (var i = items.length - 1; i >= 0; i--) {
        itemsToReturn.push(items[i]);
    }
    for (var i = items.length - 1; i >= 0; i--) {
        namesToReturn.push(items[i]);
    }
    return { items: itemsToReturn, names: namesToReturn };
}
var nums = [1, 2, 3];
var names = ['david', 'michael', 'john'];
var rev = reverse(nums, names);
rev.names[0] = 123;
rev.names[1] = "kathy";
rev.items[0] = 1;
rev.items[1] = "2";
