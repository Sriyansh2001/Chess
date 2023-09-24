// Import of all the essetial components.
import { Block , Parent , Break , Border , Center , Image } from "./BoardDesign/style";
import { Box ,Button } from "@mui/material";
import { useState } from "react";
import { Move , init_function , pick_piece } from "./Logic";
import { setpieces } from './start';

// The Board function contain all the GUI of Board.
const Board = ()=> {
    // UseState used in the program
    const [pick,setpick] = useState({value:false});
    const [chance,setchance] = useState("White");
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
            <Center><Box>Chance of {chance}</Box></Center>
            {/* Board Part */}
            <Border>
                <Box>
                    {/* block from h1 to h8 */}
                    <Parent>
                        <Block className="h1" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="h1" src={grid[7][0].image}></Image></Block>
                        <Block className="h2" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="h2" src={grid[7][1].image}></Image></Block>
                        <Block className="h3" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="h3" src={grid[7][2].image}></Image></Block>
                        <Block className="h4" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="h4" src={grid[7][3].image}></Image></Block>
                        <Block className="h5" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="h5" src={grid[7][4].image}></Image></Block>
                        <Block className="h6" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="h6" src={grid[7][5].image}></Image></Block>
                        <Block className="h7" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="h7" src={grid[7][6].image}></Image></Block>
                        <Block className="h8" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="h8" src={grid[7][7].image}></Image></Block>
                    </Parent>
                    {/* block from g1 to g8 */}
                    <Parent>
                        <Block className="g1" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="g1" src={grid[6][0].image}></Image></Block>
                        <Block className="g2" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="g2" src={grid[6][1].image}></Image></Block>
                        <Block className="g3" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="g3" src={grid[6][2].image}></Image></Block>
                        <Block className="g4" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="g4" src={grid[6][3].image}></Image></Block>
                        <Block className="g5" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="g5" src={grid[6][4].image}></Image></Block>
                        <Block className="g6" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="g6" src={grid[6][5].image}></Image></Block>
                        <Block className="g7" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="g7" src={grid[6][6].image}></Image></Block>
                        <Block className="g8" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="g8" src={grid[6][7].image}></Image></Block>
                    </Parent>
                    {/* block from f1 to f8 */}
                    <Parent>
                        <Block className="f1" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="f1" src={grid[5][0].image}></Image></Block>
                        <Block className="f2" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="f2" src={grid[5][1].image}></Image></Block>
                        <Block className="f3" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="f3" src={grid[5][2].image}></Image></Block>
                        <Block className="f4" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="f4" src={grid[5][3].image}></Image></Block>
                        <Block className="f5" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="f5" src={grid[5][4].image}></Image></Block>
                        <Block className="f6" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="f6" src={grid[5][5].image}></Image></Block>
                        <Block className="f7" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="f7" src={grid[5][6].image}></Image></Block>
                        <Block className="f8" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="f8" src={grid[5][7].image}></Image></Block>
                    </Parent>
                    {/* block from e1 to e8 */}
                    <Parent>
                        <Block className="e1" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="e1" src={grid[4][0].image}></Image></Block>
                        <Block className="e2" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="e2" src={grid[4][1].image}></Image></Block>
                        <Block className="e3" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="e3" src={grid[4][2].image}></Image></Block>
                        <Block className="e4" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="e4" src={grid[4][3].image}></Image></Block>
                        <Block className="e5" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="e5" src={grid[4][4].image}></Image></Block>
                        <Block className="e6" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="e6" src={grid[4][5].image}></Image></Block>
                        <Block className="e7" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="e7" src={grid[4][6].image}></Image></Block>
                        <Block className="e8" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="e8" src={grid[4][7].image}></Image></Block>
                    </Parent>
                    {/* block from d1 to d8 */}
                    <Parent>
                        <Block className="d1" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="d1" src={grid[3][0].image}></Image></Block>
                        <Block className="d2" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="d2" src={grid[3][1].image}></Image></Block>
                        <Block className="d3" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="d3" src={grid[3][2].image}></Image></Block>
                        <Block className="d4" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="d4" src={grid[3][3].image}></Image></Block>
                        <Block className="d5" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="d5" src={grid[3][4].image}></Image></Block>
                        <Block className="d6" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="d6" src={grid[3][5].image}></Image></Block>
                        <Block className="d7" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="d7" src={grid[3][6].image}></Image></Block>
                        <Block className="d8" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="d8" src={grid[3][7].image}></Image></Block>
                    </Parent>
                    {/* block from c1 to c8 */}
                    <Parent>
                        <Block className="c1" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="c1" src={grid[2][0].image}></Image></Block>
                        <Block className="c2" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="c2" src={grid[2][1].image}></Image></Block>
                        <Block className="c3" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="c3" src={grid[2][2].image}></Image></Block>
                        <Block className="c4" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="c4" src={grid[2][3].image}></Image></Block>
                        <Block className="c5" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="c5" src={grid[2][4].image}></Image></Block>
                        <Block className="c6" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="c6" src={grid[2][5].image}></Image></Block>
                        <Block className="c7" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="c7" src={grid[2][6].image}></Image></Block>
                        <Block className="c8" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="c8" src={grid[2][7].image}></Image></Block>
                    </Parent>
                    {/* block from b1 to b8 */}
                    <Parent>
                        <Block className="b1" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="b1" src={grid[1][0].image}></Image></Block>
                        <Block className="b2" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="b2" src={grid[1][1].image}></Image></Block>
                        <Block className="b3" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="b3" src={grid[1][2].image}></Image></Block>
                        <Block className="b4" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="b4" src={grid[1][3].image}></Image></Block>
                        <Block className="b5" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="b5" src={grid[1][4].image}></Image></Block>
                        <Block className="b6" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="b6" src={grid[1][5].image}></Image></Block>
                        <Block className="b7" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="b7" src={grid[1][6].image}></Image></Block>
                        <Block className="b8" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="b8" src={grid[1][7].image}></Image></Block>
                    </Parent> 
                    {/* block from a1 to a8 */}
                    <Parent>
                        <Block className="a1" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="a1" src={grid[0][0].image}></Image></Block>
                        <Block className="a2" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="a2" src={grid[0][1].image}></Image></Block>
                        <Block className="a3" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="a3" src={grid[0][2].image}></Image></Block>
                        <Block className="a4" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="a4" src={grid[0][3].image}></Image></Block>
                        <Block className="a5" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="a5" src={grid[0][4].image}></Image></Block>
                        <Block className="a6" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="a6" src={grid[0][5].image}></Image></Block>
                        <Block className="a7" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="a7" src={grid[0][6].image}></Image></Block>
                        <Block className="a8" onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className="a8" src={grid[0][7].image}></Image></Block>
                    </Parent>
                </Box>
            </Border>
            <Center>
                {/* <Button onClick={async()=> { init_function(arr,setgrid); } }>Start</Button> */}
                <Button onClick={async()=> { setpieces(grid,setgrid,setchance); } }>Start</Button>
            </Center>
        </>
    )
};

export default Board;