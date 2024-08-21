import styled from "@emotion/styled"
import theme from "../../theme"
import { ReactNode } from "react"


interface StyledButtonProps{
    children: ReactNode
}
const StyledButton: React.FC<StyledButtonProps> = ({children}) =>{  //uma notação diferente para function // estudar sobre children

    const StyledButton = styled("button")(() => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: "3px",
    padding: "5 px",
    width: "100%",
    color: theme.palette.primary.light,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    '&:hover':{
      backgroundColor: theme.palette.secondary.light
    }
    

    
    }))
    
    return (
      <>
        <StyledButton>
            {children}
        </StyledButton>
      </>
    )
  }
  
  export default StyledButton
  