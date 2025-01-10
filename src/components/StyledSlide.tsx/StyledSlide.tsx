import {useState } from "react";
import {ProjectsInterface} from "../../interfaces/Projects.tsx";
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css";
import { Image } from "@nextui-org/react";
import { Trans } from 'react-i18next';
import { t } from "i18next";


    const projectList: ProjectsInterface[] = [

      {
          title:  
          <Trans
          i18nKey="title_p1" 
         components={{ 1:  <span style= {{color: "#E67E22"}}/>}} 
         />
         ,
          description: 
          <Trans
          i18nKey="desc_p1" 
         components={{ 1:  <span style= {{color: "#E67E22"}}/>}} 
         />
         ,
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
        title: <Trans
        i18nKey="title_p2" 
       components={{ 1:  <span style= {{color: "#E67E22"}}/>}} 
       />,
        description: <Trans
        i18nKey="desc_p2" 
       components={{ 1:  <span style= {{color: "#E67E22"}}/>}} 
       />,
        imageUrl: "DownloadFiles/images/api.png",
        link: "https://github.com/phedrohenrick/Spring_webCrude",
        technologies: [
          "Spring boot", 
          "Spring Data JPA", 
         " PostgreSQL", 
         " Spring Security", 
         " Maven",
         "postgreSQL"
        ],
        isInDevelopment: false
      },

      {
        title: <Trans
        i18nKey="title_p3" 
       components={{ 1:  <span style= {{color: "#E67E22"}}/>}} 
       />,
        description: <Trans
        i18nKey="desc_p3" 
       components={{ 1:  <span style= {{color: "#E67E22"}}/>}} 
       />,
        imageUrl: "DownloadFiles/images/dashboard.png",
        link: "https://github.com/phedrohenrick/Angular_webCrud",
        technologies:[
          "framework Angular",
           "TypeScript", 
           "JavaScript", 
           "HTML", 
           "CSS", 
           "framework Spring",
           "Java",
           "JPA",
           "postgreSQL"
          ],
        isInDevelopment: false
      },   
      {
        title: <Trans
        i18nKey="title_p4" 
       components={{ 1:  <span style= {{color: "#E67E22"}}/>}} 
       />,
        description: "",
        imageUrl: "DownloadFiles/images/inDevelopment.png",
        link: "https://github.com/phedrohenrick",
        technologies:[
          "framework Angular",
           "TypeScript", 
           "JavaScript", 
           "HTML", 
           "CSS", 
           "framework Spring",
           "Java",
           "JPA",
           "postgreSQL"
          ],
        isInDevelopment: true
      },
      {
        title: <Trans
        i18nKey="title_p5" 
       components={{ 1:  <span style= {{color: "#E67E22"}}/>}} 
       />,
        description: <Trans
        i18nKey="desc_p5" 
       components={{ 1:  <span style= {{color: "#E67E22"}}/>}} 
       />,
        imageUrl: "DownloadFiles/images/OBI.png",
        link: "https://github.com/phedrohenrick/SistemaOBI",
        technologies:[
           "Java",
           "JavaSwing",
           "postgreSQL",
           "MVC",
          ],
        isInDevelopment: false
      },   
      
    ]

    const HandleClick = (link: string) => {
        window.location.href = link;
    };
   
    

          const ProjectSlide: React.FC = () =>{  //uma notação diferente para function
            const [selectedId, setSelectedId] = useState<number | null>(null);

            
      return (

        <div className="w-[100%] relative">

        <Swiper
          slidesPerView={1.65}
          loop={true}
          spaceBetween={15}
          breakpoints={{
            1024: {
              slidesPerView: 2.1,
            },
            300: {
              slidesPerView: 1.1,
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
                  className = "relative"
                  style = {{paddingTop : "3%"}}
                  whileHover={{scale:0.9}}

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
                <p className="font-semibold text-[85%] mt-4 md:mt-2 sm:text-base md:text-lg lg:text-xl xl:text-2xl justify-l">
                  {data.title}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        
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
                      <span className="font-bold">{t("technology")}</span>{" "}
                      {projectList[selectedId]?.technologies.join(", ")}
                    </motion.p>
                    {projectList[selectedId]?.isInDevelopment && (
                      <motion.p className="mt-4">In Development</motion.p>
                    )}
                    <div className="flex justify-center space-x-[-0.5rem]">
                      <motion.button
                        className="m-5 px-5 py-2.5 bg-[#8ca0a2] text-white border-none rounded-full cursor-pointer text-base "
                        onClick={() => setSelectedId(null)}
                      >
                        {t("btnClose")}
                      </motion.button>
                      <motion.a
                        target="_blank"
                        onClick={() => HandleClick(projectList[selectedId]?.link)}
                        className="m-5 px-5 py-2.5 bg-[#E67E22] text-white border-none rounded-full cursor-pointer text-base"
                      >
                       {t("btnOpen_p")}
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
