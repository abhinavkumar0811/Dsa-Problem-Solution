/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let wordLen = words[0].length;
    let totalLen = wordLen * words.length;
    let wordCount = new Map();

    
    for (let w of words) {
        wordCount.set(w, (wordCount.get(w) || 0) + 1);
    }

    let res = [];
    for (let i = 0; i <= s.length - totalLen; i++) {
        let seen = new Map();
        let j = 0;
        while (j < words.length) {
            let word = s.substr(i + j * wordLen, wordLen);
            if (!wordCount.has(word)) break;

            seen.set(word, (seen.get(word) || 0) + 1);
            if (seen.get(word) > wordCount.get(word)) break;
            j++;
        }
        if (j === words.length) res.push(i);
    }
    return res;
};
