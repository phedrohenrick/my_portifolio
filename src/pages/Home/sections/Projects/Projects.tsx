import styled from "@emotion/styled";
import AnimatedBackground from "../../../../assets/images/AnimatedBackground/ProjectScreen.png";
import { Container, Grid, Typography } from "@mui/material";
import ProjectSlide from "../../../../components/StyledSlide.tsx/StyledSlide";
import { Trans, useTranslation } from 'react-i18next';




const Project = () =>{  //uma notação diferente para function 
  const {t} = useTranslation();

    const StyledProjects = styled("div")(({}) => ({
      backgroundImage: `url(${AnimatedBackground})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center',
         height: "100vh",
         width: "100%",
         display: "flex",
         alignItems: "center",
         maxwidth: "100%",

       }))
 

   
     return (
       <>
 
         <StyledProjects id="projetos">
            <Container >
              <Grid container spacing={2} alignItems="center" >
                  <Grid item xs={12} md = {12} fontWeight={"bold"} >
                      <Typography variant="h2" color = "primnary" fontWeight={"bold"}>
                      <Trans
                       i18nKey="title_p" 
                      components={{ 1:  <span style= {{color: "#E67E22"}}/>}} 
                        />
                      </Typography>
                  </Grid>

                  <Grid item xs={12} md = {12}  fontWeight={"bold"} marginBottom={"100px"}>
                    
                      <ProjectSlide/>
                  </Grid>

              </Grid>

            </Container>
         </StyledProjects>
       </>
     )  
}

export default Project
