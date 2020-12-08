// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {};
    str.split('').forEach(c => obj[c] = ++obj[c] || 1);
    
    // return Object.keys(obj).reduce((a,c) => obj[c] > (obj[a] || 0)? c : a, 0)
    return Object.keys(obj).sort((a, b) => obj[b] - obj[a])[0];
}

module.exports = maxChar;
