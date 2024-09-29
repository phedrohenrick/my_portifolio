import styled from "@emotion/styled"
import theme from "../../../../theme";
import AnimatedBackground from "../../../../components/AnimatedBackground/ProjectScreen.gif";


const Project = () =>{  //uma notação diferente para function 

    const StyledProjects = styled("div")(({theme}) => ({
      backgroundImage: `url(${AnimatedBackground})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center',
         height: "100vh",
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
 
         <StyledProjects>
 
         </StyledProjects>
       </>
     )
}

export default Project
