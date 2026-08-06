/**
 * @param {string} password
 * @return {number}
 */
var passwordStrength = function(password) {

    const unique = new Set(password);
    let strength = 0;

    for (const ch of unique) {

        if (ch >= 'a' && ch <= 'z') {
            strength += 1;
        } else if (ch >= 'A' && ch <= 'Z') {
            strength += 2;
        } else if (ch >= '0' && ch <= '9') {
            strength += 3;
        } else {
            strength += 5;
        }

    }

    return strength;
};