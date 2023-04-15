import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";

export function Chakra() {
  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} bgColor="gray.50" py={4}>
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
      <Container maxW="none">
        <Heading as="h1">Table</Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th isNumeric>No.</Th>
                <Th>公開設定</Th>
                <Th>ソリューション名</Th>
                <Th>型番</Th>
                <Th>作成日</Th>
                <Th>更新日</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td isNumeric>1</Td>
                <Td>
                  <Badge colorScheme="green">公開中</Badge>
                </Td>
                <Td>ソリューション1</Td>
                <Td>RSD_00001</Td>
                <Td>2023/01/01 00:00:00</Td>
                <Td>2023/01/01 00:00:00</Td>
              </Tr>
              <Tr>
                <Td isNumeric>2</Td>
                <Td>
                  <Badge colorScheme="red">非公開</Badge>
                </Td>
                <Td>ソリューション2</Td>
                <Td>RSD_00002</Td>
                <Td>2023/01/01 00:00:00</Td>
                <Td>2023/01/01 00:00:00</Td>
              </Tr>
              <Tr>
                <Td isNumeric>3</Td>
                <Td>
                  <Badge colorScheme="green">公開中</Badge>
                </Td>
                <Td>ソリューション3</Td>
                <Td>RSD_00003</Td>
                <Td>2023/01/01 00:00:00</Td>
                <Td>2023/01/01 00:00:00</Td>
              </Tr>
              <Tr>
                <Td isNumeric>4</Td>
                <Td>
                  <Badge colorScheme="red">非公開</Badge>
                </Td>
                <Td>ソリューション4</Td>
                <Td>RSD_00004</Td>
                <Td>2023/01/01 00:00:00</Td>
                <Td>2023/01/01 00:00:00</Td>
              </Tr>
              <Tr>
                <Td isNumeric>5</Td>
                <Td>
                  <Badge colorScheme="green">公開中</Badge>
                </Td>
                <Td>ソリューション5</Td>
                <Td>RSD_00005</Td>
                <Td>2023/01/01 00:00:00</Td>
                <Td>2023/01/01 00:00:00</Td>
              </Tr>
              <Tr>
                <Td isNumeric>6</Td>
                <Td>
                  <Badge colorScheme="red">非公開</Badge>
                </Td>
                <Td>ソリューション6</Td>
                <Td>RSD_00006</Td>
                <Td>2023/01/01 00:00:00</Td>
                <Td>2023/01/01 00:00:00</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th isNumeric>No.</Th>
                <Th>公開設定</Th>
                <Th>ソリューション名</Th>
                <Th>型番</Th>
                <Th>作成日</Th>
                <Th>更新日</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Container>
      <Container maxW="none">
        <Heading as="h1">Form</Heading>
        <Container as="form">
          <FormControl>
            <Box>
              <FormLabel>メールアドレス</FormLabel>
              <Input type="email" />
            </Box>
            <Box mt={4}>
              <FormLabel>パスワード</FormLabel>
              <Input type="password" />
            </Box>
            <Button mt={4} colorScheme="teal" type="button">
              Submit
            </Button>
          </FormControl>
        </Container>
      </Container>
    </VStack>
  );
}
