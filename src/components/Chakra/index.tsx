import {
  Card,
  CardBody,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";

export function Chakra() {
  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} bgColor="gray.50">
      <Container maxW="none">
        <Heading as="h1">Card</Heading>
        <HStack spacing={4}>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">ソリューション名</Heading>
                <Text fontSize="sm" textAlign="right">
                  企業名
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">ソリューション名</Heading>
                <Text fontSize="sm" textAlign="right">
                  企業名
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">ソリューション名</Heading>
                <Text fontSize="sm" textAlign="right">
                  企業名
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </HStack>
      </Container>
    </VStack>
  );
}
