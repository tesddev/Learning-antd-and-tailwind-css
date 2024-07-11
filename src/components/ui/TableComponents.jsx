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
    <Column
      title={
        <div class="text-zinc-400">NAME</div>
      }
      key="name"
      render={(text, record) => (
        <Space size="middle">
          <img src={record.image} alt="profile" style={{ width: 40, height: 40 }} class="rounded-full"/>
          <div>
            <div>{record.name}</div>
            <div style={{ fontSize: 'smaller', color: 'gray' }}>{record.email}</div>
          </div>
        </Space>
      )}
    />

    <Column
      title={
        <div class="text-zinc-400">TITLE</div>
      }
      key="title"
      render={(text, record) => (
        <Space size="middle">
          <div>
            <div>{record.title}</div>
            <div style={{ fontSize: 'smaller', color: 'gray' }}>{record.specialty}</div>
          </div>
        </Space>
      )}
    />
    <Column
      title={
        <div class="text-zinc-400">STATUS</div>
      }
      dataIndex="status"
      key="status"
      render={(tags) => (
        <>
          {tags.map((tag) => {
            let color = '#D1FAE5';
            if (tag === 'loser') {
              color = '#D1FAE5';
            }
            return (
              <Tag color={color} key={tag}>
                <div style={{ fontSize: 'small', color: 'black' }}>{tag}</div>
              </Tag>
            );
          })}
        </>
      )}
    />
    <Column
      title={
        <div class="text-zinc-400">ROLE</div>
      }
      dataIndex="role"
      key="role"
      render={(value, record) => (
        <Space size="middle">
          <a>{value}</a>
        </Space>
      )}
    />
    <Column
      title=""
      key=""
      render={(_, record) => (
        <Space size="middle">
          <a class='text-blue-600'>Edit</a>
        </Space>
      )}
    />
  </Table>
);
export default TableComponents;