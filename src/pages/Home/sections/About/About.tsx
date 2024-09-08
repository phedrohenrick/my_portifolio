import styled from "@emotion/styled"
import theme from "../../../../theme";
import { ThreeMpTwoTone } from "@mui/icons-material";
import thread from "../../../../components/AnimatedBackground/Thread.svg";




const About = () =>{  //uma notação diferente para function 


    const StyledAbout = styled("div")(({}) => ({
      backgroundImage: `url(${thread})`,
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
          <StyledImg>

          </StyledImg>

        </StyledAbout>
      </>
    )
  }
  
  export default About
  