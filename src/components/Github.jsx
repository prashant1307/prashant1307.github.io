import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Link,
} from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar"; 

const Github = () => {
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;
  
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div style={{ marginBottom: "25px" }}>
      <Box marginTop={20} bg='rgb(51,65,85)'>
        <Center>
          <Heading as={'u'} color='white' fontSize={"31px"}>
            MY GITHUB STATISTICS
          </Heading>
        </Center>
        <Center>
          <Box marginTop={10} borderRadius="10" padding="5" bg="white" w={["80%", "80%"]}>
            <Center>
            <GitHubCalendar style={{margin:"auto"}}
      username="prashant1307"
      // transformData={selectLastHalfYear}
      hideColorLegend
      blockSize={14}
      blockMargin={6}
      fontSize={20}
      />
            {/* <GitHubCalendar
              username="prashant1307"
              blockSize={15}
              blockMargin={5}
              color="green"
              fontSize={16}
            /> */}
            </Center>
          </Box>
        </Center>
        
          <Center>
        <Flex marginTop={[7,7,10,10]} gap={[5,10,10,10]} w={"80%"} flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}>
           
            <Box>  
            <Image
              width={["100%", "100%", "100%", "100%"]}
              src="https://camo.githubusercontent.com/fa83a61ac374edd7e9057b5357fc33f29b884ef4a49630b6da992f179aea88d6/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d7072617368616e743133303726"
            />
            </Box>
            <Box>
            <Image
              width={["100%", "100%", "100%", "100%"]}
              src="https://camo.githubusercontent.com/d8571400eb27464b6bb836e262f6f5346b24c56ad56b95c42d7ba995213e4a6b/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d7072617368616e74313330372673686f775f69636f6e733d74727565266c6f63616c653d656e"
            />
            </Box>
        </Flex>
          </Center>
      </Box>
    </div>
  );
};

export default Github;
