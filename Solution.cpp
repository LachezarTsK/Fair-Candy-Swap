
#include <ranges>
#include <vector>
#include <numeric>
using namespace std;

class Solution {

public:
    vector<int> fairCandySwap(vector<int>& aliceSizes, vector<int>& bobSizes) const {
        int numberOfCandiesWithAlice = accumulate(aliceSizes.begin(), aliceSizes.end(), 0);
        int numberOfCandiesWithBob = accumulate(bobSizes.begin(), bobSizes.end(), 0);

        int aliceFairSwap = 0;
        int bobFairSwap = 0;
        int fairSwapDifference = (numberOfCandiesWithAlice - numberOfCandiesWithBob) / 2;

        ranges::sort(bobSizes);
        for (const auto& candies : aliceSizes) {

            int target = candies - fairSwapDifference;
            auto searchResult = ranges::lower_bound(bobSizes, target);

            if (searchResult != bobSizes.end() && *searchResult == target) {
                aliceFairSwap = candies;
                bobFairSwap = candies - fairSwapDifference;
                break;
            }
        }

        return vector<int> {aliceFairSwap, bobFairSwap};
    }
};
