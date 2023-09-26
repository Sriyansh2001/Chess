// Import of all the essetial components.
import { Block , Parent , Break , Border , Center , Image } from "./BoardDesign/style";
import { Box ,Button } from "@mui/material";
import { useState } from "react";
import { Move , init_function , pick_piece } from "./Logic";
import { setpieces } from './start';

// The Board function contain all the GUI of Board.
const BoardCopy = ()=> {
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
                        // creating_grid.map((i)=>{
                        //     return <>
                        //         <Parent>
                        //             {i.map((j)=>{
                        //                 console.log(j.id,String.fromCharCode(character-j.id[0]-1),String.fromCharCode(character-j.id[0]-1)+(j.id[1]+1))
                        //                 var classname = String.fromCharCode(character-j.id[0]-1)+(j.id[1]+1)
                        //                 return <>
                        //                     <Block className={`${classname}`} onClick={(e)=> pick.value ? Move(e,grid,setgrid,pick,setpick,chance,setchance) : pick_piece(e,grid,setpick,chance,setchance)}><Image className={`${classname}`} src={grid[7-j.id[0]][j.id[1]].image}></Image></Block>
                        //                 </>
                        //             })}
                        //         </Parent>
                        //     </>
                        // })
                    }
                </Box>
            </Border>
            <Center>
                {/* <Button onClick={async()=> { init_function(arr,setgrid); } }>Start</Button> */}
                <Button onClick={async()=> { setpieces(grid,setgrid,setchance); } }>Start</Button>
            </Center>
        </>
    )
};

export default BoardCopy;