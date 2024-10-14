import Avatar from "../../../../assets/images/Avatar.png"
import {Box, Container, Grid, styled, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground.svg";
import theme from "../../../../theme";
import {downloadFile} from "../../../../components/Functions/DownloadFile.tsx"

const Hero = () =>{  //uma notação diferente para function 


  const handleDownload = () => {
    downloadFile("phedro henrick - resume.pdf");
  } 

  const StyledOut = styled('body')(({}) => ({
    padding:"0",
    margin:0,
  }))
  const StyledHero = styled("div")(({theme}) => ({
    backgroundImage: `url(${AnimatedBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: "120vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.up('xs')]: { // <= mobile
      paddingTop: "40px",

  },
  [theme.breakpoints.up('md')]: { // >=mobile
      paddingTop: "0",
  }
  }))

  const StyledImg = styled("img")(() => ({
        width:"80%",
        borderRadius :"50%",
        border: `1px solid ${theme.palette.primary.dark}`,

        [theme.breakpoints.up('xs')]: { // <= mobile
          paddingTop: "0px"
    
      },
      [theme.breakpoints.up('md')]: { // >=mobile
          paddingTop: "0px",
      }
  }))
  
    return (
      <>
  
      <StyledHero>
          <Container >
              <Grid container spacing={6} >

                  <Grid item xs={12} md = {5}>
                    <Box position={"relative"}>
                    <StyledImg src= {Avatar}/>
                    </Box>
                     
                  </Grid>
                  
                  <Grid item xs={12} md = {7} >
                    
                      <Typography variant="h1" color = "secondary" textAlign="center"  pb={2} >Phedro Henrick</Typography>
                      <Typography variant="h2" color = "secondary" textAlign="center" >i'm a Web Developer</Typography>

                    <Grid container display="flex" justifyContent="center" spacing={2} pt={3} marginBottom={3} >
                          <Grid item xs = {12} md={6} display= "flex" justifyContent="center">
                              <StyledButton onClick={()=> {handleDownload}}>
                                <DownloadIcon/>
                                <Typography>
                                    Download CV 
                                </Typography>
                              </StyledButton>
                          </Grid>
                      <Grid item  xs = {12} md={6}  display= "flex" justifyContent="center" >
                      <StyledButton onClick={()=> console.log("Download")}>
                          <EmailIcon />
                          <Typography>
                           Contact me 
                         </Typography>
                      </StyledButton>
                      </Grid>
                      <Grid item xs = {12} md={6}  display= "flex" justifyContent="center">

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

  

  