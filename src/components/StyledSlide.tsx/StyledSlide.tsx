import {useState } from "react";
import {ProjectsInterface} from "../../interfaces/Projects.tsx";
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { styled } from "@mui/material";
import "swiper/swiper-bundle.css";
import { Image } from "@nextui-org/react";



    const projectList: ProjectsInterface[] = [

      {
          title: " Meu portifolio",
          description: "Este portfólio é uma aplicação estática desenvolvida em React para exibir meus projetos e habilidades como desenvolvedor full stack. Com uma navegação fluida por meio de âncoras e um design moderno e responsivo, o site tem como objetivo fornecer uma visão clara e objetiva das minhas competências técnicas e realizações em projetos pessoais e profissionais.",
          imageUrl: "DownloadFiles/images/portifolio.png",
          link: "https://github.com/phedrohenrick/phedrohenrick-My_portifolio",
          technologies: [
              "React",
              "TypeScript",
              "StyledComponents",
              "HTML5",
              "CSS3",
              "JavaScript"
          ],
          isInDevelopment: false,
          
      },

      {
        title: "Spring Rest Api",
        description: "Este projeto consiste em uma API RESTful desenvolvida com Spring Boot, oferecendo operações CRUD (Create, Read, Update, Delete) para o gerenciamento de recursos. A API foi projetada para ser escalável, de fácil manutenção e com foco na eficiência, utilizando as melhores práticas de desenvolvimento backend.",
        imageUrl: "DownloadFiles/images/api.png",
        link: "https://github.com/phedrohenrick/Spring_webCrude",
        technologies: [
          "Spring boot", 
          "Spring Data JPA", 
         " PostgreSQL", 
         " Spring Security", 
         " Maven"
        ],
        isInDevelopment: false
      },

      {
        title: "Estoque",
        description: "é uma aplicação frontend desenvolvida em Angular, voltada para o controle e monitoramento de estoques. A interface permite visualizar e gerenciar os itens de um inventário de forma intuitiva e eficiente. A aplicação conta com uma tela dedicada ao gerenciamento de produtos, onde é possível adicionar, editar, visualizar e remover itens, facilitando o acompanhamento do estoque em tempo real.",
        imageUrl: "DownloadFiles/images/dashboard.png",
        link: "https://github.com/phedrohenrick/Angular_webCrud",
        technologies:[
          "framework Angular",
           "TypeScript", 
           "JavaScript", 
           "HTML", 
           "CSS", 
           "framework Spring"
          ],
        isInDevelopment: false
      },   
      
    ]
 
    
    const StyledSwiper = styled(Swiper)(() => ({
       
      minWidth  : "100%",
      height: "100%",
      padding: "20px",
      backgroundColor: "#eef7f7", // cor de fundo do swiper

      "& .swiper-slide": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dfe8e8", // cor de fundo do slide
        borderRadius: "25px", // arredondar os cantos do slide
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // sombra do slide
       
      },
    }))

  

    // const SlideCardStyled = styled(motion.div)(() => ({
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   padding: '20px',
    //   borderRadius: "15px",
    //   width: "500px", // Define uma largura padrão para os slides
    //   height: "350px", // Define uma altura padrão para os slides
    //   cursor: "pointer",
    //   transition: "transform 0.3s ease", // Suave ao passar o mouse
    //   objectFit: "cover",
      
      

    //   ".slide-image": {
    //     width: "175%",           // Imagem ocupa a largura total do slide
    //     height: "60%",          // Define uma altura fixa para a imagem
    //     borderRadius: "20px",     // Arredonda os cantos da imagem
    //     objectFit: "cover",       // Garante que a imagem cubra o espaço corretamente
    //     marginBottom: "-10px",     // Espaçamento entre a imagem e o título
    //     paddingTop: "20px",
    //     "@media (max-width: 1024px)": {
    //       width: "125%",      // Reduz a largura da imagem para telas menores
    //       height: "60%",    // Mantém a altura proporcional
          
    //     },"@media (max-width: 259px)": {
    //       width: "105%",      // Reduz a largura da imagem para telas menores
    //       height: "60%",    // Mantém a altura proporcional
          
          
    //     },"@media (max-width: 818px)": {
    //       width: "120%",      // Reduz a largura da imagem para telas menores
    //       height: "80%",    // Mantém a altura proporcional
          
    //     },
        
    //   },
    
    //   ".slide-title": {
    //     fontSize: "1.5 rem",       // Tamanho da fonte do título
    //     fontWeight: "600",
    //     color: "#333",            // Cor do título
    //     textAlign: "center",      // Centraliza o título
    //     marginBottom: "5px",      // Espaçamento inferior do título
    //   },
      
    
    //   "&:hover": {
    //     transform: "scale(1.025)", // Efeito de zoom ao passar o mouse
    //   },
    // }));

    const HandleClick = (link: string) => {
        window.location.href = link;
    };
   
    

    const ProjectSlide: React.FC = () =>{  //uma notação diferente para function
      const [selectedId, setSelectedId] = useState<number | null>(null);

          
      return (

        <div className="w-[100%] relative">
        <StyledSwiper
          slidesPerView={1.65}
          spaceBetween={15}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 2.5,
            },
          }}
          className="z-50 top-1/2 h-auto"
        >
          {projectList.map((data, index) => (
            <SwiperSlide key={index} onClick={() => setSelectedId(index)}>
              <motion.div layoutId={`card-${index}`} className="relative">
                {data.imageUrl ? (
                  <motion.div
                    layoutId={`image-${index}`}
                    className="relative"
                    style={{ paddingTop: "10%" }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image
                      alt="Project image"
                      src={data.imageUrl}
                      style={{ objectFit: "cover" }}
                      className="w-full h-full bg-primary"
                    />
                  </motion.div>
                ) : (
                  <div
                    className="relative bg-secondary flex items-center justify-center text-white"
                    style={{ paddingTop: "80%" }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-[65%] sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold mt-4" >
                      In Development
                    </div>
                  </div>
                )}
                <p className="font-semibold text-[85%] mt-1 md:mt-2 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  {data.title}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </StyledSwiper>
        <AnimatePresence>
            {selectedId !== null && (
              <motion.div
                layoutId={`card-${selectedId}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 flex items-center justify-center z-50 pointer-events-auto"
                onClick={() => setSelectedId(null)}
              >
                <motion.div
                  className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-[70%] md:w-1/2 lg:w-[40%] max-h-full overflow-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative">
                    {projectList[selectedId]?.imageUrl && (
                      <motion.div
                        layoutId={`image-${selectedId}`}
                        className="relative pt-[70%]"
                      >
                        <img
                          alt="Project image"
                          src={projectList[selectedId].imageUrl}
                          className="absolute top-0 left-0 w-full h-auto bg-primary"
                        />
                      </motion.div>
                    )}
                    <motion.h5 className="text-lg font-bold mt-4">
                      {projectList[selectedId]?.title}
                    </motion.h5>
                    <motion.p className="mt-4">
                      {projectList[selectedId]?.description}
                    </motion.p>
                    <motion.p className="mt-4">
                      <span className="font-bold">Technologies:</span>{" "}
                      {projectList[selectedId]?.technologies.join(", ")}
                    </motion.p>
                    {projectList[selectedId]?.isInDevelopment && (
                      <motion.p className="mt-4">In Development</motion.p>
                    )}
                    <div className="flex justify-end gap-4">
                      <motion.button
                        className="m-5 px-5 py-2.5 bg-[#8ca0a2] text-white border-none rounded-full cursor-pointer text-base"
                        onClick={() => setSelectedId(null)}
                      >
                        Fechar
                      </motion.button>
                      <motion.a
                        target="_blank"
                        onClick={() => HandleClick(projectList[selectedId]?.link)}
                        className="m-5 px-5 py-2.5 bg-[#144146] text-white border-none rounded-full cursor-pointer text-base"
                      >
                        Visite o projeto
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        )
}

      
      export default ProjectSlide;
