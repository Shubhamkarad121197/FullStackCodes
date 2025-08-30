function longestSubstringKDistinct(N, K, S) {
    if (K === 0) return 0;

    let start = 0;
    let maxLen = 0;
    let charMap = new Map();

    for (let end = 0; end < N; end++) {
        let char = S[end];
        charMap.set(char, (charMap.get(char) || 0) + 1);

        while (charMap.size > K) {
            let startChar = S[start];
            charMap.set(startChar, charMap.get(startChar) - 1);
            if (charMap.get(startChar) === 0) {
                charMap.delete(startChar);
            }
            start++;
        }

        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
}

// Sample Input Handling
let input = `6 3
Xyyzya`.split('\n');
let [N, K] = input[0].split(' ').map(Number);
let S = input[1];

console.log(longestSubstringKDistinct(N, K, S)); // Output: 5

