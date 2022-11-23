import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <div name="about" style={{background:"rgb(51,65,85)"}}>
      <Center>
       <Heading marginTop={'70px'} as={'u'} color='white' fontSize={"36px"}>
            ABOUT ME
          </Heading>
          </Center>
      <Flex
      bg="rgb(51,65,85)"
        flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}
       
        padding={"0px 35px 80px 35px"}
        alignItems={"center"}
        gap={10}
        
        marginBottom={35}
        justifyContent={"space-around"}
      >
        <Box   >
          <Image h={["250px","250px","250px","300px"]} src='https://camo.githubusercontent.com/041c42a3a41e3093ed6e478e6e1df9fc16002969498c0c3632fe4a06746ea11f/68747470733a2f2f64657369676e62756666732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032302f31312f426f792d576f726b696e672d46726f6d2d486f6d652e676966' />
        </Box>
       
        <Box w={['100%','80%','70%','70%']}>
         
         
          
          <UnorderedList marginTop={7} lineHeight={2}>
            <ListItem lineHeight={'25px'} color='white' fontSize={["12px", "15px","15px","20px"]}>
            Aspiring Full-Stack Web Developer, passionate about learning the latest technology and curious in thinking how that can improve the existing products. Always try to make the user experience more smooth by making the best use of my skills and I always strive for improvement in everything.
            </ListItem>

            <ListItem marginTop={'20px'} lineHeight={'25px'} color='white' fontSize={["12px", "15px","15px","20px"]}>
              I Love solving DSA problems on some online platforms like HackerRank & LeetCode, also I've got 5-star for problem solving on HackerRank.
            </ListItem>
            <ListItem marginTop={'20px'} lineHeight={'25px'} color='white' fontSize={["12px", "15px","15px","20px"]}>
             About my Hobbies I love Reading blogs, Writing Poetry and to express myself and for that reason I've also performed at various Open-Mic events.
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </div>
  );
};

export default About;
