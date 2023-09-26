// Import of all the essetial components.
import { Block , Parent , Break , Border , Center , Image } from "./BoardDesign/style";
import { Box ,Button } from "@mui/material";
import { useState } from "react";
import { Move , init_function , pick_piece } from "./Logic";
import { setpieces } from './start';

// The Board function contain all the GUI of Board.
const Board = ()=> {
    // UseState used in the program
    const [pick,setpick] = useState({value:false , x:0 , y:0});
    const [chance,setchance] = useState("White");

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
    const [grid,setgrid] = useState(creating_grid);
    let character = 105;
    // console.log(creating_grid);
    //Main Grid Blocks.
    return (
        <>
            {/* Heading on the Board. */}
            <Center><Box>This is board</Box></Center>
            <Center><Box>Chance of {chance}</Box></Center>
            {/* Board Part */}
            <Border>
                <Box>
                    {
                        creating_grid.map((row)=>{
                            return (
                                <Parent key={row[0].id}>
                                    {row.map((col)=>{
                                        let classname = String.fromCharCode(character-col.id[0]-1)+(col.id[1]+1)
                                        return (
                                            <Block key={classname} className={`${classname}`} onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,pick,setgrid)}><Image className={`${classname}`} src={grid[7-col.id[0]][col.id[1]].image}></Image></Block>
                                        )
                                    })}
                                </Parent>
                            )
                        })
                    }
                </Box>
            </Border>
            <Center>
                <Button onClick={async()=> { setpieces(grid,setgrid,setchance,pick); } }>Start</Button>
            </Center>
        </>
    )
};

export default Board;