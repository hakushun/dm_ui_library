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
    modelNo: "RSD_00002",
    createdAt: "2023/01/01 00:00:00",
    updatedAt: "2023/01/01 00:00:00",
  },
  {
    no: 4,
    publishSetting: PUBLISH_SETTING.private,
    solutionName: "ソリューション4",
    modelNo: "RSD_00002",
    createdAt: "2023/01/01 00:00:00",
    updatedAt: "2023/01/01 00:00:00",
  },
  {
    no: 5,
    publishSetting: PUBLISH_SETTING.public,
    solutionName: "ソリューション5",
    modelNo: "RSD_00002",
    createdAt: "2023/01/01 00:00:00",
    updatedAt: "2023/01/01 00:00:00",
  },
  {
    no: 6,
    publishSetting: PUBLISH_SETTING.private,
    solutionName: "ソリューション6",
    modelNo: "RSD_00002",
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
        <Table dataSource={dataSource} columns={columns} />;
      </Content>
      {/* /Table Content */}
    </Layout>
  );
}
