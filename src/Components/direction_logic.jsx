
const possible = (startx,starty)=> {
    return (startx>=0 && startx<=7 && starty>=0 && starty<=7);
}

//Check when pawn move at empty block
export const MoveAtEmpty = (startx,starty,endx,endy,grid)=> {
    if(!possible(endx,endy)) return false;
    
    let block = grid[startx][starty];
    let piece = block.piece_type;
    // console.log(startx,starty,endx,endy,piece);
    if(piece === "Pawn") {
        // Logic for White Pawn Moves
        if(grid[startx][starty].color === "White") {
            if(endx === startx+1 && starty === endy) {
                return true;
            }
            else if(endx === startx+2 && starty === endy && block.first_move === true) {
                return true;
            }
        }
        // Logic for Black Pawn Moves
        else {
            if(endx === startx-1 && starty === endy) {
                return true;
            }
            else if(endx === startx-2 && starty === endy && block.first_move === true) {
                return true;
            }
        }
    }
    else if(piece === "Bishop" || piece === "Rook" || piece === "Queen") {
        // Move Bishop or Rook in all possible path and choose the correct path to move.
        let dir;
        if(piece === "Bishop")
            dir = [[-1,1],[-1,-1],[1,-1],[1,1]];
        else if(piece === "Rook")
            dir = [[0,1],[1,0],[-1,0],[0,-1]];
        else {
            dir = [[-1,1],[-1,-1],[1,-1],[1,1],[0,1],[1,0],[-1,0],[0,-1]];
        }
        // console.log(dir);
        let size = dir.length;
        for(let i=0 ; i<size ; ++i) {
            let ptrx=startx,ptry=starty;
            ptrx+=dir[i][0];
            ptry+=dir[i][1];
            while(possible(ptrx,ptry)) {
                if(grid[ptrx][ptry].image.length != 0) {
                    break;
                }
                if(ptrx === endx && ptry === endy) {
                    return true;
                }
                // console.log(ptrx,ptry);
                ptrx+=dir[i][0];
                ptry+=dir[i][1];
            }
        }
    }   
    else if(piece === "Knight") {
        // Check the Movement of Knight and Validate wheater to place it into the next block or not.
        var m1 = Math.abs(startx-endx) , m2 = Math.abs(starty-endy);
        if(((m1 === 2 && m2 ===1) || (m2 === 2 && m1 ===1)) && grid[endx][endy].image.length === 0) {
            return true;
        }
    }
    else if(piece === "King") {
        var m1 = Math.abs(startx-endx) , m2 = Math.abs(starty-endy);
        if(m1 <= 1 && m2 <= 1) {
            return true;
        }
    }
    return false;
}

//Check when pawn move at empty block
export const MoveToAttack = (startx,starty,endx,endy,grid)=> {
    if(!possible(endx,endy)) return false;
    
    let block = grid[startx][starty];
    let piece = block.piece_type;
    // console.log(startx,starty,endx,endy,piece);
    if(piece === "Pawn") {
        // Logic for White Pawn Moves
        if(grid[startx][starty].color === "White") {
            if((endx === startx+1 && starty === endy-1) || (endx === startx+1 && starty === endy+1)) {
                return true;
            }
        }
        // Logic for Black Pawn Moves
        else {
            if((endx === startx-1 && starty === endy+1) || (endx === startx-1 && starty === endy-1)) {
                return true;
            }
        }
    }
    else if(piece === "Bishop" || piece === "Rook" || piece === "Queen") {
        // Move Bishop or Rook in all possible path and choose the correct path to move.
        let dir;
        if(piece === "Bishop")
            dir = [[-1,1],[-1,-1],[1,-1],[1,1]];
        else if(piece === "Rook")
            dir = [[0,1],[1,0],[-1,0],[0,-1]];
        else {
            dir = [[-1,1],[-1,-1],[1,-1],[1,1],[0,1],[1,0],[-1,0],[0,-1]];
        }
        // console.log(dir);
        let size = dir.length;
        for(let i=0 ; i<size ; ++i) {
            let ptrx=startx,ptry=starty;
            ptrx+=dir[i][0];
            ptry+=dir[i][1];
            while(possible(ptrx,ptry)) {
                if(ptrx === endx && ptry === endy) {
                    return true;
                }
                if(grid[ptrx][ptry].image.length != 0) {
                    break;
                }
                ptrx+=dir[i][0];
                ptry+=dir[i][1];
            }
        }
    }   
    else if(piece === "Knight") {
        // Check the Movement of Knight and Validate wheater to place it into the next block or not.
        var m1 = Math.abs(startx-endx) , m2 = Math.abs(starty-endy);
        if(((m1 === 2 && m2 ===1) || (m2 === 2 && m1 === 1))) {
            return true;
        }
    }
    else if(piece === "King") {
        var m1 = Math.abs(startx-endx) , m2 = Math.abs(starty-endy);
        if(m1 <= 1 && m2 <= 1) {
            return true;
        }
    }
    return false;
}