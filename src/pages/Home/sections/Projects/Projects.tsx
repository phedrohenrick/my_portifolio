import styled from "@emotion/styled";
import theme from "../../../../theme";
import AnimatedBackground from "../../../../assets/images/AnimatedBackground/ProjectScreen.png";
import { Container, Grid, Typography } from "@mui/material";
import ProjectSlide from "../../../../components/StyledSlide.tsx/StyledSlide";




const Project = () =>{  //uma notação diferente para function 

    const StyledProjects = styled("div")(({theme}) => ({
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
 
       const StyledImg = styled("img")(() => ({
         width:"90%",
         borderRadius :"50%",
         border: `1px solid ${theme.palette.primary.dark}`,
   }))

   
     return (
       <>
 
         <StyledProjects id="projetos">
            <Container >
              <Grid container spacing={2} alignItems="center" >
                  <Grid item xs={12} md = {12} fontWeight={"bold"} >
                      <Typography variant="h2" color = "primnary" fontWeight={"bold"}>
                       Projetos
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
