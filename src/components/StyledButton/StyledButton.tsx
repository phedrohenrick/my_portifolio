import styled from "@emotion/styled"
import theme from "../../theme"
import { ReactNode} from "react"

interface StyledButtonProps{
    children: ReactNode
    onClick: () => void
}


const StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) =>{  //uma notação diferente para function // estudar sobre children
 
 

    const StyledButton = styled("button")(() => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.light}`, 
    borderRadius: "3px",
    padding: "4px",
    width: "100%",
    color: "#dfe8e8",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    '&:hover':{
      backgroundColor: "#012c32",
      border: `1px solid ${"#012c32"}`,
    },


   '@media (max-width: 900px)': { // Ajuste para dispositivos menores
    backgroundColor: "#012c32",
    border: `1px solid ${"#012c32"}`,  
    borderRadius: "5px",
    boxShadow:" 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
    },

    


    }))
    
    return (
      <>
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
      </>
    )
  }
  
  export default StyledButton
  