import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

const SearchInput = () => (
  <Input size="large" placeholder="Search" prefix={<UserOutlined />} />
);
export default SearchInput;
