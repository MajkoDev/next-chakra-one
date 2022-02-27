import { Button, Heading, Text, Stack, Center, Box } from "@chakra-ui/react";
import Head from "next/head";

import Container from "../components/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
          <Center>

        <Stack as='box' maxW='container.md' textAlign='center'>
          <Heading>This is my Name.</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            quas numquam voluptatem? Aut omnis molestiae totam animi! Voluptatum
            quae at hic quod pariatur.
          </Text>
          <Box as='span' fontWeight='bold' fontSize='lg'>
            <Button>Learn More</Button>
          </Box>
        </Stack>

        </Center>

      </Container>
    </>
  );
}
