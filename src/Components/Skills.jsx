import React from "react";
import {
  Grid,
  GridItem,
  Link,
  Image,
  Text,
  Center,
  Heading,
  Box,
} from "@chakra-ui/react";
import Flip from "react-reveal/Flip";

const skill = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    title: "React",
    link: "https://react.dev",
  },
  {
    icon: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    title: "Redux",
    link: "https://redux.js.org/",
  },
  // {
  //   icon: "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png",
  //   title: "Typescript",
  //   link: "https://www.typescriptlang.org/",
  // },
  // {
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
  //   title: "Mongo DB",
  //   link: "https://www.mongodb.com/",
  // },
  // {
  //   icon: "https://www.pixelbird.com.au/wp-content/uploads/2020/02/nodejs-image.png",
  //   title: "Node.js",
  //   link: "https://nodejs.org/en",
  // },
  // {
  //   icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
  //   title: "Express",
  //   link: "https://expressjs.com/",
  // },
  {
    icon: "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
    title: "Chakra UI",
    link: "https://chakra-ui.com/",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    title: "SQL",
    link: "https://www.example-sql.com/",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    title: "Material UI",
    link: "https://material-ui.com/",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNke4dXAF9n9RROOv7F4hgxNvfpI7xdTdzpw&usqp=CAU",
    title: "Maps",
    link: "https://www.example-maps.com/",
  },
  {
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAA8PDzOzs6goKCvr6/09PQeHh4XFxfe3t4uLi7i4uI1NTXKysrw8PBQUFC1tbVhYWHT09OkpKTExMTp6em8vLxjY2MlJSWNjY1NTU2ZmZn5+fksLCxYWFhAQEB0dHSDg4MQEBBsbGx6enqRkZGoyzaWAAADjElEQVR4nO3cfVeqMACAcZZpooSmckUlS6vv/xWvoHQuh23C3IZyn99f1lHHYwa+jAUBAAAAAAAAAAAAAAAAAAAAAAAA8B8KNx9Pnfmauw98Ft3axo4D5x0HnhLdBmbvXQcK8cdpYdh13smn08LXrvNOZk4LB13nCQptFc4WA+/mXgvXTkeRm3otfHM6ilxIoRUUukShHRS6RKEdFLoUinFO7J2O0mVhEJ+NnA7SaaEXFD4+Cq3L5p/bWTv73fSGAX0X/hFGDuYjei40DLzlMwi/hbFpoBBD0zH9Fm7MC4XpmH4LZ6eRxu295FsYGo7ptXCUb+piFLdVfLkyMBzUf6HJnn9CoQaFVlGoRKEOhVZRqEShDoVWUah0S2E5n8bt584XnRQmw3luuDK8fSudFHpFoRKFd8NrYbKaS4WZwQY05bEwXguV1OFe1V9hFikDT9wl+ivc6QJF5OyJ6q/wSVsoEoNtaMRfofZJKsSrwTY00k3hsTjdYdPjwv7/DSm0yWvh5llu+dSXQuUR4a0vhcpxKLwFhUoU1lBosA2NUKhEYU2TwsVO8arHzPD+Ci2fxB7dX+HSbuEHhRR2Vrg/vUkZ9rnwfEJPg5m/D1t4OXR+9Lfwcjdf/S1c/d5hXwuLDW+yq3nYQjELg1j/NcijFzZFIYX3/95icn+F4dCq+f0VukChEoU1FF65eSafbHSecaS7YVG4moZtJa3P7LqxULeK3ffVQlM+C3UroGln4j5Moe7FQNS6cJJeLqSTy4Wj9M2Yz8JP3UOtm24kKRwPstGquDQcZWExlekQZ4nkLbXPwr2uULerkRQu8t/nn/M85xfyFdzeyk3srjBLa6P/Q7embL3w/A46EOWJzOuypP7Cv23h61Qu2V8tXOgCxZdhYVYWvloq1LlSONPfWvc03cqvnZ8SscwvJMfyIap/erfwVnjtnPpUM3nzULv2JCyPPqsgiIuun9MVv+v32yawWvgSBtPqf5auMNPuSAtj9aM9lVw9LZ+6x/JoIWR/gR/zwvybvepyyZrC5MrU1LOl8vZNPrSS2rab1lspzHuqa+2qC5OG27OznbhvuZZU5R8+X2y6eoRTH7QHafReLuWQRlWT30UeonfNDjXZRG0XjUjXraeeV3fF6WFS+dnx+tp+aHf4D3FyyjWZZG988WK6hsjdWcg5m6cPAAAAAAAAAAAAAAAAAAAAAAAAWPEXrcdT9DGQ6gMAAAAASUVORK5CYII=",
    title: "Responsiveness",
    link: "https://www.example-responsiveness.com/",
  },
  {
    icon: "data:image/png;base64,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",
    // title: "Axios Call",
    link: "https://axios-http.com/",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_yXMkAW2zH6Rjf1Q1n1E79WvH6Z4xwCV9MQ&usqp=CAU",
    // title: "CRUD Operations",
    link: "https://www.example-crud.com/",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDp2gXsgr57GTumQafBhu4xbRVV8hZYTh5GA&usqp=CAU",
    // title: "React Hook Form",
    link: "https://react-hook-form.com/",
  },
  
  {
    icon: "data:image/png;base64,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",
    // title: "API",
    link: "https://git-scm.com/",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    // title: "Git",
    link: "https://git-scm.com/",
  },
];

export default function Skills() {
  return (
    <Box py={["0px", "60px", "80px"]} id="skills">
      <Center pb="30px" textAlign="center">
        <Heading color="#B0BEC5">Technologies and Tools</Heading>
      </Center>
      <Grid
        className="skills-card"
        p={["4%", "0%", "0%", "0%"]}
        w={["100%", "80%", "85%", "80%", "70%"]}
        gridTemplateColumns={[
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
          "repeat(5,1fr)",
        ]}
        gap={4}
        margin={"auto"}>
        {skill.map(({ icon, title, link }) => {
          return (
            <Flip left>
              <GridItem
                key={Math.random()}
                padding={"35px"}
                overflow="hidden"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}>
                <Link href={link} target="_blank">
                  <Image
                    margin="auto"
                    className="skills-card-img"
                    src={icon}
                    w="80%"
                    transition="all .1s ease-in-out"
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                    borderRadius="10%"
                  />
                </Link>
                <Text
                  className="skills-card-name"
                  textAlign={"center"}
                  fontSize={["md", "lg", "lg", "xl"]}
                  color="#fff">
                  {title}
                </Text>
              </GridItem>
            </Flip>
          );
        })}
      </Grid>
    </Box>
  );
}
