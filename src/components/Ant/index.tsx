import { Card, Image } from "antd";

export function Ant() {
  const { Meta } = Card;

  return (
    <Card
      style={{ width: 300 }}
      cover={
        <Image
          src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Green double couch with wooden legs"
        />
      }
    >
      <Meta title="ソリューション名" description="企業名" />
    </Card>
  );
}
