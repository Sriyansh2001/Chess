import WhitePawn from '../Images/whitepawn.png';
import WhiteQueen from '../Images/whitequeen.png';
import WhiteBishop from '../Images/whitebishop.png';
import WhiteKnight from '../Images/whiteknight.png';
import WhiteKing from '../Images/whiteking.png';
import WhiteRook from '../Images/whiterook.png';

import BlackPawn from '../Images/blackpawn.png';
import BlackBishop from '../Images/blackbishop.png';
import BlackQueen from '../Images/blackqueen.png';
import BlackKnight from '../Images/blackknight.png';
import BlackKing from '../Images/blackking.png';
import BlackRook from '../Images/blackrook.png';

import Start from '../Sound/start.mp3';
import { removeBlur } from './BoardDesign/style';

export const setpieces = (grid,setgrid,setchance,pick)=> {
    // console.log(grid);
    //Remove blur.
    removeBlur(pick.x,pick.y);
    //Initialization
    let start = new Audio(Start);
    start.play();
    var obj = {...grid}
    const knightplace = [1,6];
    const rookplace = [0,7];
    const bishopplace = [2,5];
    // Placing White Pieces at there original place 
        // Pawn
        for(var i=0 ; i<8 ; ++i) {
            obj[1][i].image = WhitePawn;
            obj[1][i].color = "White";
            obj[1][i].piece_type = "Pawn";
            obj[1][i].first_move = true;
        }   
        // Rook
        for(var i=0 ; i<2 ; ++i) {
            obj[0][rookplace[i]].image = WhiteRook;
            obj[0][rookplace[i]].color = "White";
            obj[0][rookplace[i]].piece_type = "Rook";
        }
        // Knight
        for(var i=0 ; i<2 ; ++i) {
            obj[0][knightplace[i]].image = WhiteKnight;
            obj[0][knightplace[i]].color = "White";
            obj[0][knightplace[i]].piece_type = "Knight";
        }
        //Bishop
        for(var i=0 ; i<2 ; ++i) {
            obj[0][bishopplace[i]].image = WhiteBishop;
            obj[0][bishopplace[i]].color = "White";
            obj[0][bishopplace[i]].piece_type = "Bishop";
        }
        //Queen
        obj[0][4].image = WhiteQueen;
        obj[0][4].color = "White";
        obj[0][4].piece_type = "Queen";
        //King
        obj[0][3].image = WhiteKing;
        obj[0][3].color = "White";
        obj[0][3].piece_type = "King";
        
    // Placing Black Pieces at there original place 
        for(var i=0 ; i<8 ; ++i) {
            obj[6][i].image = BlackPawn;
            obj[6][i].color = "Black";
            obj[6][i].piece_type = "Pawn";
            obj[6][i].first_move = true;
        }
        // Rook
        for(var i=0 ; i<2 ; ++i) {
            obj[7][rookplace[i]].image = BlackRook;
            obj[7][rookplace[i]].color = "Black";
            obj[7][rookplace[i]].piece_type = "Rook";
        }
        // Knight
        for(var i=0 ; i<2 ; ++i) {
            obj[7][knightplace[i]].image = BlackKnight;
            obj[7][knightplace[i]].color = "Black";
            obj[7][knightplace[i]].piece_type = "Knight";
        }
        //Bishop
        for(var i=0 ; i<2 ; ++i) {
            obj[7][bishopplace[i]].image = BlackBishop;
            obj[7][bishopplace[i]].color = "Black";
            obj[7][bishopplace[i]].piece_type = "Bishop";
        }
        //Queen
        obj[7][3].image = BlackQueen;
        obj[7][3].color = "Black";
        obj[7][3].piece_type = "Queen";
        //King
        obj[7][4].image = BlackKing;
        obj[7][4].color = "Black";
        obj[7][4].piece_type = "King";
    //Reseting all the remaining blocks
    for(var i=2 ; i<6 ; ++i) {
        for(var j=0 ; j<8 ; ++j) {
            obj[i][j].image="";
            obj[i][j].color="";
            obj[i][j].piece_type="";
        }
    }
    setchance("White");
    setgrid(obj);
}