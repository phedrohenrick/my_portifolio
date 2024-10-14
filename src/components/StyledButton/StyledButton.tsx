import styled from "@emotion/styled"
import theme from "../../theme"
import { ReactNode} from "react"
import {downloadFile} from "../Functions/DownloadFile.tsx"

interface StyledButtonProps{
    children: ReactNode
    onClick: () => void
}


const StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) =>{  //uma notação diferente para function // estudar sobre children
 
  const handleDownload = () => {
    downloadFile("phedro henrick - resume.pdf");
  } 


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
        <StyledButton onClick={handleDownload}>
            {children}
        </StyledButton>
      </>
    )
  }
  
  export default StyledButton
  