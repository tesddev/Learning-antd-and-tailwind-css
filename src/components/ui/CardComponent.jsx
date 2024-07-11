import { Card } from "antd";
const col = "red-200"
const theClassName = "h-[50px] w-[50px] bg-red-200 rounded-full flex justify-center items-center text-3xl"
// eslint-disable-next-line react/prop-types
const CardComponent = ({numbers, text, image, theClassName}) => (
  
  <Card
    style={{
      width: 430,
    }}
  >
    <div className="flex ">
      <div className={theClassName}>
        {image}
      </div>
      <div className="px-6">
        <h3 className="text-3xl text bold">{numbers}</h3>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  </Card>
);
export default CardComponent;
