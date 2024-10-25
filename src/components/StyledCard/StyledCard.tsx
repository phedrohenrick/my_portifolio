import styled from "@emotion/styled"
import { ReactNode } from "react"
import { Card } from "@mui/material"
import { motion } from "framer-motion";

interface StyledCardSkillProps{
  children: ReactNode
}

const StyledCardSkill: React.FC<StyledCardSkillProps> = ({children}) =>{  //uma notação diferente para function 


    const StyledCard = styled(Card)(() => ({
        backgroundColor:"#d4e0e0",
        padding: "10px",
        color: "#fffff",
        borderRadius: " 25px 25px 25px 25px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        width: "600px",
        height: "200px",
        maxwidth: "100vw",
        display: "inline-flex",
        alignItems: "center",
     
       
       
        '@media (max-width: 768px)': {
          maxWidth: "90%" // Ajuste menor para dispositivos móveis
        },

        '@media (max-width: 480px)': {
          maxWidth: "100%", // Ajuste menor para dispositivos móveis
          padding: "10px" /* Ajusta padding para telas muito pequenas */
        },
      
        
  }))

    return (
      <>
        <StyledCard className="p-50">
          {children}
        </StyledCard>
      </>
    )
  }
  
  export default StyledCardSkill
  