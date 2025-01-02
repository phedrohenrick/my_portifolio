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
import { Trans, useTranslation } from 'react-i18next'
import { useState } from "react";


const Hero = () =>{  //uma notação diferente para function 

  const {
    t, 
    i18n : {changeLanguage, language}
  } = useTranslation()

  const [currentLanguage, setCurrentLanguage] = useState(language)

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)

  }

  const handleDownload = () => {
    downloadFile("meu_curriculo_.pdf");
  };
  const HandleClickConatact = (link: string) => {
    window.location.href = link;
  };

  const StyledHero = styled("div")(({theme}) => ({
    backgroundImage: `url(${AnimatedBackground})`,
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
    //height: "120vh",
    // width: "100%",
    // maxwidth: "100%",
    // display: "flex",
    // alignItems: "center",


    [theme.breakpoints.up('xs')]: { // <= mobile
      paddingTop: "40px",

  },
  [theme.breakpoints.up('md')]: { // >=mobile
      paddingTop: "0",
  },
  
  }))

  const StyledImg = styled("img")(() => ({
        
      
        borderRadius :"50%",
        border: `1px solid ${theme.palette.primary.dark}`,
       
        

      //    [theme.breakpoints.up('xs')]: { // <= mobile
         
      //  },
      //  [theme.breakpoints.up('md')]: { // >=mobile
      //      paddingTop: "0px",
      //  },
      //  '@media (max-width: 900px)': {
      //   width:"70%",  // Altura menor para telas menores
      //   },
      //   '@media (max-width: 899px)': {
      //   width:"60%",  // Altura menor para telas menores
      //   height : "60%",
      //   },
  }))
  
 
    return (
      <>
      
      <StyledHero  className="
                flex
                items-center
                justify-center
                bg-cover 
                bg-no-repeat 
                bg-center 
                sm:bg-top 
                md:bg-center 
                lg:bg-bottom 
                h-[120vh] 
                w-full
                pt-12
            ">

          <Container>
              
              <Grid container spacing={4}>
                <Grid  item
                    xs={12}
                    md={12}
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      margin: '2rem',
                      marginBottom: "100px"
                    }}>
                  <button  onClick={() => handleChangeLanguage()} 
                   className="
                  
                   pt-2
                  text-white
                  cursor-pointer
                  bg-inherit
                  border-transparent
                  z-10
                  xl: text-xl
                  sm: text-sm
                 " >
                  
                  <Trans
                  i18nKey="btnChangeLanguage" 
                 components={{ 1:  <span style= {{color: "#E67E22"}}/>}} 
                 />

                  </button>
                </Grid>
              </Grid>

              <motion.div 
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ 
                opacity: 1,
                y : 50
              }}>

              <Grid container spacing={4}  >
                  <Grid item xs={12} md = {5} justifyItems="center">
                    <Box className="relative  z-0 w-48 left-2 top-[15%] sm:w-72 md:w-60 xl:w-72 ">
                    <StyledImg src = {Avatar}/>
                    </Box>   
                  </Grid>
                  
                  <Grid item xs={12} md = {7} >
                    
                      <Typography variant="h1" color = "secondary" textAlign="center"  pb={2} >Phedro Henrick</Typography>
                      <Typography variant="h2" color = "secondary" textAlign="center" >{t('title')}</Typography>

                    <Grid container display="flex" justifyContent="center" spacing={2} pt={3} marginBottom={3} >
                          <Grid item xs = {12} md={6} display= "flex" justifyContent="center">
                            
                              <StyledButton onClick={()=> {handleDownload()}}>
                                <DownloadIcon/>
                                <Typography>
                                    {t('btnCv')}
                                </Typography>
                              </StyledButton>
                           
                          </Grid>
                      <Grid item  xs = {12} md={6}  display= "flex" justifyContent="center" >
                        
                      <StyledButton onClick={() => {HandleClickConatact("#footer")}} >
                          <EmailIcon />
                          <Typography>
                          {t('btnContact')}
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
              </motion.div>
              
              </Container>

             
          </StyledHero> 
        
      </>
    )

  }
  export default Hero

  

  