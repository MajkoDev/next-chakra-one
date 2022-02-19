import { useState } from "react";
import Head from "next/head";
import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import Container from "../components/Container";
import {getAllFilesFrontMatter} from "../lib/mdx"
import BlogPost from '../components/BlogPost'

import {SearchIcon} from '@chakra-ui/react'

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - Marvin Dev</title>
      </Head>
      <Container>
        <Stack
          as='main'
          spacing={8}
          justifyContent='center'
          alignItems='flex-start'
          m='0 auto 4rem auto'
          maxWidth='700px'
          px={2}>
          <Flex
            flexDirection='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            maxWidth='700px'>

                <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                    Blog
                </Heading>

                {posts.map((frontMatter) => <BlogPost key={frontMatter.title} {...frontMatter} />)}
            </Flex>
        </Stack>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
