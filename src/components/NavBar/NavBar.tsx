import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"


const NavBar = () =>{  //uma notação diferente para function 


    const StyledToolBar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
       
  }))

    return (
      <>
        <AppBar position="absolute">
            <StyledToolBar>
                <MenuItem>Sobre</MenuItem>
                <MenuItem>Habilidades</MenuItem>
                <MenuItem>Projetos</MenuItem>
            </StyledToolBar>
          
        </AppBar>      
      </>
    )
  }
  
  export default NavBar
  