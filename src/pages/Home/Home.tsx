import NavBar from "../../components/NavBar/NavBar"
import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import Project from "./sections/Projects/Projects"


const Home = () =>{  //uma notação diferente para function 

    return (
      <>
      <NavBar/>
      <Hero/>
      <About/>
      <Project/>
      </>
    )
  }
  
  export default Home
  