import React from 'react';
import { Table, Button, Space, Tag, Popconfirm, Card } from 'antd';
import { DeleteOutlined, PlayCircleOutlined, ReloadOutlined } from '@ant-design/icons';
import { Task } from '../types/Task';
import ExecutionHistory from './ExecutionHistory';

interface TaskListProps {
  tasks: Task[];
  loading: boolean;
  onDelete: (id: string) => void;
  onExecute: (id: string) => void;
  onRefresh: () => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  loading,
  onDelete,
  onExecute,
  onRefresh
}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 200,
      fixed: 'left' as const,
      render: (name: string) => (
        <span style={{ fontWeight: 500, fontSize: '14px' }}>{name}</span>
      ),
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
      width: 150,
      render: (owner: string) => (
        <Tag color="purple">{owner}</Tag>
      ),
    },
    {
      title: 'Command',
      dataIndex: 'command',
      key: 'command',
      width: 250,
      render: (command: string) => (
        <Tag color="blue" style={{ fontFamily: 'monospace', fontSize: '12px' }}>
          {command}
        </Tag>
      ),
    },
    {
      title: 'Executions',
      key: 'executions',
      width: 120,
      align: 'center' as const,
      render: (record: Task) => (
        <Tag color={record.taskExecutions && record.taskExecutions.length > 0 ? 'green' : 'default'}>
          {record.taskExecutions?.length || 0}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 220,
      fixed: 'right' as const,
      render: (record: Task) => (
        <Space size="small">
          <Button
            type="primary"
            icon={<PlayCircleOutlined />}
            onClick={() => onExecute(record.id!)}
            size="small"
          >
            Execute
          </Button>
          <Popconfirm
            title="Delete task?"
            description="This action cannot be undone."
            onConfirm={() => onDelete(record.id!)}
            okText="Delete"
            cancelText="Cancel"
            okButtonProps={{ danger: true }}
          >
            <Button danger icon={<DeleteOutlined />} size="small">
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Card
      title="Tasks"
      extra={
        <Button icon={<ReloadOutlined />} onClick={onRefresh}>
          Refresh
        </Button>
      }
    >
      <Table
        columns={columns}
        dataSource={tasks}
        loading={loading}
        rowKey="id"
        scroll={{ x: 1000 }}
        expandable={{
          expandedRowRender: (record) => <ExecutionHistory executions={record.taskExecutions || []} />,
          rowExpandable: (record) => (record.taskExecutions?.length || 0) > 0,
        }}
        pagination={{ 
          pageSize: 10,
          showTotal: (total) => `${total} total`,
          responsive: true
        }}
      />
    </Card>
  );
};

export default TaskList;
