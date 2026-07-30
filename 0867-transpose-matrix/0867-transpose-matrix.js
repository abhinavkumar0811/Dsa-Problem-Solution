/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    
    // swap row to col 

    let transposeM = []

    // creating 2d matrix of mXn
    for(let row=0; row<matrix[0].length; row++){

        transposeM.push([])
    }

    // now transpose the matrix
    for(let row=0; row<matrix.length; row++){

        for(let col=0; col<matrix[row].length; col++){

            transposeM[col].push(matrix[row][col])

        }
    }

    return transposeM


};

