import styled from "@emotion/styled"
import theme from "../../../../theme";
import { Box, Container, Grid, Typography } from "@mui/material";
import AnimatedBackground from "../../../../components/AnimatedBackground/AboutBackground.gif";




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

        <StyledAbout id="sobre">
          <Container>

      
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md = {5}>
              <Typography variant="h5" color="primary" textAlign="left" pb={2} fontWeight={"bold"}>
                Olá! Sou o <Box component="span" color={"#E67E22"}>Phedro</Box>, estudante de Ciência da Computação.
                Como desenvolvedor web e full stack, estou construindo uma experiência sólida na construção de APIs utilizando o <Box component="span" color={'#00bc58'}>Spring Framework</Box>, com integração a bancos de dados usando o <Box component="span" color={'#00bc58'}>PostgreSQL</Box>.
              </Typography>

              </Grid>

              <Grid item xs={12} md = {6} >
              <Typography variant="h5" color = "primary" textAlign="left"  pb={2} fontWeight= {"bold"} >No back-end, foco em entregar soluções eficientes e escaláveis, 
              utilizando as melhores práticas de desenvolvimento Java com spring. No front-end, concentro meus estudos em <Box component="span" color={'#00bc58'}>  Angualar e React</Box> para garantir interfaces elegantes. </Typography>
              </Grid>
              
            </Grid>
          </Container>
        </StyledAbout>
      </>
    )
  }
  
  export default About
  