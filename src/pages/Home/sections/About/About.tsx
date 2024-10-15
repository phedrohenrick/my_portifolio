import styled from "@emotion/styled"
import Git from "../../../../assets/images/imageSkills/Git.png"
import Docker from "../../../../assets/images/imageSkills/Docker.png"
import Angular from "../../../../assets/images/imageSkills/Angular.png"
import Spring from "../../../../assets/images/imageSkills/Spring.png"
import Java from "../../../../assets/images/imageSkills/Java.png"
import React from "../../../../assets/images/imageSkills/React.png"
import fish from "../../../../assets/images/ImageBackground/fish.gif"
import typescript from "../../../../assets/images/imageSkills/Typescript.png"
import c from "../../../../assets/images/imageSkills/C.png"
import postgesql from "../../../../assets/images/imageSkills/PostgreSql.png"

import { Box, Container, Grid, Typography } from "@mui/material";
import AnimatedBackground from "../../../../components/AnimatedBackground/AboutBackground.gif";
import AnimatedBackgroundteste from "../../../../components/AnimatedBackground/ProjectScreen.gif";
import StyledCard from "../../../../components/StyledCard/StyledCard"


const About = () =>{ //uma notação diferente para function 

    const StyledAbout = styled("div")(({}) => ({
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
      height: 'auto',  // Altura menor para telas menores
    },
    
    
      }))

 const StyledImg = styled("img")(() => ({
        width:"135%",
        borderRadius :"50%",
        margin: '-100px',
  }))
  
  const StyledImgfish = styled("img")(() => ({

    display: "none",

   '@media (max-width: 768px)': { // Para telas com largura menor que 768px
        display: "block", // Exibir em dispositivos móveis
        width: "100%", // Ajuste a largura para ser responsiva (100% da área disponível)
        maxWidth: "130%", // Limite o crescimento máximo
        borderRadius: "50%", // Aplicando bordas arredondadas
        margin:"-100px",

    }
    

}))

    
    return (
      <>

        <StyledAbout id="sobre">
          <Container>
            <Grid container spacing={2} alignItems="center" gap={"40px"} >

              <Grid item xs= {10}>
              <StyledImgfish src= {fish}/>
              </Grid>

            <Grid item xs={12} md = {6} marginTop={"-40px"} >
              <Typography variant="h2" color = "primnary">
                  Sobre mim
              </Typography>
            </Grid>
          
              <Grid item xs={12} md = {5}>
                <Typography variant="h5" color="primary" textAlign="left" pb={2} fontWeight={"bold"} marginTop={"-40px"}>
                  Olá! Sou o <Box component="span" color={"#E67E22"}>Phedro</Box>, estudante de Ciência da Computação.
                  Como desenvolvedor <Box component="span" color={"#E67E22"}>web full stack</Box>, estou construindo uma experiência sólida na construção de APIs, com integração a bancos de dados.
                </Typography>
              </Grid>

              <Grid item xs={12} md = {6}>
                <Typography variant="h5" color = "primary" textAlign="left"  pb={2} fontWeight= {"bold"} marginTop={"-40px"} >No back-end, foco em entregar soluções eficientes e escaláveis, 
                        utilizando as melhores práticas de desenvolvimento. No front-end, concentro meus estudos em garantir interfaces responsivas e elegantes. </Typography>
              </Grid>
              
              <Grid item xs={12} md = {4} >
                      <Typography variant="h2" color = "primnary">
                        Skills
                      </Typography>
                </Grid>
                <Grid container justifyContent="center">
                  <Grid item xs={12} md={1} >
                    <StyledCard >
                      <Grid container justifyContent="center" spacing={1} alignItems="center">
                        <Grid item xs={4} md={4}>
                          <StyledImg src={Git} alt="Git" />
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <StyledImg src={Java} alt="Java" />
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <StyledImg src={Angular} alt="Angular" />
                        </Grid>


                       
                        <Grid item xs={4} md={4}>
                          <StyledImg src={Spring} alt="Spring" />
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <StyledImg src={React} alt="React" />
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <StyledImg src={Docker} alt="Docker" />
                        </Grid>

                        <Grid item xs={4} md={4}>
                          <StyledImg src={c} alt="c" />
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <StyledImg src={postgesql} alt="PostgreSql" />
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <StyledImg src={typescript} alt="typescript" />
                        </Grid>


                      </Grid>
                      </StyledCard>
                  </Grid>
                </Grid>

            </Grid>
          </Container>
        </StyledAbout>
      </>
    )
  }
  
  export default About
  