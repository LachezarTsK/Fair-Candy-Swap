
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
    let numberOfCandiesWithAlice = aliceSizes.reduce((x, y) => x + y);
    let numberOfCandiesWithBob = bobSizes.reduce((x, y) => x + y);

    let aliceFairSwap = 0;
    let bobFairSwap = 0;
    let fairSwapDifference = (numberOfCandiesWithAlice - numberOfCandiesWithBob) / 2;

    bobSizes.sort((x, y) => x - y);
    for (let candies of aliceSizes) {

        let target = candies - fairSwapDifference;
        if (binarySearch(bobSizes, target)) {
            aliceFairSwap = candies;
            bobFairSwap = candies - fairSwapDifference;
            break;
        }
    }

    return [aliceFairSwap, bobFairSwap];
};

/**
 * @param {number[]} array
 * @param {number} target
 * @return {boolean}
 */
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        if (array[middle] === target) {
            return true;
        }

        if (array[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return false;
}
