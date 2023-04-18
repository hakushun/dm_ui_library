import {
  Card,
  Image,
  Layout,
  Row,
  Col,
  Divider,
  Typography,
  theme,
} from "antd";

const { Meta } = Card;
const { Content } = Layout;
const { Title } = Typography;
const { useToken } = theme;

export function Ant() {
  const { token } = useToken();

  return (
    <Layout>
      <Content
        style={{
          maxWidth: "none",
          padding: "16px 24px",
        }}
      >
        <Title>Card</Title>
        <Row justify="center" gutter={[24, 16]}>
          <Col>
            <Card
              style={{ width: 360 }}
              cover={
                <Image
                  src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Green double couch with wooden legs"
                />
              }
            >
              <Meta title="ソリューション名" description="企業名" />
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: 360 }}
              cover={
                <Image
                  src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Green double couch with wooden legs"
                />
              }
            >
              <Meta title="ソリューション名" description="企業名" />
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: 360 }}
              cover={
                <Image
                  src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Green double couch with wooden legs"
                />
              }
            >
              <Meta title="ソリューション名" description="企業名" />
            </Card>
          </Col>
        </Row>
      </Content>
      {/* /Card Content */}
      <Divider style={{ margin: token.marginXS }} />
      <Content style={{ maxWidth: "none", padding: "16px 24px" }}>
        <Title>Table</Title>
        <Row justify="center" gutter={[24, 16]}>
          <Col>
            <Card
              style={{ width: 360 }}
              cover={
                <Image
                  src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Green double couch with wooden legs"
                />
              }
            >
              <Meta title="ソリューション名" description="企業名" />
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: 360 }}
              cover={
                <Image
                  src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Green double couch with wooden legs"
                />
              }
            >
              <Meta title="ソリューション名" description="企業名" />
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: 360 }}
              cover={
                <Image
                  src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Green double couch with wooden legs"
                />
              }
            >
              <Meta title="ソリューション名" description="企業名" />
            </Card>
          </Col>
        </Row>
      </Content>
      {/* /Table Content */}
    </Layout>
  );
}
