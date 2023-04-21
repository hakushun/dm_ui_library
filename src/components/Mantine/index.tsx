import { Card, Container, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";

export function Mantine() {
  return (
    <Stack>
      <Container>
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
    </Stack>
  );
}
