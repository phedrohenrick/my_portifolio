
import 'tailwindcss/tailwind.css'; // Importa os estilos do Tailwind
import styled from '@emotion/styled';
import {Typography, Container} from '@mui/material';
import AnimatedBackground from "../../../../assets/images/AnimatedBackground/WhatPeopleThink.png"
import { motion } from 'framer-motion';
import rafa from "../../../../assets/images/rafa.jpg";
import adriano from "../../../../assets/images/adriano.jpg";
import { Trans, useTranslation } from 'react-i18next'



const WhatPeopleThink = () =>{ //uma notação diferente para function 
  const {t} = useTranslation();

    const StyledReview = styled("div")(({}) => ({
        backgroundImage: `url(${AnimatedBackground})`,
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
           backgroundPosition: 'center',
           height: "100vh",
           width: "100%",
           maxWidth:"100%",
           display: "flex",
           alignItems: "center",
         }));

         const StyledImg = styled("img")(() => ({
            
            borderRadius :"50%",
           
            '@media (max-width: 640px)': { // Para telas com largura menor que 768px
                display: "block", // Exibir em dispositivos móveis
                width: "10%", // Ajuste a largura para ser responsiva (100% da área disponível)
                maxWidth: "70%", // Limite o crescimento máximo
                borderRadius: "50%", // Aplicando bordas arredondadas

}
      }))

    return (
      <>
     
     <StyledReview >
     <Container>
        <section className="h-auto w-full mt-28 sm:mt-40 md:mt-60  text-black relative">
            <Typography variant="h3" color = "primnary" fontWeight={"bold"} className="flex justify-center items-center text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold z-10">
            {t("title_wpt")}
            </Typography>
            <div className="flex flex-col items-center justify-center p-8 sm:p-0 sm:items-start w-full sm:w-[65%] lg:w-[55%] mt-10 lg:mt-14 sm:ml-[10%]">
              <div className="flex items-center gap-2">

                <StyledImg alt="review rafael" src={rafa} className="h-[15%] sm:w-16 sm:h-16 md:w-20 md:h-20 text-large relative z-20"/>
                  
             <Typography variant="h4" color = "primnary" className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                    <Trans
                          i18nKey="personal_title_Rafa" 
                        components={{ 1:  <span style= {{color: "#E67E22"}}/>}} 
                        />
                </Typography>
              </div>
              <motion.div 
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ 
                opacity: 1,
                x : 50
              }} className="text-md sm:text-lg md:text-xl lg:text-2xl text-left sm:text-center mt-4 mr-6 ">
              <Typography variant="h6" color = "primary" fontWeight= "bold" textAlign="left" >
                  <Trans
                      i18nKey="personal_review_R" 
                    components={{ 1:  <span style= {{color: "#E67E22"}}/>}} 
                    />
              </Typography >
              </motion.div>
            </div>
            
         

      <div className="flex flex-col items-center justify-center p-8 sm:p-0 sm:items-end w-full mt-10 lg:mt-14 sm:pr-[10%] direction-rtl text-right">
        <div className="flex items-center sm:w-[65%] lg:w-[55%] flex-row-reverse gap-2">

        
        <StyledImg  alt="review adriano" src={adriano} className="h-[15%] sm:w-16 sm:h-16 md:w-20 md:h-20 text-large relative z-20"/>

          <Typography variant="h4" className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          <Trans
          i18nKey="personal_title_Adriano" 
         components={{ 1:  <span style= {{color: "#E67E22"}}/>}} 
         />
          </Typography>
        </div>
        
        
        <motion.div  initial={{ opacity: 0, x: 0 }}
                whileInView={{ 
                  opacity: 1,
                  x : -50
                }} className="text-md sm:w-[65%] lg:w-[55%] sm:text-lg md:text-xl lg:text-2xl text-center sm:text-right mt-4 max-w-full sm:max-w-[90%] md:max-w-[80%] ml-6">
            <Typography variant="h6" color = "primary" fontWeight= "bold" textAlign="right">
            <Trans
          i18nKey="personal_review_A" 
         components={{ 1:  <span style= {{color: "#E67E22"}}/>}} 
         />
            </Typography>
          </motion.div >
        
        
        </div>

        </section>
        </Container>
            </StyledReview>
      </>
    )
  }
  
  export default WhatPeopleThink
  