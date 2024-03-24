
import java.util.Arrays;

public class Solution {

    public int[] fairCandySwap(int[] aliceSizes, int[] bobSizes) {
        int numberOfCandiesWithAlice = Arrays.stream(aliceSizes).sum();
        int numberOfCandiesWithBob = Arrays.stream(bobSizes).sum();

        int aliceFairSwap = 0;
        int bobFairSwap = 0;
        int fairSwapDifference = (numberOfCandiesWithAlice - numberOfCandiesWithBob) / 2;

        Arrays.sort(bobSizes);
        for (int candies : aliceSizes) {

            int target = candies - fairSwapDifference;
            if (Arrays.binarySearch(bobSizes, target) >= 0) {
                aliceFairSwap = candies;
                bobFairSwap = candies - fairSwapDifference;
                break;
            }
        }

        return new int[]{aliceFairSwap, bobFairSwap};
    }
}
