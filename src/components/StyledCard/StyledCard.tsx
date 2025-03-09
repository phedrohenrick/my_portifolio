import styled from "@emotion/styled"
import { ReactNode } from "react"
import { Card } from "@mui/material"

interface StyledCardSkillProps{
  children: ReactNode
}

const StyledCardSkill: React.FC<StyledCardSkillProps> = ({children}) =>{  //uma notação diferente para function 


    const StyledCard = styled(Card)(() => ({
          backgroundColor: "#d4e0e0",
          padding: "40px",
          color: "#ffffff",
          borderRadius: "25px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          width: "100%",  // Permite que o card se ajuste ao container pai
          maxWidth: "500px", // Mantém um limite para não ficar muito grande
          height: "auto",  // Altura automática para se ajustar ao conteúdo
          display: "flex",
          flexDirection: "column",  // Empilha os elementos verticalmente
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",  // Impede que os itens vazem para fora do card
        
          '@media (max-width: 768px)': {
            padding: "20px", // Reduz o padding para mais espaço interno
            maxWidth: "90%"
        },
    
        '@media (max-width: 480px)': {
            padding: "10px", // Reduz ainda mais o padding
            maxWidth: "100%",
            flexWrap: "wrap"  // Permite que os itens quebrem linha em telas pequenas
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
  