// Problem Description
// A matrix and a valid current position (row number and column number) are provided as input. Given a direction (RIGHT is 1, DOWN in 2, LEFT is 3 and UP is 4) and number of steps to move, output the values along the path taken to the new position, including the value at the new position.

// If any position during traversal is out of bounds, output [-1] (array with single element -1) and not the values along the path.

// Input format
// First line contains two space separated integers M and N, representing the number of rows and columns in the matrix, respectively.

// Next M lines contain N space separated integers each, which represent the values on each row

// Next line contains two space separated integers X and Y, representing the row and column number you are currently at. This is 0 based indexing.

// Next line contains two space separated integers A and B, representing the Direction and the Number of steps to move, respectively.

// Output format
// Output the values along the path, in a space separated way.

function matrixTraversal(matrix, currPosRow, currPosCol, dirToMove, stepsToMove) {
    let res=[];
    for(let i=0;i<stepsToMove;i++){
        if(dirToMove==3){
            currPosCol--;
        }
        else if(dirToMove==1){
            currPosCol++
        }
        else if(dirToMove==4){
            currPosRow--
        }
         else{
            currPosRow++
        }
          if(currPosRow<0 || currPosCol<0 || currPosRow>=matrix.length ||   currPosCol>=matrix[0].length ){

        res=[];
        res.push(-1);
        return res;
        }

        res.push(matrix[currPosRow][currPosCol]);

    }
  

  return res;


}