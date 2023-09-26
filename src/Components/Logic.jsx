import { MoveAtEmpty, MoveToAttack } from './direction_logic';
import MoveSound from '../Sound/move.mp3';
import AttackSound from '../Sound/cutmove.mp3';
import { addBlur , removeBlur } from './BoardDesign/style';
import { find_all_path } from './direction_logic';
import { blur_all_path , remove_all_path } from './BoardDesign/style';

//Use to store the path of picked piece.
var path=[];

const changechance = (chance,setchance) => {
    if(chance === "White") {
        setchance("Black");
    }
    else {
        setchance("White");
    }
}

const update_board = (grid,newgrid,pick,x,y)=> {
    let a=pick.x,b=pick.y;
    newgrid[x][y].image=grid[a][b].image;
    newgrid[x][y].color=grid[a][b].color;
    newgrid[x][y].piece_type=grid[a][b].piece_type;
    grid[a][b] = { image:"", color:"", piece_type:""};
}

//Check for valid moves.
export const Move = async(e,grid,setgrid,pick,setpick,chance,setchance)=> {
    //Sound Contructor Audio is called.
    let moveSound = new Audio(MoveSound);
    let attackSound = new Audio(AttackSound);
    //Remove the blur after move.
    removeBlur(pick.x,pick.y);
    let newgrid = {...grid};
    remove_all_path(path,pick.x,pick.y,newgrid);
    setgrid(newgrid);
    if(pick.value == true) {
        //Initailizing className and x and y axis using className.
        var clsName = e.target.className[0]+e.target.className[1];
        var x=(clsName.charCodeAt(0)-97);
        var y=Number(clsName[1])-1;

        if(grid[x][y].color === pick.color) {
            //Call to pick that piece only.
            pick_piece(e,grid,setpick,chance,pick);
            return ;
        }
        else if(grid[x][y].image.length == 0) {
            //Check is it possible to place it on that position.
            //check King for check.
            //make all increment for values.
            // -----------------------------------------------
            //Check if the moves are valid or not for an empty place.
            if(MoveAtEmpty(pick.x,pick.y,x,y,grid) === true) {
                //Play Sound
                moveSound.play();
                //Copying Grid into another variable.
                let newgrid = {...grid};
                update_board(grid,newgrid,pick,x,y);
                setgrid(newgrid);
                changechance(chance,setchance);
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
                update_board(grid,newgrid,pick,x,y);
                setgrid(newgrid);
                changechance(chance,setchance);
            }
            else {
                // console.log("Wrong Place");
            }
        }
    }
    path=[]
    setpick({value:false , x:0 , y:0});
};

//Function that pick the piece into pick useState.
export const pick_piece = (e,grid,setpick,chance,pick,setgrid)=> {
    // try {
        var clsName = e.target.className[0]+e.target.className[1];
        var x_axis=(clsName.charCodeAt(0)-97);
        var y_axis=Number(clsName[1])-1;
        if(grid[x_axis][y_axis].image.length > 0) {
            // When Color Does Not match.
            if(grid[x_axis][y_axis].color != chance) {
                return ;
            }
            removeBlur(pick.x,pick.y);
            let newgrid = {...grid};
            remove_all_path(path,pick.x,pick.y,newgrid);
            // blur_all_path(path);
            const obj = {
                value:true , 
                x: x_axis , 
                y: y_axis , 
                color: grid[x_axis][y_axis].color , 
                piece_type: grid[x_axis][y_axis].piece_type
            }
            //Blur the picked piece
            addBlur(x_axis,y_axis)
            setpick(obj);
            path = find_all_path(x_axis,y_axis,grid);
            blur_all_path(path,x_axis,y_axis,newgrid);
            // setgrid(newgrid);
            // console.log(newgrid);
        }
        else {
            // console.log("No piece Found");
        }
    // }
    // catch(e) {
    //     alert("Some Error Arrised",e);
    // }
}

export const init_function = (arr,setgrid)=> {
    setgrid(arr);
}