import styled from "@emotion/styled"
import theme from "../../../../theme";




const About = () =>{  //uma notação diferente para function 


    const StyledAbout = styled("div")(({theme}) => ({
       backgroundColor: "#dfe8e8",
       backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: "120vh",
        width: "100vw",
        display: "flex",
        alignItems: "center"
      }))

      const StyledImg = styled("img")(() => ({
        width:"90%",
        borderRadius :"50%",
        border: `1px solid ${theme.palette.primary.dark}`,
  }))
    
    return (
      <>

        <StyledAbout>

        </StyledAbout>
      </>
    )
  }
  
  export default About
  