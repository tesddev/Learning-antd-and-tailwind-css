import { Card } from "antd";
import { MehOutlined } from "@ant-design/icons";

// eslint-disable-next-line react/prop-types
const CardComponent = ({numbers, text}) => (
  <Card
    style={{
      width: 300,
    }}
  >
    <div className="flex ">
      <div className="h-[50px] w-[50px] bg-red-200 rounded-full flex justify-center items-center text-3xl">
        <MehOutlined />
      </div>
      <div className="px-6">
        <h3 className="text-3xl text bold">{numbers}</h3>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  </Card>
);
export default CardComponent;
