import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiMysql,
  DiHtml5,
  DiCss3Full,
  DiGit,
  DiGithubBadge,
} from "react-icons/di";

import {
  SiMaterialui,
  SiExpress,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiStyledcomponents,
  SiBootstrap,
  SiRedux,
  SiChakraui,
} from "react-icons/si";

import Modesens from "../Assets/Projects/modesens.jpg";
import Toggl from "../Assets/Projects/toggl.jpg";
import DotAndKey from "../Assets/Projects/dotandkey.jpg";
import Youtube from "../Assets/Projects/miniYT.jpg";

const projectsData = [
  {
    imgPath: "https://i.ibb.co/bs1QFqn/Screenshot-764.png",
    title: "ASOS_Clone",
    description:
      "ASOS.com is an UK based E-commerce Website which mainly deals in fashion and cosmetic products.",
      p1:"An Individual project, built in 5 days.",
      stack: "React | Chakra-UI | Firebase | Git",
    link: "https://github.com/prashant1307/vestal-branch-2641",
    demo: "https://asos-clone-123.netlify.app/",
   
  },
  {
    imgPath: Toggl,
    title: "Toggl Track Clone",
    description:
      "Toggl Track offers online time tracking and reporting services through their website along with mobile  application",
      p1:"A Collaborative project built by a team of 5, executed in 5 days.",
      stack: "React | ChakraUI | MongoDb | Express",
    link: "https://github.com/siddikgitt/average-boat-8567",
    demo: "https://average-boat.vercel.app/",
   
  },
  {
    imgPath: "https://i.ibb.co/b5byb7j/Screenshot-769.png",
    title: "Ovestock_Clone",
    description:
      "Overstock.com is an America based internet retailer which mainly deals in furniture and home decor products.",
      p1:"A Collaborative project built by a team of 5, executed in 5 days.",
      stack: "HTML | CSS | JavaScript | Git",
    link: "https://github.com/owii8247/Unit3_Overstock_Project",
    demo: "https://radiant-fairy-66db6d.netlify.app/",
   
  },
  {
    imgPath: "https://user-images.githubusercontent.com/101567990/202131325-3dc3a0ef-dfcd-4cb9-980e-371e35a8a0a2.png",
    title: "Nomado TRAVELERS",
    description:
      "Nomado is a travel booking Website where you can do all your hotel and flight bookings.",
      p1:"A Collaborative project built by a team of 5, executed in 5 days.",
      stack: "React | ChakraUI | MongoDb | Express",
    link: "https://github.com/surajkm24/venomous-plough-7848",
    demo: "https://nomadotravelers.netlify.app/",
   
  }

];

const techStack = {
  javascript: <DiJavascript1 color="crimson" size="40px" />,
  react: <DiReact color="crimson" size="40px" />,
  node: <DiNodejs color="crimson" size="40px" />,
  mongodb: <DiMongodb color="crimson" size="40px" />,
  python: <DiPython color="crimson" size="40px" />,
  sql: <DiMysql color="crimson" size="40px" />,
  html: <DiHtml5 color="crimson" size="40px" />,
  css: <DiCss3Full color="crimson" size="40px" />,
  git: <DiGit color="crimson" size="40px" />,
  mui: <SiMaterialui color="crimson" size="40px" />,
  express: <SiExpress color="crimson" size="40px" />,
  vscode: <SiVisualstudiocode color="crimson" size="40px" />,
  postman: <SiPostman color="crimson" size="40px" />,
  heroku: <SiHeroku color="crimson" size="40px" />,
  styled: <SiStyledcomponents color="crimson" size="40px" />,
  bootstrap: <SiBootstrap color="crimson" size="40px" />,
  redux: <SiRedux color="crimson" size="40px" />,
  chakraui: <SiChakraui color="crimson" size="40px" />,
};

const Project = () => {
  return (
    <div style={{ marginBottom: "25px",background:"rgb(51,65,85)" }} name="projects">
      <Center>
        <Heading as={'u'} color={'white'} fontSize={["25px", "25px", "36px", "36px"]}>
          MY PROJECTS
        </Heading>
      </Center>
      <Center>
      <Box>
      <SimpleGrid marginTop={10} columns={[1, 1, 1, 2]} spacing={10}>
        {projectsData.map((el) => (
          <Center>
            <Box
            background='rgb(15,23,42)'
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
              border={"1.5px solid "}
              borderRadius="15px"
              padding={"20px 20px"}
              alignItems={"center"}
              w={["90%", "90%", "450px", "450px"]}
            >
              <Image
                border={"2px solid "}
                borderRadius={"15px"}
                marginTop={0}
                w={"100%"}
                src={el.imgPath}
              />
              <Text  marginBottom={'10px'} color={'white'} fontSize={"22px"} fontWeight={"bold"} textAlign="left">
                {el.title}
              </Text>
              <Text
              marginBottom={'10px'}
              color={'white'}
                fontSize={"15px"}
                textAlign={"left"}
              >
                {el.description}
              </Text>
              <Text  marginBottom={'10px'} color={'white'}
                fontSize={"15px"}
                textAlign={"left"}>{el.p1}</Text>
                
                {/* {el.stack.map((eq) => techStack[eq])} */}
              
                <Text w="100%" p="5px" borderRadius="10px" color={'#abde04'}
                fontSize={"17px"}
                fontWeight="medium"
                textAlign={"left"}>Tech Stack - {el.stack}</Text>
              
              <Flex
                padding={"10px 0px 20px 0px"}
                justifyContent={"space-around"}
                alignItems="center"
              >
                <Link isExternal href={el.demo}>
                  <Box
                    as="button"
                    marginTop={"25px"}
                    height="auto"
                    padding={"10px 15px 10px 15px"}
                    lineHeight="1.2"
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    border="1px"
                    px="40px"
                    borderRadius="7px"
                    fontSize="20px"
                    fontWeight="semibold"
                    bg="#319795"
                    borderColor="#ccd0d5"
                    color="white"
                    _hover={{ cursor: "pointer" }}
                    _active={{
                      bg: "#dddfe2",
                      transform: "scale(0.98)",
                      borderColor: "#bec3c9",
                    }}
                    _focus={{
                      boxShadow:
                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                    }}
                  >
                    Live
                  </Box>
                </Link>
                <Link isExternal href={el.link}>
                  <Box
                    as="button"
                    marginTop={"25px"}
                    height="auto"
                    padding={"10px 15px 10px 15px"}
                    lineHeight="1.2"
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    border="1px"
                    px="40px"
                    borderRadius="7px"
                    fontSize="20px"
                    fontWeight="semibold"
                    bg="#319795"
                    borderColor="#ccd0d5"
                    color="white"
                    _hover={{ cursor: "pointer" }}
                    _active={{
                      bg: "#dddfe2",
                      transform: "scale(0.98)",
                      borderColor: "#bec3c9",
                    }}
                    _focus={{
                      boxShadow:
                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                    }}
                  >
                    Code
                  </Box>
                </Link>
              </Flex>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
      </Box>
      </Center>
    </div>
  );
};

export default Project;
