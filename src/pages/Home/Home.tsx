import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import Project from "./sections/Projects/Projects"
import Footer from "./sections/Footer/Footer"
import WhatPeopleThink from "./sections/WhatPeopleThink/WhatPeopleThink"

const Home = () =>{  //uma notação diferente para function 

    return (
      <>
      <Hero/>
      <About/>
      <Project/>
      <WhatPeopleThink/>
      <Footer/>
      </>
    )
  }
  
  export default Home
  