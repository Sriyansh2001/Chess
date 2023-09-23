
//Check when pawn move at empty block
export const MoveAtEmpty = (startx,starty,endx,endy,piece)=> {

    console.log(endx,startx+1);
    if(piece === "Pawn") {
        if(endx === startx+1) {
            return true;
        }
    }
    return false;
}