import WhitePawn from '../Images/whitepawn.png';
import WhiteQueen from '../Images/whitequeen.png';
import WhiteBishop from '../Images/whitebishop.png';
import WhiteKnight from '../Images/whiteknight.png';
import WhiteKing from '../Images/whiteking.png';

import BlackPawn from '../Images/blackpawn.png';
import BlackBishop from '../Images/blackbishop.png';
import BlackQueen from '../Images/blackqueen.png';
import BlackKnight from '../Images/blackknight.png';
import BlackKing from '../Images/blackking.png';

import { MoveAtEmpty } from './direction_logic';

//Check for valid moves.
export const Move = (e,grid,setgrid,pick,setpick)=> {
    console.log(pick);
    if(pick.value == true) {
        console.log("Move Function Working");
        
        var clsName = e.target.className[0]+e.target.className[1];
        var x=(clsName.charCodeAt(0)-97);
        var y=Number(clsName[1])-1;

        if(grid[x][y].color === pick.color) {
            console.log("Same Color");
            return ;
        }
        else if(grid[x][y].image.length == 0) {
            //Check is it possible to place it on that position.
            //check King for check.
            //make all increment for values.
            let piece = grid[pick.x][pick.y].piece_type;
            //Check if the moves are valid or not for an empty place.
            if(MoveAtEmpty(pick.x,pick.y,x,y,piece) === true) {
                let newgrid = {...grid};
                let a=pick.x,b=pick.y;
                newgrid[x][y].image=grid[a][b].image;
                newgrid[x][y].color=grid[a][b].color;
                newgrid[x][y].pick_piece=grid[a][b].piece_type;
                grid[a][b] = {id:[a,b], image:"", color:"", piece_type:""};
                setgrid(newgrid);
            }
        }
        else if(grid[x][y].color !== pick.color) {
            //Some Cut operations will be performed.
        }
    }
    setpick(false);
};

export const pick_piece = (e,grid,setpick)=> {
    var clsName = e.target.className[0]+e.target.className[1];
    var x_axis=(clsName.charCodeAt(0)-97);
    var y_axis=Number(clsName[1])-1;
    console.log("Picking",x_axis,y_axis);
    if(grid[x_axis][y_axis].image.length > 0) {
        const obj = {
            value:true , 
            x: x_axis , 
            y: y_axis , 
            color: grid[x_axis][y_axis].color , 
            piece_type: grid[x_axis][y_axis].piece_type
        }
        setpick(obj);
        console.log("picked");
    }
    else {
        console.log("No piece Found");
    }
}

export const init_function = (arr,setgrid)=> {
    setgrid(arr);
}

export const setpieces = (grid,setgrid)=> {
    console.log(grid);
    var obj = {...grid}
    for(var i=0 ; i<8 ; ++i) {
        obj[1][i].image = WhitePawn;
        obj[1][i].color = "White";
        obj[1][i].piece_type = "Pawn";
    }   
    for(var i=0 ; i<8 ; ++i) {
        obj[6][i].image = BlackPawn;
        obj[6][i].color = "Black";
        obj[6][i].piece_type = "Pawn";
    }
    setgrid(obj);
}