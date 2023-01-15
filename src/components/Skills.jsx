import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaReact } from "react-icons/fa";
import {
  SiChakraui,
  SiExpress,
  SiHeroku,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNodedotjs,
  SiNodemon,
  SiPostman,
  SiRailway,
  SiRedux,
  SiSwiper,
  SiVercel,
} from "react-icons/si";

let skillsData = [
  {
    icon: <AiFillHtml5 color="#90CDF4" size="50px" />,
    name: "HTML",
  },
  {
    icon: <FaCss3Alt color="#90CDF4" size="50px" />,
    name: "CSS",
  },
  {
    icon: <FaBootstrap color="#90CDF4" size="50px" />,
    name: "Bootstrap",
  },
  {
    icon: <SiJavascript color="#90CDF4" size="50px" />,
    name: "Javascript",
  },
  {
    icon: <FaReact color="#90CDF4" size="50px" />,
    name: "React",
  },
  {
    icon: <SiRedux color="#90CDF4" size="50px" />,
    name: "Redux",
  },
  {
    icon: <SiChakraui color="#90CDF4" size="50px" />,
    name: "Chakra UI",
  },
  {
    icon: <SiNodedotjs color="#90CDF4" size="50px" />,
    name: "Node JS",
  },
  {
    icon: <SiExpress color="#90CDF4" size="50px" />,
    name: "Express",
  },
  {
    icon: <SiMongodb color="#90CDF4" size="50px" />,
    name: "MongoDB",
  },
  {
    icon: <FaGitAlt color="#90CDF4" size="50px" />,
    name: "Git",
  },
  {
    icon: <SiPostman color="#90CDF4" size="50px" />,
    name: "Postman",
  },
  {
    icon: <SiNetlify color="#90CDF4" size="50px" />,
    name: "Netlify",
  },
  {
    icon: <SiVercel color="#90CDF4" size="50px" />,
    name: "Vercel",
  },
  {
    icon: <SiHeroku color="#90CDF4" size="50px" />,
    name: "Heroku",
  },
  {
    icon: <SiRailway color="#90CDF4" size="50px" />,
    name: "Railway",
  },
  {
    icon: <SiNodemon color="#90CDF4" size="50px" />,
    name: "Nodemon",
  }
  
];

const Skills = () => {
  return (
    <div name="skills">
      <Box marginBottom={"65px"} bg='rgb(51,65,85)'>
        <Center>
          <Heading as={'u'} color={'white'} fontSize={["25px","25px","36px","36px"]}>
            MY TECHNICAL SKILLS
          </Heading>
        </Center>
        <Center>
          <Box>
            <SimpleGrid marginTop={10} columns={[2,3,4,6]} spacing={10}>
              {skillsData.map((el) => (
                <Container
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
                centerContent
                background={'rgb(15,23,42)'}
                  border={"1.5px solid "}
                  borderRadius="15px"
                  padding={"7px 0px 7px 0px"}
                  alignItems={"center"}
                  h={"90px"} w={"150px"}
                >
                    <span>{el.icon}</span>
                    
                    <Text color={'white'}>{el.name}</Text>
                </Container>
              ))}
            </SimpleGrid>
          </Box>
        </Center>
      </Box>
    </div>
  );
};

export default Skills;
