import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  NotificationOutlined,
  TableOutlined,
  FormOutlined,
  CreditCardOutlined,
  DatabaseOutlined,
  LayoutOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UsergroupAddOutlined
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import SearchInput from "../ui/SearchInput";
import avatar from "../../assets/img.png";
import CardComponent from "../ui/CardComponent";
import TableComponents from "../ui/TableComponents";

const { Header, Sider, Content } = Layout;
const Nav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const firstImage = <UsergroupAddOutlined/>
  const secondImage = <ShoppingCartOutlined/>
  const thirdImage = <ShoppingOutlined />

  const theClassName1 = "h-[60px] w-[60px] bg-purple-600 rounded-full flex justify-center items-center text-3xl"
  const theClassName2 = "h-[60px] w-[60px] bg-blue-600 rounded-full flex justify-center items-center text-3xl"
  const theClassName3 = "h-[60px] w-[60px] bg-pink-500 rounded-full flex justify-center items-center text-3xl"
  return (
    <Layout className="h-screen w-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <h1 className="text-2xl text-white p-6">V-dashboard</h1>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "UI elements",
            },
            {
              key: "3",
              icon: <TableOutlined />,
              label: "Tables",
            },
            {
              key: "4",
              icon: <FormOutlined />,
              label: "Forms",
            },
            {
              key: "5",
              icon: <CreditCardOutlined />,
              label: "Card",
            },
            {
              key: "6",
              icon: <DatabaseOutlined />,
              label: "Modal",
            },
            {
              key: "7",
              icon: <LayoutOutlined />,
              label: "Blank",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 10,
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="flex">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <div className="w-[500px]">
              <SearchInput />
            </div>
          </div>
          <div
            className="flex
           justify-center items-center"
          >
            <div>
              <NotificationOutlined size="40px" />
            </div>
            <div className="h-[40px] w-[40px] rounded-full">
              <img
                src={avatar}
                alt=""
                className="h-full w-full object-cover overflow-auto"
              />
            </div>
          </div>
        </Header>
        <hr class="w-full bg-purple-700 h-1.5" />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "whitesmoke",
            borderRadius: borderRadiusLG,
          }}
        >
        <div>
          <h1 className="text-4xl">Dashboard</h1>
        </div>
        <div className="mt-4 flex justify-between">
          <CardComponent numbers="8282"   text="new user" image={firstImage} theClassName={theClassName1}/>
          <CardComponent  numbers="200521" text="total orders" image={secondImage} theClassName={theClassName2}/>
          <CardComponent numbers="215542"  text="avialiable Products" image={thirdImage} theClassName={theClassName3}/>
        </div>
        <br></br><br></br>
        <div>
          <TableComponents/>
        </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Nav;
