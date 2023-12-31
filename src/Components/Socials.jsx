import { Link, Image, Box, Stack } from "@chakra-ui/react";
import React from "react";

const socials = [
  {
    logo: "https://cdn-icons-png.flaticon.com/512/270/270798.png",
    link: "https://github.com/Arpit-Yadav-Dev",
    
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/2504/2504923.png",
    link: "https://www.linkedin.com/in/arpit-yadav-74574826a/",
  },
];
export default function Socials() {
  return (
    <Stack
      spacing={5}
      position={"fixed"}
      bottom={7}
      left={6}
      visibility={["hidden", "hidden", "visible"]}>
      {socials.map((s) => {
        return (
          <Box
            width={"40px"}
            transition="transform 0.4s"
            key={Math.random()}
            _hover={{
              transform: "rotate(360deg) scaleY(1.1)",
            }}>
            <Link href={s.link} target="_blank" key={Math.random()}>
              <Image src={s.logo} />
            </Link>
          </Box>
        );
      })}
    </Stack>
  );
}
