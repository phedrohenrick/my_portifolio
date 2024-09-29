import styled from "@emotion/styled"
import theme from "../../../../theme";
import { Box, Container, Grid, Typography } from "@mui/material";
import AnimatedBackground from "../../../../components/AnimatedBackground/AboutScreen.gif";




const About = () =>{  //uma notação diferente para function 


    const StyledAbout = styled("div")(({theme}) => ({
      backgroundImage: `url(${AnimatedBackground})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",

        // Media Queries para responsividade
    '@media (max-inline-size: 768px)': {
      height: '80vh',  // Ajuste menor para dispositivos móveis
    },

    '@media (max-width: 480px)': {
      height: '70vh',  // Altura menor para telas menores
    }
      }))

      const StyledImg = styled("img")(() => ({
        width:"90%",
        borderRadius :"50%",
  }))
    
    return (
      <>

        <StyledAbout>
          <Container>

      
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md = {5}>
              <Typography variant="h5" color = "primary" textAlign="left"  pb={2} fontWeight= {"bold"}>Olá! sou o <Box component="span" color={'#00bc58'}>  Phedro</Box>, estudante de ciencia da computação e desenvolvedor Web.
                 Como desenvolvedor full stack com experiência sólida na construção de APIs utilizando o Spring Framework, 
                 com integração a bancos de dados como PostgreSQL. </Typography>
              </Grid>

              <Grid item xs={12} md = {6} >
              <Typography variant="h5" color = "primary" textAlign="left"  pb={2} fontWeight= {"bold"} >No back-end, foco em entregar soluções eficientes e escaláveis, 
              utilizando as melhores práticas de desenvolvimento em Java.. </Typography>
              </Grid>
              
            </Grid>
          </Container>

        </StyledAbout>
      </>
    )
  }
  
  export default About
  