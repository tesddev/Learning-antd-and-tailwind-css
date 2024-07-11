import { Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    name: 'John Brown',
    email: 'John@example.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWki2eJhssLFzkCsVmB8ySb26doT1xg3thWA&s',
    title: 'Software Engineer',
    specialty: 'web dev',
    status: ['Active'],
    role: 'Owner',
  },
  {
    key: '2',
    name: 'John Brown',
    email: 'John@example.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWki2eJhssLFzkCsVmB8ySb26doT1xg3thWA&s',
    title: 'Software Engineer',
    specialty: 'web dev',
    status: ['Active'],
    role: 'Owner',
  },
  {
    key: '3',
    name: 'John Brown',
    email: 'John@example.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWki2eJhssLFzkCsVmB8ySb26doT1xg3thWA&s',
    title: 'Software Engineer',
    specialty: 'web dev',
    status: ['Active'],
    role: 'Owner',
  },
  {
    key: '3',
    name: 'John Brown',
    email: 'John@example.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWki2eJhssLFzkCsVmB8ySb26doT1xg3thWA&s',
    title: 'Software Engineer',
    specialty: 'web dev',
    status: ['Active'],
    role: 'Owner',
  },
  {
    key: '3',
    name: 'John Brown',
    email: 'John@example.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWki2eJhssLFzkCsVmB8ySb26doT1xg3thWA&s',
    title: 'Software Engineer',
    specialty: 'web dev',
    status: ['Active'],
    role: 'Owner',
  },
  {
    key: '3',
    name: 'John Brown',
    email: 'John@example.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWki2eJhssLFzkCsVmB8ySb26doT1xg3thWA&s',
    title: 'Software Engineer',
    specialty: 'web dev',
    status: ['Active'],
    role: 'Owner',
  },
  {
    key: '3',
    name: 'John Brown',
    email: 'John@example.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWki2eJhssLFzkCsVmB8ySb26doT1xg3thWA&s',
    title: 'Software Engineer',
    specialty: 'web dev',
    status: ['Active'],
    role: 'Owner',
  },
  {
    key: '3',
    name: 'John Brown',
    email: 'John@example.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWki2eJhssLFzkCsVmB8ySb26doT1xg3thWA&s',
    title: 'Software Engineer',
    specialty: 'web dev',
    status: ['Active'],
    role: 'Owner',
  },
  
];

const TableComponents = () => (
  <Table dataSource={data}>
    <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup>
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
);
export default TableComponents;