import React from 'react';

import { Flex, Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <>
      {text.includes('Jim')&&<Tag color="error">重点关注</Tag>}
      {/* a && b:a成立就渲染b */}
      {<a>{text}</a>}
    </>,
    filters:[
      {
      text:'姓 J 的',value:'J'
    },
      {
      text:'姓 K 的',value:'K'
    },
  ],
  onFilter:(value,record) =>record.name.startsWith(value),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    // render:text =><span style={{color:text>40? 'red':''}}>{text +"岁"}</span>
    render:text =><span style={text>40?{color:'red'}:undefined}>{text +"岁"}</span>,//这个更好，先执行判断再决定要不要绑定css
    sorter:(a,b) =>a.age - b.age
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    filters:[
      {text:'纽约',value:'New York'},
      {text:'伦敦',value:'London'},
      
    ],
    onFilter:(value,record) =>record.address.startsWith(value),
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <Flex gap="small" align="center" wrap>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })},

      </Flex>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
        <a onClick={()=>console.log(`你好，来自${record.address}的${record.name}!`)}>greet</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Ken Black',
    age: 49,
    address: '  No. 5 Lake Park',
    tags: ['joker', 'teacher'],
  },
];
const App = () => <Table columns={columns} dataSource={data} />;
export default App;