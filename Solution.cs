
using System;

public class Solution
{
    public int[] FairCandySwap(int[] aliceSizes, int[] bobSizes)
    {
        int numberOfCandiesWithAlice = aliceSizes.Sum();
        int numberOfCandiesWithBob = bobSizes.Sum();

        int aliceFairSwap = 0;
        int bobFairSwap = 0;
        int fairSwapDifference = (numberOfCandiesWithAlice - numberOfCandiesWithBob) / 2;

        Array.Sort(bobSizes);
        foreach (int candies in aliceSizes)
        {
            int target = candies - fairSwapDifference;
            if (Array.BinarySearch(bobSizes, target) >= 0)
            {
                aliceFairSwap = candies;
                bobFairSwap = candies - fairSwapDifference;
                break;
            }
        }

        return new int[] { aliceFairSwap, bobFairSwap };
    }
}
