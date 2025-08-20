function isAnagramUsingSet(str, str1) {
    if (str.length !== str1.length) return false;

    let set1 = new Set(str);
    let set2 = new Set(str1);

    if (set1.size !== set2.size) return false;

    for (let char of set1) {
        if (!set2.has(char)) return false;
    }
    return true;
}

console.log(isAnagramUsingSet("aab", "aba")); 
