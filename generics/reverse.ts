function reverse<T, X>(items: T[], names: X[] ): { items: T[], names: X[]} {
    var itemsToReturn = [];
    var namesToReturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        itemsToReturn.push(items[i]);
    }

    for (let i = items.length - 1; i >= 0; i--) {
        namesToReturn.push(items[i]);
    }
    return { items: itemsToReturn, names: namesToReturn };
}

const nums = [1,2,3];
const names = ['david', 'michael', 'john']

const rev = reverse(nums, names);

rev.names[0] = 123;
rev.names[1] = "kathy";

rev.items[0] = 1;
rev.items[1] = "2";



