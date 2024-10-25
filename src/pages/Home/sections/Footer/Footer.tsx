import styled from "@emotion/styled"
import AnimatedBackground from "../../../../assets/images/AnimatedBackground/Footer.svg";
import {Box, Container, Grid, IconButton, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { downloadFile } from "../../../../components/Functions/DownloadFile";
import theme from "../../../../theme";
import AvatarRafa from "../../../../assets/images/rafa.jpg"
import { Avatar } from "@nextui-org/react";
import 'tailwindcss/tailwind.css'; // Importa os estilos do Tailwind


const Footer = () =>{ //uma notação diferente para function 
  const StyledFooter = styled("div")(({}) => ({
    backgroundImage: `url(${AnimatedBackground})`,
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       backgroundPosition: 'center',
       height: "100vh",
       width: "100%",
       maxWidth:"100%",
       display: "flex",
       alignItems: "center",
       marginTop: "-10vh", // Subir a seção, diminuindo a altura da parte superior
       
     }))

     const StyledImg = styled("img")(() => ({
      width:"10%",
      borderRadius :"50%",
      border: `1px solid ${theme.palette.primary.dark}`,

     
    
}))
  

     const StyledDownloadCv = styled("div")(({theme}) => ({
      width: "80%", // Define a largura padrão como 80%
      display: "flex",
      justifyContent: "flex-end", // Alinha o botão à direita por padrão
      alignItems: "center",       // Centraliza verticalmente o conteúdo
    
      // Estilo para telas menores que 600px
      
    
    

     }))
     
     const handleDownload = () => {
      downloadFile("phedro henrick - resume.pdf");
    }
     const HandleClick = (link: string) => {
        window.location.href = link;
    };
    return (
      <>
      <StyledFooter id="footer">
      <Container>
     
                <Grid container className="grid mt-80">
                <Grid 
                        item 
                        xs={12} 
                        md={12} 
                        display="flex" 
                        justifyContent="flex-start" 
                        alignItems="flex-start"
                        marginTop="40px"

                
                      >
                        
                          <IconButton onClick={handleDownload} >                 
                            <Typography variant="h5" color="primary" fontWeight="bold" style={{ textDecoration: 'underline', cursor: 'pointer',}}>
                              Download CV
                              <DownloadForOfflineIcon color= "primary" sx={{ fontSize: 100, ml: 2 }} />

                            </Typography>
                          </IconButton>
                        
                      </Grid>


                      <Grid 
                            item 
                            xs={12} 
                            md={12} 
                          display="flex" 
                          justifyContent="flex-start" 
                          alignItems="flex-end"
                          >
                          <Typography variant="h5" color="secondary" pb={2} fontWeight="bold" >
                            (62) 998506064
                            <PhoneIcon sx={{ fontSize: 30, ml: 2 }} />
                          </Typography> 
                         

                      </Grid>
                      <Grid 
                        item 
                        xs={12} 
                        md={12} 
                        display="flex" 
                       justifyContent="flex-start" 
                        alignItems="flex-end"
                      >
                      
                          <Typography variant="h5" color="secondary" pb={2} fontWeight="bold">
                          
                            phedrohenrickdasilva@gmail.com
                            <EmailIcon sx={{ fontSize: 30, ml: 2 }} />
                          </Typography>
                      </Grid>
                      <Grid 
                        item 
                        xs={12} 
                        md={12} 
                        display="flex" 
                        justifyContent="flex-Start" 
                        alignItems="flex-end"
                      >
                          <Typography variant="h5" color="secondary" pb={2} fontWeight="bold" >
                           
                            <a onClick={()=>HandleClick("https://wa.me/5562998506064")} target="_blank"  style={{ textDecoration: 'underline', cursor: 'pointer'}} > Mande-me uma mensagem</a>
                            <WhatsAppIcon sx={{ fontSize: 30, ml: 2 }} />
                          </Typography>
                      </Grid>
            
                     
              
                </Grid>
        </Container>
      </StyledFooter>
      </>
    )
  }
  
  export default Footer
  