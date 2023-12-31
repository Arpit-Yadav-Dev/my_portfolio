import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function GitHubStat() {
  return (
    <Box py={["5px"]} px={["20px", "60px", "80px"]}>
      <Center pb="30px">
        <Heading fontSize={["20px", "25px", "30px", "35px"]} color="#B0BEC5">
          GITHUB STATISTICS
        </Heading>
      </Center>
      <Box>
        <Flex
          justifyContent={"center"}
          alignItems="center"
          gap={6}
          flexWrap="wrap">
          {" "}
          <p>
            <img
              id="github-stats-card"
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=Arpit-Yadav-Dev&show_icons=true&locale=en"
              alt="Arpit-Yadav-Dev"
            />
          </p>
          <p>
            <img
              id="github-streak-stats"
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com/?user=Arpit-Yadav-Dev&"
              alt="Arpit-Yadav-Dev"
            />
          </p>
        </Flex>
        <Center pt={6}>
          <p>
            <img
              id="github-top-langs"
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=Arpit-Yadav-Dev&show_icons=true&locale=en&layout=compact"
              alt="Arpit-Yadav-Dev"
            />
          </p>
        </Center>
      </Box>
    </Box>
  );
}
