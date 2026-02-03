import { Table, Tag, Space } from 'antd';
import { useState,useEffect } from 'react';

// 1. 在组件外部定义 columns（说明书）
const columns = [
  {
    title: '姓名', // 表头显示的文字
    dataIndex: 'name', // 对应你数据里的键名
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '病历状态',
    dataIndex: 'state',
    key: 'state',
    // ⭐ 重点：利用 render 函数来实现“条件渲染”
    render: (state) => (
      <Tag color={state === '已上链' ? 'green' : 'volcano'}>
        {state}
      </Tag>
    ),
  },
  {
    title: '管理',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a onClick={() => console.log('查看', record.name)}>查看详情</a>
      </Space>
    ),
  },
];
// useState

export default function PatientTable() {
  // ...你昨天的 useState 和 useEffect 逻辑不变
  const[list,setList] = useState([]);
  useEffect(() =>{
      const timer = setTimeout(() =>{
          const mockPatient = [
              {name:'张三',state:'已上链',age:18},
              {name:'李四',state:'未上链',age:33},
              {name:'王五',state:'已上链',age:16}
          ];
          setList(mockPatient)
          console.log('数据到了！')
      },1000);
      return () => clearTimeout(timer);
  },[]);
  return (
    <div style={{ padding: '20px' }}>
      <Table 
        columns={columns} 
        dataSource={list} 
        rowKey="name" // 给每一行一个唯一标识
        loading={list.length === 0} // 数据没来时自动显示漂亮的小圈圈
      />
    </div>
  );
}





