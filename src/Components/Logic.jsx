import { MoveAtEmpty, MoveToAttack } from './direction_logic';
import MoveSound from '../Sound/move.mp3';
import AttackSound from '../Sound/cutmove.mp3';

//Check for valid moves.
export const Move = async(e,grid,setgrid,pick,setpick,chance,setchance)=> {
    // console.log(pick);
    // let MoveSound = new Audio('../Sound/move.mp3')
    let moveSound = new Audio(MoveSound);
    let attackSound = new Audio(AttackSound);
    if(pick.value == true) {
        // console.log("Move Function Working");
        // await MoveSound.play();
        var clsName = e.target.className[0]+e.target.className[1];
        var x=(clsName.charCodeAt(0)-97);
        var y=Number(clsName[1])-1;

        if(grid[x][y].color === pick.color) {
            //Call to pick that piece only.
            pick_piece(e,grid,setpick,chance,setchance);
            return ;
        }
        else if(grid[x][y].image.length == 0) {
            //Check is it possible to place it on that position.
            //check King for check.
            //make all increment for values.
            // -----------------------------------------------
            //Check if the moves are valid or not for an empty place.
            // console.log(grid[pick.x][pick.y].piece_type);
            if(MoveAtEmpty(pick.x,pick.y,x,y,grid) === true) {
                moveSound.play();
                let newgrid = {...grid};
                let a=pick.x,b=pick.y;
                newgrid[x][y].image=grid[a][b].image;
                newgrid[x][y].color=grid[a][b].color;
                newgrid[x][y].piece_type=grid[a][b].piece_type;
                grid[a][b] = {id:[a,b], image:"", color:"", piece_type:""};
                setgrid(newgrid);
                if(chance === "White") {
                    setchance("Black");
                }
                else {
                    setchance("White");
                }
            }
            else {
                // console.log("Wrong Place");
            }
        }
        else if(grid[x][y].color !== pick.color) {
            //Some Cut operations will be performed.
            if(MoveToAttack(pick.x,pick.y,x,y,grid) === true) {
                attackSound.play()
                let newgrid = {...grid};
                let a=pick.x,b=pick.y;
                newgrid[x][y].image=grid[a][b].image;
                newgrid[x][y].color=grid[a][b].color;
                newgrid[x][y].piece_type=grid[a][b].piece_type;
                grid[a][b] = {id:[a,b], image:"", color:"", piece_type:""};
                setgrid(newgrid);
                if(chance === "White") {
                    setchance("Black");
                }
                else {
                    setchance("White");
                }
            }
            else {
                // console.log("Wrong Place");
            }
        }
    }
    setpick({value:false});
};
//Function that pick the piece into pick useState.
export const pick_piece = (e,grid,setpick,chance,setchance)=> {
    var clsName = e.target.className[0]+e.target.className[1];
    var x_axis=(clsName.charCodeAt(0)-97);
    var y_axis=Number(clsName[1])-1;
    // console.log("Picking",x_axis,y_axis);
    if(grid[x_axis][y_axis].image.length > 0) {
        if(grid[x_axis][y_axis].color != chance) {
            // console.log("Not Correct Color");
            return ;
        }
        const obj = {
            value:true , 
            x: x_axis , 
            y: y_axis , 
            color: grid[x_axis][y_axis].color , 
            piece_type: grid[x_axis][y_axis].piece_type
        }
        setpick(obj);
        // console.log("picked");
    }
    else {
        // console.log("No piece Found");
    }
}

export const init_function = (arr,setgrid)=> {
    setgrid(arr);
}