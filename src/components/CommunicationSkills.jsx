import { Box, Center, Heading, ListItem, UnorderedList } from "@chakra-ui/react"

export const CommunicationSkills = () => {
    return (
        <div name="CommunicationSkills">
            <Box marginBottom={"65px"} bg='rgb(51,65,85)'>
                <Center>
                    <Heading as={'u'} color={'white'} fontSize={["25px", "25px", "36px", "36px"]}>
                        MY SOFT SKILLS
                    </Heading>
                </Center>
                <Center>
                    <Box marginTop={'30px'} borderRadius="15px" padding={'20px'} bg={'rgb(15,23,42)'}>
                        <UnorderedList>
                        <ListItem color={'white'} fontSize={["20px", "20px", "30px", "30px"]}>Team Work</ListItem>
                        <ListItem color={'white'} fontSize={["20px", "20px", "30px", "30px"]}>Time Management</ListItem>
                        <ListItem color={'white'} fontSize={["20px", "20px", "30px", "30px"]}>Problem Solving Mindset</ListItem>
                        </UnorderedList>
                        
                    </Box>
                </Center>
            </Box>

        </div>
    )
}