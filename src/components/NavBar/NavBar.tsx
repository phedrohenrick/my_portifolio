import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import { Link } from "react-scroll"; // Importa o Link do react-scroll para rolagem suave
import { Trans, useTranslation } from 'react-i18next'


const NavBar = () =>{  //uma notação diferente para function 
  const {t} = useTranslation();


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
                            <Trans 
                             i18nKey="navBarAbout" 
                             components={{ 1: <span color = "white"/>}} 
                             />
                </Link>
                </MenuItem>

                <MenuItem >
                <Link to="projetos" smooth={true} duration={200}>
                <Trans 
                             i18nKey="navBarProjects" 
                             components={{ 1: <span color = "white"/>}} 
                             />
                </Link>
                </MenuItem>

                <MenuItem>
                <Link to="footer" smooth={true} duration={100}>
                <Trans 
                             i18nKey="navBarContact" 
                             components={{ 1: <span color = "white"/>}} 
                             />
                </Link>
                </MenuItem>

            </StyledToolBar>
          
        </AppBar>      
      </>
    )
  }
  
  export default NavBar
  