import {
  Badge,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Image,
  PasswordInput,
  Stack,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

export function Mantine() {
  return (
    <Stack py={10}>
      <Container w="100%">
        <Title order={1}>Card</Title>
        <Flex gap="md">
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Norway"
                width={300}
              />
            </Card.Section>
            <Container mt={10} px={0}>
              <Group>
                <Text weight={600}>ソリューション名</Text>
              </Group>
              <Group position="right">
                <Text size="sm" color="dimmed">
                  企業名
                </Text>
              </Group>
            </Container>
          </Card>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Norway"
                width={300}
              />
            </Card.Section>
            <Container mt={10} px={0}>
              <Group>
                <Text weight={600}>ソリューション名</Text>
              </Group>
              <Group position="right">
                <Text size="sm" color="dimmed">
                  企業名
                </Text>
              </Group>
            </Container>
          </Card>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Norway"
                width={300}
              />
            </Card.Section>
            <Container mt={10} px={0}>
              <Group>
                <Text weight={600}>ソリューション名</Text>
              </Group>
              <Group position="right">
                <Text size="sm" color="dimmed">
                  企業名
                </Text>
              </Group>
            </Container>
          </Card>
        </Flex>
      </Container>
      <Container w="100%">
        <Title order={1}>Table</Title>
        <Table>
          <thead>
            <tr>
              <th>No.</th>
              <th>公開設定</th>
              <th>ソリューション名</th>
              <th>型番</th>
              <th>作成日</th>
              <th>更新日</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Badge>公開中</Badge>
              </td>
              <td>ソリューション名1</td>
              <td>RSD_00001</td>
              <td>2023/01/01 00:00:00</td>
              <td>2023/01/01 00:00:00</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Badge color="red">非公開</Badge>
              </td>
              <td>ソリューション名2</td>
              <td>RSD_00002</td>
              <td>2023/01/01 00:00:00</td>
              <td>2023/01/01 00:00:00</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Badge>公開中</Badge>
              </td>
              <td>ソリューション名3</td>
              <td>RSD_00003</td>
              <td>2023/01/01 00:00:00</td>
              <td>2023/01/01 00:00:00</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <Badge color="red">非公開</Badge>
              </td>
              <td>ソリューション名4</td>
              <td>RSD_00004</td>
              <td>2023/01/01 00:00:00</td>
              <td>2023/01/01 00:00:00</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <Badge>公開中</Badge>
              </td>
              <td>ソリューション名5</td>
              <td>RSD_00005</td>
              <td>2023/01/01 00:00:00</td>
              <td>2023/01/01 00:00:00</td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <Badge color="red">非公開</Badge>
              </td>
              <td>ソリューション名6</td>
              <td>RSD_00006</td>
              <td>2023/01/01 00:00:00</td>
              <td>2023/01/01 00:00:00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>No.</th>
              <th>公開設定</th>
              <th>ソリューション名</th>
              <th>型番</th>
              <th>作成日</th>
              <th>更新日</th>
            </tr>
          </tfoot>
        </Table>
      </Container>
      <Container w="100%">
        <Title order={1}>Form</Title>
        <Stack maw={380} mx="auto">
          <TextInput label="メールアドレス" type="email" />
          <PasswordInput label="パスワード" defaultValue="secret" />
          <Group>
            <Button>Submit</Button>
          </Group>
        </Stack>
      </Container>
    </Stack>
  );
}
