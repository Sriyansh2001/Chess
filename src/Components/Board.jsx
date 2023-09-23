// Import of all the essetial components.
import { Block , Parent , Break , Border , Center , Image } from "./BoardDesign/style";
import { Box ,Button } from "@mui/material";
import { useState } from "react";
import { Move , init_function , setpieces , pick_piece } from "./Logic";

//Remove it Later.
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

// The Board function contain all the GUI of Board.
const Board = ()=> {
    // UseState used in the program
    const [pick,setpick] = useState({value:false , x: "" , y: "", color: "" , piece_type: ""});
    // Dummy function to remove.
    const fun = (e)=> {  
        var clsName = e.target.className[0]+e.target.className[1];
    }
    //Initialization of grid used in chess of size 8X8.
    var creating_grid = [];
    for(var i=0 ; i<8 ; ++i) {
        var row = [];
        for(var j=0 ; j<8 ; ++j) {
            //Structure of each grid element
            row.push({id:[i,j],image:"",color:"", piece_type:""});
        }
        creating_grid.push(row);
    }
    //Grid UseState.
    const [grid,setgrid] = useState(creating_grid)
    //Main Grid Blocks.
    return (
        <>
            {/* Heading on the Board. */}
            <Center><Box>This is board</Box></Center>
            {/* Board Part */}
            <Border>
                <Box>
                    {/* block from h1 to h8 */}
                    <Parent>
                        <Block className="h1" onClick={fun}><Image src={BlackPawn}></Image></Block>
                        <Block className="h2" onClick={fun}><Image src={BlackKnight}></Image></Block>
                        <Block className="h3" onClick={fun}><Image src={BlackBishop}></Image></Block>
                        <Block className="h4" onClick={fun}><Image src={BlackKing}></Image></Block>
                        <Block className="h5" onClick={fun}><Image src={BlackQueen}></Image></Block>
                        <Block className="h6" onClick={fun}><Image src={BlackBishop}></Image></Block>
                        <Block className="h7" onClick={fun}><Image src={BlackKnight}></Image></Block>
                        <Block className="h8" onClick={fun}><Image src={BlackPawn}></Image></Block>
                    </Parent>
                    {/* block from g1 to g8 */}
                    <Parent>
                        <Block className="g1" onClick={fun}><Image src={BlackPawn}></Image></Block>
                        <Block className="g2" onClick={fun}><Image src={BlackPawn}></Image></Block>
                        <Block className="g3" onClick={fun}><Image src={BlackPawn}></Image></Block>
                        <Block className="g4" onClick={fun}><Image src={BlackPawn}></Image></Block>
                        <Block className="g5" onClick={fun}><Image src={BlackPawn}></Image></Block>
                        <Block className="g6" onClick={fun}><Image src={BlackPawn}></Image></Block>
                        <Block className="g7" onClick={fun}><Image src={BlackPawn}></Image></Block>
                        <Block className="g8" onClick={fun}><Image src={BlackPawn}></Image></Block>
                    </Parent>
                    {/* block from f1 to f8 */}
                    <Parent>
                        <Block className="f1" onClick={fun}></Block>
                        <Block className="f2" onClick={fun}></Block>
                        <Block className="f3" onClick={fun}></Block>
                        <Block className="f4" onClick={fun}></Block>
                        <Block className="f5" onClick={fun}></Block>
                        <Block className="f6" onClick={fun}></Block>
                        <Block className="f7" onClick={fun}></Block>
                        <Block className="f8" onClick={fun}></Block>
                    </Parent>
                    {/* block from e1 to e8 */}
                    <Parent>
                        <Block className="e1" onClick={fun}></Block>
                        <Block className="e2" onClick={fun}></Block>
                        <Block className="e3" onClick={fun}></Block>
                        <Block className="e4" onClick={fun}></Block>
                        <Block className="e5" onClick={fun}></Block>
                        <Block className="e6" onClick={fun}></Block>
                        <Block className="e7" onClick={fun}></Block>
                        <Block className="e8" onClick={fun}></Block>
                    </Parent>
                    {/* block from d1 to d8 */}
                    <Parent>
                        <Block className="d1" onClick={fun}></Block>
                        <Block className="d2" onClick={fun}></Block>
                        <Block className="d3" onClick={fun}></Block>
                        <Block className="d4" onClick={fun}></Block>
                        <Block className="d5" onClick={fun}></Block>
                        <Block className="d6" onClick={fun}></Block>
                        <Block className="d7" onClick={fun}></Block>
                        <Block className="d8" onClick={fun}></Block>
                    </Parent>
                    {/* block from c1 to c8 */}
                    <Parent>
                        <Block className="c1" onClick={fun}></Block>
                        <Block className="c2" onClick={fun}></Block>
                        <Block className="c3" onClick={fun}></Block>
                        <Block className="c4" onClick={fun}><Image src=""></Image></Block>
                        <Block className="c5" onClick={fun}><Image src=""></Image></Block>
                        <Block className="c6" onClick={fun}><Image src=""></Image></Block>
                        <Block className="c7" onClick={fun}><Image src=""></Image></Block>
                        <Block className="c8" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick) : pick_piece(e,grid,setpick)}><Image className="c8" src={grid[2][7].image}></Image></Block>
                    </Parent>
                    {/* block from b1 to b8 */}
                    <Parent>
                        <Block className="b1" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick) : pick_piece(e,grid,setpick)}><Image className="b1" src={grid[1][0].image}></Image></Block>
                        <Block className="b2" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick) : pick_piece(e,grid,setpick)}><Image className="b2" src={grid[1][1].image}></Image></Block>
                        <Block className="b3" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick) : pick_piece(e,grid,setpick)}><Image className="b3" src={grid[1][2].image}></Image></Block>
                        <Block className="b4" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick) : pick_piece(e,grid,setpick)}><Image className="b4" src={grid[1][3].image}></Image></Block>
                        <Block className="b5" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick) : pick_piece(e,grid,setpick)}><Image className="b5" src={grid[1][4].image}></Image></Block>
                        <Block className="b6" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick) : pick_piece(e,grid,setpick)}><Image className="b6" src={grid[1][5].image}></Image></Block>
                        <Block className="b7" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick) : pick_piece(e,grid,setpick)}><Image className="b7" src={grid[1][6].image}></Image></Block>
                        <Block className="b8" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick) : pick_piece(e,grid,setpick)}><Image className="b8" src={grid[1][7].image}></Image></Block>
                    </Parent> 
                    {/* block from a1 to a8 */}
                    <Parent>
                        <Block className="a1" onClick={fun}><Image src={WhitePawn}></Image></Block>
                        <Block className="a2" onClick={fun}><Image src={WhiteKnight}></Image></Block>
                        <Block className="a3" onClick={fun}><Image src={WhiteBishop}></Image></Block>
                        <Block className="a4" onClick={fun}><Image src={WhiteQueen}></Image></Block>
                        <Block className="a5" onClick={fun}><Image src={WhiteKing}></Image></Block>
                        <Block className="a6" onClick={fun}><Image src={WhiteBishop}></Image></Block>
                        <Block className="a7" onClick={fun}><Image src={WhiteKnight}></Image></Block>
                        <Block className="a8" onClick={fun}><Image src={WhitePawn}></Image></Block>
                    </Parent>
                </Box>
            </Border>
            <Center>
                {/* <Button onClick={async()=> { init_function(arr,setgrid); } }>Start</Button> */}
                <Button onClick={async()=> { setpieces(grid,setgrid); } }>Start</Button>
            </Center>
        </>
    )
};

export default Board;