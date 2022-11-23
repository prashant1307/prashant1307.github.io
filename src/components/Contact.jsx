import { Box, Center, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillGithub, AiTwotoneMail } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn, FaHackerrank } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div name="contact" style={{background:"rgb(51,65,85)",paddingTop:"40px"}}>
      <Box paddingBottom="50px" bg='rgb(51,65,85)'>
        <Center>
          <Heading as={'u'} color={'white'} fontSize={["25px", "25px", "36px", "36px"]}>
             CONTACT ME
          </Heading>
        </Center>
        <Center>
        <Text marginTop={'20px'} color={'white'}>Email- prashantlorgev8@gmail.com</Text>
        
        </Center>
        <Center>
        <Text marginTop={'10px'} color={'white'}>Phone no.- +91 9813330949</Text>
        </Center>
        <Center>
          
          <Flex marginTop={7} gap={50}>
            <a
              href="https://www.linkedin.com/in/prashantkumarv8"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn color="white" size="27px"/>
            </a>
            <a
              href="https://github.com/prashant1307"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub color="white" size="27px" />
            </a>
            <a
              href="https://www.hackerrank.com/prashantlorgev8"
              style={{ color: "white" }}
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaHackerrank color="white" size="27px" />
            </a>
            <a
              href={"tel:9813330949"}
              style={{ color: "white" }}
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <BsFillTelephoneFill color="white" size="27px" />
            </a>
            <a
              href={"mailto:prashantlorgev8@gmail.com"}
              style={{ color: "black" }}
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiTwotoneMail color="white" size="27px" />
            </a>
          </Flex>
        </Center>
      </Box>
    </div>
  );
};

export default Contact;
