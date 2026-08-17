/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length !== t.length) return false

    // sort 
    let sN = s.split('').sort().join()
    let tN = t.split('').sort().join()

    if(sN !== tN){
        return false
    }

    return true
    
};