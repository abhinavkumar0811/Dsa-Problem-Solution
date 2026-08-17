/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {

   let newIp =address.replaceAll('.', '[.]')
   return newIp

        

    
};