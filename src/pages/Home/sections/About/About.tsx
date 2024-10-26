import styled from "@emotion/styled"
import Git from "portifolio/src/assets/images/ImageSkills/Git.png"
import Docker from "portifolio/src/assets/images/ImageSkills/Docker.png"
import Angular from "portifolio/src/assets/images/ImageSkills/Angular.png"
import Spring from "portifolio/src/assets/images/ImageSkills/Spring.png"
import Java from "portifolio/src/assets/images/ImageSkills/Java.png"
import React from "portifolio/src/assets/images/ImageSkills/React.png"
import fish from "portifolio/src/assets/images/ImageBackground/fish.gif"
import typescript from "portifolio/src/assets/images/ImageSkills/Typescript.png"
import c from "portifolio/src/assets/images/ImageSkills/C.png"
import postgesql from "portifolio/src/assets/images/ImageSkills/PostgreSql.png"
import { Box, Container, Grid, Typography } from "@mui/material";
import AnimatedBackground from "portifolio/src/assets/images/AnimatedBackground/AboutBackground.gif";
import StyledCard from "portifolio/src/components/StyledCard/StyledCard"


const About = () =>{ //uma notação diferente para function 

    const StyledAbout = styled("div")(({}) => ({
      backgroundImage: `url(${AnimatedBackground})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        maxwidth: "100%",


  
        // Media Queries para responsividade
    '@media (max-width: 900px)': {
      height: '80vh',  // Ajuste menor para dispositivos móveis
    },

    '@media (max-width: 605px)': {
      height: 'auto',  // Altura menor para telas menores
    },
    
    
      }))

 const StyledImg = styled("img")(() => ({
        width:"135%",
        borderRadius :"50%",
        margin:"-70px",
        '@media (max-width: 615px)': {
          margin:"-30px",  // Altura menor para telas menores
        },
  }))
  
  const StyledImgfish = styled("img")(() => ({

    display: "none",

   '@media (max-width: 871px)': { // Para telas com largura menor que 768px
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

            <Grid item xs={12} md = {6} >
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
                <Grid container justifyContent="center" marginBottom={"10px"}>
                  <Grid item xs={12} md={6} >
                    <StyledCard >
                      <Grid container justifyContent="center"  alignItems="center">
                        <Grid item xs={4} md={4} className="flex justify-center">
                          <StyledImg src={Git} alt="Git" className="w-full h-auto"  />
                        </Grid>
                        <Grid item xs={4} md={4} className="flex justify-center">
                          <StyledImg src={Java} alt="Java" className="w-full h-auto" />
                        </Grid>
                        <Grid item xs={4} md={4} className="flex justify-center">
                          <StyledImg src={Angular} alt="Angular" className="w-full h-auto" />
                        </Grid>


                       
                        <Grid item xs={4} md={4} className="flex justify-center">
                          <StyledImg src={Spring} alt="Spring" className="w-full h-auto"/>
                        </Grid>
                        <Grid item xs={4} md={4} className="flex justify-center">
                          <StyledImg src={React} alt="React"className="w-full h-auto" />
                        </Grid>
                        <Grid item xs={4} md={4} className="flex justify-center">
                          <StyledImg src={Docker} alt="Docker" className="w-full h-auto"/>
                        </Grid>


                        <Grid item xs={4} md={4} className="flex justify-center">
                          <StyledImg src={c} alt="c" className="w-full h-auto"/>
                        </Grid>
                        <Grid item xs={4} md={4} className="flex justify-center" >
                          <StyledImg src={postgesql} alt="PostgreSql" className="w-full h-auto"/>
                        </Grid>
                        <Grid item xs={4} md={4} className="flex justify-center">
                          <StyledImg src={typescript} alt="typescript" className="w-full h-auto"/>
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
  