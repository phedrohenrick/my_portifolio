import styled from "@emotion/styled"
import Git from "portifolio/src/assets/images/ImageSkills/Git.png"
import Docker from "portifolio/src/assets/images/ImageSkills/Docker.png"
import Angular from "portifolio/src/assets/images/ImageSkills/Angular.png"
import Spring from "portifolio/src/assets/images/ImageSkills/Spring.png"
import Java from "portifolio/src/assets/images/ImageSkills/Java.png"
import React from "portifolio/src/assets/images/ImageSkills/React.png"
import typescript from "portifolio/src/assets/images/ImageSkills/Typescript.png"
import c from "portifolio/src/assets/images/ImageSkills/C.png"
import postgesql from "portifolio/src/assets/images/ImageSkills/PostgreSql.png"
import { Container, Grid, Typography } from "@mui/material";
import AnimatedBackground from "portifolio/src/assets/images/AnimatedBackground/AboutBackground.gif";
import StyledCard from "portifolio/src/components/StyledCard/StyledCard"
import { Trans, useTranslation } from 'react-i18next'
import { motion } from "framer-motion"


const About = () => { //uma notação diferente para function 

const {t} = useTranslation();
  
  const StyledAbout = styled("div")(({ }) => ({
    backgroundImage: `url(${AnimatedBackground})`,
    
  }))

  const StyledImg = styled("img")(() => ({
    width: "135%",
    borderRadius: "50%",
    margin: "-70px",
    '@media (max-width: 615px)': {
      margin: "-30px",  // Altura menor para telas menores
    },
  }))

  


  return (
    <>

      <StyledAbout id="sobre" className="
                flex
                items-top
                justify-center
                bg-cover 
                bg-no-repeat 
                bg-center 
                sm:bg-top 
                md:bg-center 
                lg:bg-bottom 
                h-[120vh] 
                w-full
                pt-12">
        <Container>
          <Grid container spacing={2} alignItems="center" gap={"40px"} >

            <Grid item xs={12} md={6} className=" 
                p-4 
                sm:p-6 
                md:p-8 
                h-auto 
                text-center">
              <Typography variant="h2" color="primnary" >

              {t("aboutMe")}

              </Typography>

            </Grid>

            <Grid item xs={12} md={5}>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ 
                opacity: 1,
                x : 0
                
              }}
              transition={{ duration: 0.3 }}
              viewport={{once:true}}>
              <Typography variant="body1" color="primary" textAlign="left" pb={2} fontWeight={"bold"} marginTop={"-40px"}>

              <Trans
               i18nKey="tx1" 
              components={{ 1:  <span style= {{color: "#E67E22"}}/>}} 
              />

                </Typography>

                </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ 
                opacity: 1,
                x : 0
                
              }}
              transition={{ duration: 0.3 }}
              viewport={{once:true}}
>
              <Typography variant="body1" color="primary" textAlign="left" pb={2} fontWeight={"bold"} marginTop={"-40px"} > 
              <Trans
               i18nKey="tx2" 
              components={{ 1:  <span style= {{color: "#E67E22"}}/>}} 
              />

                 </Typography>
                 </motion.div>
            </Grid>

            <Grid item xs={12} md={4} >
              <Typography variant="h2" color="primary" >
              <Trans 
              i18nKey="skills" 
              components={{ 1: <span color = "white"/>}} 
              />
              </Typography>
            </Grid>
            <Grid container justifyContent="center">
  <Grid item xs={12} md={6}>
    <StyledCard>
      <Grid container justifyContent="center" alignItems="center" spacing={4} >
        {[Git, Java, Angular, Spring, React, Docker, c, postgesql, typescript].map((imgSrc, index) => (
          <Grid item xs={4} md={4} key={index} className="flex justify-center items-center">
            <StyledImg src={imgSrc} alt={imgSrc.toString()} className="w-20 md:w-28 lg:w-32 xl:w-36 h-auto object-contain" />
          </Grid>
        ))}
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


