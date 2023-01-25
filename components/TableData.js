import { Button, Table } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.min.css'
const columns = [
  {
    title: 'Task Title',
    dataIndex: 'task',
    key: 'key'
  },
  {
    title: 'Customer ID',
    dataIndex: 'customerID',
    key: 'key'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'key'
  },
  {
    title: 'Created Date',
    dataIndex: 'createdDate',
    key: 'key'
  },
  {
    title: 'Assign To',
    dataIndex: 'assignTo',
    key: 'key',
  }
]
const data = [
    {
        task : 'Task 1',
        customerID : '12345',
        status:'in-progress',
        createdDate: '01-11-2022',
        assignTo: 'Tagger',
        key: '1'
    },
    {
        task : 'Task 2',
        customerID : '54331',
        status:'completed',
        createdDate: '03-11-2022',
        assignTo: 'Reviewer',
        key: '2'
    },
    {
        task : 'Task 3',
        customerID : '34253',
        status:'in-progress',
        createdDate: '02-11-2022',
        assignTo: 'Tagger',
        key: '3'
    },
    {
        task : 'Task 4',
        customerID : '53422',
        status:'completed',
        createdDate: '05-11-2022',
        assignTo: 'Reviewer',
        key: '4'
    },
]

const TableData = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          StartWorking
        </Button>
        <span
          style={{
            marginRight: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};
export default TableData;