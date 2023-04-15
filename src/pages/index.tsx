import { Box, Link, List, ListItem, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <main>
      <Box maxW={300} padding={4}>
        <VStack as="nav">
          <List spacing={3}>
            <ListItem>
              <NextLink href="/ui1" passHref>
                <Link color="blue.600" textDecoration="underline">
                  design1
                </Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href="/ui2" passHref>
                <Link color="blue.600" textDecoration="underline">
                  design2
                </Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href="/ui3" passHref>
                <Link color="blue.600" textDecoration="underline">
                  design3
                </Link>
              </NextLink>
            </ListItem>
          </List>
        </VStack>
      </Box>
    </main>
  );
}
