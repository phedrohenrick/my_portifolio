import styled from "@emotion/styled"
import { ReactNode } from "react"
import { Card } from "@mui/material"
import CardContent from '@mui/material/CardContent';

interface AtyledCardSkillProps{
  children: ReactNode

}

const AtyledCardSkill: React.FC<AtyledCardSkillProps> = ({children}) =>{  //uma notação diferente para function 


    const StyledCard = styled(Card)(() => ({
        backgroundColor:"#d4e0e0",
        padding: "20px",
        color: "#fffff",
        borderRadius: " 40px 40px 40px 40px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        width: "600px",
        height: "200px",
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
        <StyledCard>
          {children}
        </StyledCard>
      </>
    )
  }
  
  export default AtyledCardSkill
  