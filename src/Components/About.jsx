import { Box, Center, Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";

export default function About() {
  return (
    <Box py={["20px", "", "80px"]} id="about" className="about section">
      <Center pb="30px">
        <Heading color={"#B0BEC5"}>All About Me</Heading>
      </Center>
      <Flex
        justifyContent={"center"}
        flexWrap="wrap"
        m={"auto"}
        gap={2}
        width={"80%"}>
        {/* <Box> */}
        <Text
          w={["100%", "80%", "80%", "40%"]}
          // px={["10px", "7px", "2px"]}
          textAlign={["left", "left", "left", "right"]}
          fontSize={["22px", "25px", "35px"]}
          lineHeight="1.13em"
          fontWeight={"bold"}
          letterSpacing="0.01em">
          Hi. I'm{" "}
          <Text color={"#fff"} display="inline">
            Arpit
          </Text>
          , nice to meet <br />
          you. Please take a look <br />
          around.
        </Text>
        {/* </Box> */}
        {/* <Box> */}
        <Text
          // px={["40px", "7px", "2px"]}
          // border={"1px solid"}
          color="#fff"
          id="user-detail-intro"
          // border={"1px solid"}
          w={["100%", "80%", "80%", "40%"]}>
          As a React web developer, I specialize in HTML, CSS, JavaScript, React, and Redux, bringing a keen eye for crafting dynamic and responsive user interfaces. My expertise extends to enhancing frontend functionality, ensuring seamless user experiences with a passion for clean and efficient code. Let's collaborate to build exceptional and functional web interfaces.
        </Text>
        {/* </Box> */}
      </Flex>
    </Box>
  );
}
