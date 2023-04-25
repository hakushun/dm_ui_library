import React from "react";
import {
  Card,
  Image,
  Layout,
  Row,
  Col,
  Divider,
  Typography,
  theme,
  Table,
  Tag,
  Form,
  Input,
  Button,
} from "antd";
import { ColumnsType } from "antd/es/table";

const { Meta } = Card;
const { Content } = Layout;
const { Title } = Typography;
const { useToken } = theme;

interface DataType {
  no: number;
  publishSetting: string;
  solutionName: string;
  modelNo: string;
  createdAt: string;
  updatedAt: string;
}

const PUBLISH_SETTING = {
  public: "公開中",
  private: "非公開",
} as const;

const columns: ColumnsType<DataType> = [
  {
    title: "No.",
    dataIndex: "no",
    key: "no",
    align: "right",
  },
  {
    title: "公開設定",
    dataIndex: "publishSetting",
    key: "publishSetting",
    align: "center",
    render: (publishSetting: string) => (
      <>
        <Tag
          color={publishSetting === PUBLISH_SETTING.public ? "cyan" : "magenta"}
        >
          {publishSetting}
        </Tag>
      </>
    ),
  },
  {
    title: "ソリューション名",
    dataIndex: "solutionName",
    key: "solutionName",
    align: "center",
  },
  {
    title: "型番",
    dataIndex: "modelNo",
    key: "modelNo",
    align: "center",
  },
  {
    title: "作成日",
    dataIndex: "createdAt",
    key: "createdAt",
    align: "center",
  },
  {
    title: "更新日",
    dataIndex: "updatedAt",
    key: "updatedAt",
    align: "center",
  },
];

const dataSource = [
  {
    no: 1,
    publishSetting: PUBLISH_SETTING.public,
    solutionName: "ソリューション1",
    modelNo: "RSD_00001",
    createdAt: "2023/01/01 00:00:00",
    updatedAt: "2023/01/01 00:00:00",
  },
  {
    no: 2,
    publishSetting: PUBLISH_SETTING.private,
    solutionName: "ソリューション2",
    modelNo: "RSD_00002",
    createdAt: "2023/01/01 00:00:00",
    updatedAt: "2023/01/01 00:00:00",
  },
  {
    no: 3,
    publishSetting: PUBLISH_SETTING.public,
    solutionName: "ソリューション3",
    modelNo: "RSD_00003",
    createdAt: "2023/01/01 00:00:00",
    updatedAt: "2023/01/01 00:00:00",
  },
  {
    no: 4,
    publishSetting: PUBLISH_SETTING.private,
    solutionName: "ソリューション4",
    modelNo: "RSD_00004",
    createdAt: "2023/01/01 00:00:00",
    updatedAt: "2023/01/01 00:00:00",
  },
  {
    no: 5,
    publishSetting: PUBLISH_SETTING.public,
    solutionName: "ソリューション5",
    modelNo: "RSD_00005",
    createdAt: "2023/01/01 00:00:00",
    updatedAt: "2023/01/01 00:00:00",
  },
  {
    no: 6,
    publishSetting: PUBLISH_SETTING.private,
    solutionName: "ソリューション6",
    modelNo: "RSD_00006",
    createdAt: "2023/01/01 00:00:00",
    updatedAt: "2023/01/01 00:00:00",
  },
];

export function Ant() {
  const { token } = useToken();

  return (
    <Layout>
      <Content
        style={{
          maxWidth: "none",
          padding: "16px 24px",
          backgroundColor: "#fafafa",
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
        {/* /Card */}
        <Divider style={{ margin: token.marginMD }} />
        <Title>Table</Title>
        <Row justify="center">
          <Col span={20}>
            <Table dataSource={dataSource} columns={columns} />
          </Col>
        </Row>
        {/* /Table */}
        <Divider style={{ margin: token.marginMD }} />
        <Title>Form</Title>
        <Row justify="center">
          <Col span={8}>
            <Form name="basic" layout="vertical">
              <Form.Item label="メールアドレス" name="mail">
                <Input type="email" />
              </Form.Item>
              <Form.Item label="パスワード" name="password">
                <Input type="password" />
              </Form.Item>
              <Form.Item name="submit">
                <Button type="primary" htmlType="button">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
        {/* /Form */}
      </Content>
    </Layout>
  );
}
