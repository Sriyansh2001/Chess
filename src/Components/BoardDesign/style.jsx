import { Box ,styled } from "@mui/material"
import dot from '../../Images/Dot.png';

export const addBlur = (x,y)=> {
    const pickclsName = String.fromCharCode(x+97)+(y+1);
    document.getElementsByClassName(pickclsName)[0].style.opacity=0.6;
}

export const removeBlur = (x,y) => {
    const pickclsName = String.fromCharCode(x+97)+(y+1);
    document.getElementsByClassName(pickclsName)[0].style.opacity=1;
}

export const blur_all_path = (path,x,y,grid) => {
    for(let i=0 ; i<path.length ; ++i) {
        let a = path[i][0], b = path[i][1];
        console.log(a,b,x,y);
        if(a !== x || b != y) {
            grid[a][b].image = dot;
        }
    }
}

export const remove_all_path = (path,x,y,grid) => {
    for(let i=0 ; i<path.length ; ++i) {
        let a = path[i][0], b = path[i][1];
        console.log(a,b,x,y);
        if(a !== x || b != y) {
            grid[a][b].image = "";
        }
    }
}

export const Block = styled(Box)`
    position: relative;
    display: grid;
    height: 6vw;
    width: 6vw;
    border: 2px solid black;
`

export const Parent = styled(Box)`
    display: flex;
    direction: row;
    padding: 0% 0% 0% 25vw ;
    &:nth-of-type(2n+0){
        & > div {
            :nth-of-type(2n+1) {
                background-color:grey;
            }
        }
    }
    &:nth-of-type(2n+1){
        & > div {
            :nth-of-type(2n) {
                background-color:grey;
            }
        }
    }
    media
`

export const Border = styled(Box)`
    height: 100%;
    width:100%;  
`

export const Break = styled(Box)`
    flex-basis:100%;
    height:0;
`

export const Center = styled(Box)`
    width:100%;
    display:flex;
    justify-content:center;
`

export const Image = styled('img')({
    position: "absolute",
    display: "flex",
    height: "95%",
    paddingLeft:"7%",
    paddingTop:"2%",
    alignItems: "center",
    justifyContent: "center"
})
