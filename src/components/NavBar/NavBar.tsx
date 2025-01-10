import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import { Link } from "react-scroll"; // Importa o Link do react-scroll para rolagem suave
import { useTranslation } from 'react-i18next'


const NavBar = () =>{  //uma notação diferente para function 
  const {t} = useTranslation();


    const StyledToolBar = styled(Toolbar)(() => ({
      maxWidth:"100%",
      display: "flex",
      justifyContent: "space-evenly",
      backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
           backgroundPosition: 'center',
           width: "100%",
        
       
  }))

    return (
      <>
        <AppBar position="absolute">
            <StyledToolBar>
                <MenuItem > 
                <Link to="sobre" smooth={true} duration={300}>
                            {t("navBarAbout")}
                </Link>
                </MenuItem>

                <MenuItem >
                <Link to="projetos" smooth={true} duration={200}>
                {t("navBarProjects")}
                </Link>
                </MenuItem>

                <MenuItem>
                <Link to="footer" smooth={true} duration={100}>
                {t("navBarContact")}
                </Link>
                </MenuItem>

            </StyledToolBar>
          
        </AppBar>      
      </>
    )
  }
  
  export default NavBar
  