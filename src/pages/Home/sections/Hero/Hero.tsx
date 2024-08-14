import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/Avatar.png"
import { Container, Grid, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () =>{  //uma notação diferente para function 

  const StyledHero = styled("div")(() => ({
    backgroundColor : "black",
    height: "100wh"

  }))

  const StyledImg = styled("img")(() => ({
    
        width:"75%",
        borderRadius :"50%"
  }))


    return (
      <>
        
            <StyledHero>
              <Container>

            <Grid container spacing={2}>
                  <Grid item xs={12} md = {4}>
                  <StyledImg src= {Avatar}/>
                  </Grid>
                  <Grid item xs={12} md = {8}>
                    <Typography variant="h1" color = "primary" textAlign="center">Phedro Henrick da Silva Leão</Typography>
                    <Typography variant="h2" color = "primary" textAlign="center"> I am a Web Developera and Studant</Typography>
                   <Grid container display="flex" justifyContent="center">
                    <Grid item xs = {12} md={4} >
                    <button >
                        <DownloadIcon sx={{ fontSize: 15 }}/>
                        Download CV 
                    </button >
                    </Grid>
                    <Grid item  xs = {12} md={4}>
                    <button color="black">
                        <EmailIcon sx={{ fontSize: 15 }}/>
                        Contact me
                    </button>
                    </Grid>
                   </Grid>
                  </Grid>
                
                </Grid>
         </Container>
            </StyledHero>
      </>
    )

  }
  export default Hero

  

  