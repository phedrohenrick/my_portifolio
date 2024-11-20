import Avatar from "../../../../assets/images/Avatar.png";
import {Box, Container, Grid, styled, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import AnimatedBackground from "../../../../assets/images/AnimatedBackground/AnimatedBackground.svg";
import theme from "../../../../theme";
import {downloadFile} from "../../../../components/Functions/DownloadFile.tsx"
import { IconButton } from '@mui/material';
import { motion } from "framer-motion";

const Hero = () =>{  //uma notação diferente para function 


  const handleDownload = () => {
    downloadFile("phedrohenrick_resume.pdf");
  } 
  const HandleClickConatact = (link: string) => {
    window.location.href = link;
  };

  const StyledHero = styled("div")(({theme}) => ({
    backgroundImage: `url(${AnimatedBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: "120vh",
    width: "100%",
    maxwidth: "100%",
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
          paddingTop: "0px",
          marginLeft: "40px",
          marginTop: "40px"
      },
      [theme.breakpoints.up('md')]: { // >=mobile
          paddingTop: "0px",
      }
  }))
  
 
    return (
      <>
      <StyledHero>
          <Container >
              <Grid container spacing={6}  >

                  <Grid item xs={12} md = {5} alignItems={"center"}>
                    <Box position={"relative"}>
                    <StyledImg src = {Avatar}/>
                    </Box>
                     
                  </Grid>
                  
                  <Grid item xs={12} md = {7} >
                    
                      <Typography variant="h1" color = "secondary" textAlign="center"  pb={2} >Phedro Henrick</Typography>
                      <Typography variant="h2" color = "secondary" textAlign="center" >i'm a Web Developer</Typography>

                    <Grid container display="flex" justifyContent="center" spacing={2} pt={3} marginBottom={3} >
                          <Grid item xs = {12} md={6} display= "flex" justifyContent="center">
                            
                              <StyledButton onClick={()=> {handleDownload()}}>
                                <DownloadIcon/>
                                <Typography>
                                    Download do Currículo 
                                </Typography>
                              </StyledButton>
                           
                          </Grid>
                      <Grid item  xs = {12} md={6}  display= "flex" justifyContent="center" >
                        
                      <StyledButton onClick={() => {HandleClickConatact("#footer")}} >
                          <EmailIcon />
                          <Typography>
                           Me contate 
                         </Typography>
                      </StyledButton>
                      </Grid>
                    </Grid>
                    <Grid container display="flex" justifyContent="center"  pt={3} marginBottom={3} >
                      <Grid item xs = {4} md={2}  display= "flex" justifyContent="center" >
                        <motion.div whileHover={{ scale: 1.2, opacity: 1 }} whileTap={{ scale: 0.9 }}>
                          <IconButton href={"https://github.com/phedrohenrick"} target="_blank" sx={{
                                  color: '#dfe8e8', // Cor padrão
                                  fontSize: 50,
                                  opacity: 0.7,
                                  '@media (max-width: 899px)': { // Quando a tela for menor que 600px (breakpoint "sm")
                                    color: '#254346', // Cor preta no mobile
                                    opacity: 0.7,
                                  },
                                }}>
                              <GitHubIcon sx={{ fontSize: 50 }} />
                          </IconButton>
                          </motion.div>
                      </Grid>
                      <Grid item xs = {4} md={2}  display= "flex" justifyContent="center" >
                      <motion.div whileHover={{ scale: 1.2, opacity: 1 }} whileTap={{ scale: 0.9 }}>
                        <IconButton href={"https://www.linkedin.com/in/phedro-henrick-da-silva-le%C3%A3o-b13b96234/"} target="_blank" sx={{
                                color: '#dfe8e8', // Cor padrão
                                fontSize: 50,
                                opacity: 0.7,

                                '@media (max-width: 899px)': { // Quando a tela for menor que 600px (breakpoint "sm")
                                  color: '#254346', // Cor preta no mobile
                                  opacity: 0.7,

                                },
                              }}>
                            <LinkedInIcon sx={{ fontSize: 50 }}/>
                        </IconButton>
                        </motion.div>
                      </Grid>
                      <Grid item xs = {4} md={2}  display= "flex" justifyContent="center" >
                      <motion.div whileHover={{ scale: 1.2, opacity: 1 }} whileTap={{ scale: 0.9 }}>
                        <IconButton href={"https://www.instagram.com/asking_dev/"} target="_blank"  sx={{
                                color: '#dfe8e8', // Cor padrão
                                fontSize: 50,
                                opacity: 0.7,

                                '@media (max-width: 899px)': { // Quando a tela for menor que 600px (breakpoint "sm")
                                  color: '#254346', // Cor preta no mobile
                                  opacity: 0.7,

                                },
                              }}>
                            <InstagramIcon sx={{ fontSize: 50}}/>
                        </IconButton>
                        </motion.div>
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

  

  