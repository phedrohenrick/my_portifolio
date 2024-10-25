import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import { Link } from "react-scroll"; // Importa o Link do react-scroll para rolagem suave


const NavBar = () =>{  //uma notação diferente para function 


    const StyledToolBar = styled(Toolbar)(() => ({
      maxWidth:"100%",
      display: "flex",
      justifyContent: "space-evenly",
      backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
           backgroundPosition: 'center',
           width: "100vw",
        
       
  }))

    return (
      <>
        <AppBar position="absolute">
            <StyledToolBar>
                <MenuItem > 
                <Link to="sobre" smooth={true} duration={300}>
                Sobre
                </Link>
                </MenuItem>

                <MenuItem >
                <Link to="projetos" smooth={true} duration={200}>
                Projetos
                </Link>
                </MenuItem>

                <MenuItem>
                <Link to="footer" smooth={true} duration={100}>
                Contato
                </Link>
                </MenuItem>

            </StyledToolBar>
          
        </AppBar>      
      </>
    )
  }
  
  export default NavBar
  